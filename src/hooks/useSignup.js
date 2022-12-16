import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [event, setEvent] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
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

      // add display name to user
      // 프로필 업데이트 (유저 가입 이름)
      await res.user.updateProfile({ displayName });

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
