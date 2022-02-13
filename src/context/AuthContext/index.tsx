import { createContext, useContext, useState } from "react";
import {
  useAuthConfirmPasswordReset,
  useAuthCreateUserWithEmailAndPassword,
  useAuthSendPasswordResetEmail,
  useAuthSignInWithEmailAndPassword,
  useAuthSignOut,
} from "@react-query-firebase/auth";
import { UserInfo } from "firebase/auth";
import { useRouter } from "next/router";
import { AuthContextType } from "src/interfaces";
import { useToast } from "@chakra-ui/react";
import { firebaseAuth } from "src/lib/firebase";
import { authContextInitialValues } from "src/data";

const AuthContext = createContext<AuthContextType>(authContextInitialValues);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
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

  // SignUp User Mutation
  const signUpMutation = useAuthCreateUserWithEmailAndPassword(firebaseAuth, {
    onError(error) {
      setUser(null);
      setIsLoading(false);
      chakraToast({
        title: error.message,
        isClosable: true,
        status: "error",
      });
      setIsLoggedIn(false);
    },
    onSuccess(data) {
      const currentUser = data.user;
      setUser(currentUser);
      setIsLoggedIn(true);
      setIsLoading(false);
    },
  });

  // Signup User
  const signUpUser = (email: string, password: string) => {
    setIsLoading(true);
    if (email && password) {
      signUpMutation.mutate({
        email,
        password,
      });
    }
  };

  const signInMutation = useAuthSignInWithEmailAndPassword(firebaseAuth, {
    onError(error) {
      console.log(error);
      setUser(null);
      setIsLoading(false);
      chakraToast({
        title: error.message,
        isClosable: true,
        status: "error",
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
          status: "error",
        });
      },
      onSuccess() {
        setIsLoading(false);
        chakraToast({
          title: "Email sent, check your email.",
          isClosable: true,
          status: "success",
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
        status: "error",
      });
    },
    onSuccess() {
      setIsLoading(false);
      chakraToast({
        title: "Password has been changed. you can now login now!",
        isClosable: true,
        status: "success",
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
  };

  const value = {
    user,
    isLoggedIn,
    isLoading,
    setUser,
    signUpUser,
    signOutUser,
    signInUser,
    sendPasswordEmailReset,
    resetPassword,
  };

  // Provider
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
