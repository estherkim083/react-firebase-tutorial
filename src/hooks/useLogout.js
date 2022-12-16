import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [event, setEvent] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    // 로그아웃 하기
    try {
      await projectAuth.signOut();
      // dispatch 로그아웃 액션
      dispatch({ type: "LOGOUT" });

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

  return { logout, error, isPending };
};
