import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useToast } from "@chakra-ui/react";
import { UserInfo } from "firebase/auth";

import {
  useAuthConfirmPasswordReset,
  useAuthSendPasswordResetEmail,
  useAuthSignInWithEmailAndPassword,
  useAuthSignOut,
} from "@react-query-firebase/auth";

import { firebaseAuth } from "@lib/firebase";

import { AuthContextType, ReactChildrenProp } from "@interfaces/index";

import { authContextInitialValues } from "@data/index";

export const AuthContext = createContext<AuthContextType>(
  authContextInitialValues
);

export const AuthProvider = ({ children }: ReactChildrenProp) => {
  const router = useRouter();
  const chakraToast = useToast();
  const urlRedirectMode =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/auth/login"
      : "https://www.shayowithdsl.com/auth/login";
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signOutMutation = useAuthSignOut(firebaseAuth);

  const signInMutation = useAuthSignInWithEmailAndPassword(firebaseAuth, {
    onError(error) {
      console.log(error);
      setUser(null);
      setIsLoading(false);
      chakraToast({
        title: error.message,
        isClosable: true,
        status: "error",
        variant: "subtle",
        containerStyle: {
          fontSize: "12.5px",
        },
      });
    },
    onSuccess(data) {
      const currentUser = data.user;
      setUser(currentUser);
      setIsLoggedIn(true);
      setIsLoading(false);
    },
  });

  // Signin User
  const signInUser = (email: string, password: string) => {
    setIsLoading(true);
    if (email && password) {
      signInMutation.mutate({
        email,
        password,
      });
    }
  };

  const sendPasswordResetEmailMutation = useAuthSendPasswordResetEmail(
    firebaseAuth,
    {
      onError(error) {
        setIsLoading(false);
        chakraToast({
          title: error.message,
          isClosable: true,
          variant: "subtle",
          status: "error",
          containerStyle: {
            fontSize: "12.5px",
          },
        });
      },
      onSuccess() {
        setIsLoading(false);
        chakraToast({
          title: "Email sent, check your email.",
          isClosable: true,
          status: "success",
          variant: "subtle",
          containerStyle: {
            fontSize: "12.5px",
          },
        });
        router.push("/auth/login");
      },
    }
  );

  // Password Reset Email
  const sendPasswordEmailReset = (email: string) => {
    setIsLoading(true);
    sendPasswordResetEmailMutation.mutate({
      email,
      actionCodeSettings: {
        url: urlRedirectMode,
      },
    });
  };

  const passwordResetMutation = useAuthConfirmPasswordReset(firebaseAuth, {
    onError(error) {
      setIsLoading(false);
      chakraToast({
        title: error.message,
        isClosable: true,
        variant: "subtle",
        status: "error",
        containerStyle: {
          fontSize: "12.5px",
        },
      });
    },
    onSuccess() {
      setIsLoading(false);
      chakraToast({
        title: "Password has been changed. you can now login now!",
        isClosable: true,
        status: "success",
        variant: "subtle",
        containerStyle: {
          fontSize: "12.5px",
        },
      });
      router.push("/auth/login");
    },
  });

  // Password rest
  const resetPassword = (oobCode: string, newPassword: string) => {
    setIsLoading(true);
    passwordResetMutation.mutate({
      newPassword,
      oobCode,
    });
  };

  // Signout user
  const signOutUser = () => {
    signOutMutation.mutate();
    setUser(null);
    setIsLoggedIn(false);
    router.push("/");
    localStorage.setItem("user", JSON.stringify(user));
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  });

  const value = {
    user,
    isLoggedIn,
    isLoading,
    setUser,
    setIsLoggedIn,
    setIsLoading,
    signOutUser,
    signInUser,
    sendPasswordEmailReset,
    resetPassword,
  };

  // Provider
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
