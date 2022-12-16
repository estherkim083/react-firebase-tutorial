import { useEffect, useState } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const [event, setEvent] = useState(false);

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    // 로그아웃 하기
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      // update online status
      await projectFirestore.collection("users").doc(res.user.uid).update({
        online: true,
      });

      // dispatch 로그아웃 액션
      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
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

  /* console.log(isPending, "in useLogin hook- isPending");
  console.log(error, "in useLogin hook- error");
  console.log(isCancelled, "in useLogin hook- isCancelled");
  console.log(event, "in useLogin hook- event");
  //return { login, error, isPending }; */
  return { login, isPending, error };
};
