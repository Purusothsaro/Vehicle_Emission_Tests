"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthGuard = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    useEffect(() => {
      if (!isAuthenticated == "true") {
        router.push("/components/login");
      }
    }, [isAuthenticated]);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default AuthGuard;
