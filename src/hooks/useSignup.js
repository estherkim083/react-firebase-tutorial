import { useState, useEffect } from "react";
import {
  projectAuth,
  projectStorage,
  projectFirestore,
} from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [event, setEvent] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null);
    setIsPending(true);

    try {
      // 유저 회원가입
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error("Couldn't complete signup");
      }
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;
      const img = await projectStorage.ref(uploadPath).put(thumbnail);
      const imgUrl = await img.ref.getDownloadURL();

      // add display AND PHOTO_URL name to user
      await res.user.updateProfile({ displayName, photoURL: imgUrl });

      // create a user document
      await projectFirestore.collection("users").doc(res.user.uid).set({
        online: true,
        displayName,
        photoURL: imgUrl,
      });

      // dispatch login action 로그인 리듀서의 dispatch 실행
      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        // cleanup 기능
        setError(null);
        setIsPending(false);
        setEvent(true);
      }
    } catch (err) {
      // 에러 처리하기!!
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
        setEvent(true);
      }
    }
  };
  useEffect(() => {
    if (event) {
      return () => setIsCancelled(true);
    }
  }, [event]);
  return { signup, error, isPending };
};
