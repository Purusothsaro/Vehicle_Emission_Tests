"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthGuard = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const isAuthenticated = true;

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/components/login");
      }
    }, [isAuthenticated]);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default AuthGuard;
