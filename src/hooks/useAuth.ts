import { useToast } from "@chakra-ui/react";
import {
  useAuthCreateUserWithEmailAndPassword,
  useAuthSignInWithEmailAndPassword,
  useAuthSignOut,
} from "@react-query-firebase/auth";
import { UserInfo } from "firebase/auth";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { firebaseAuth } from "src/lib/firebase";

export const useAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signOutMutation = useAuthSignOut(firebaseAuth);
  const chakraToast = useToast();
  const storage = localStorage;

  // SignUp User Mutation
  const signUpMutation = useAuthCreateUserWithEmailAndPassword(firebaseAuth, {
    onError(error) {
      console.log(error);
      setUser(null);
      setIsLoading(false);
      chakraToast({
        title: error.message,
        isClosable: true,
        status: "error",
      });
      setIsLoggedIn(false);
    },
    onSuccess(data: any) {
      const currentUser = data.user;
      setUser(currentUser);
      setIsLoggedIn(true);
      console.log(currentUser);
      storage.setItem("user", JSON.stringify(user));
      storage.setItem("displayName", user?.displayName!);
      router.push("/");
    },
  });

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
      storage.setItem("user", JSON.stringify(user));
      storage.setItem("displayName", user?.displayName!);
      console.log(currentUser);
      router.push("/");
    },
  });

  // Create Users
  const signUpUser = (email: string, password: string) => {
    setIsLoading(true);
    if (email && password) {
      signUpMutation.mutate({
        email,
        password,
      });
      setIsLoggedIn(true);
    }
  };

  // Login Users
  const signInUser = (email: string, password: string) => {
    setIsLoading(true);
    if (email && password) {
      signInMutation.mutate({
        email,
        password,
      });
      setIsLoggedIn(true);
    }
  };

  // Sign Users out
  const signOutUser = () => {
    signOutMutation.mutate();
    setUser(null);
    setIsLoggedIn(false);
    storage.clear();
    router.push("/");
  };

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
        storage.setItem("user", JSON.stringify(user));
        storage.setItem("displayName", user?.displayName!);
        console.log(user);
      } else {
        setUser(null);
        setIsLoggedIn(false);
        storage.clear();
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return {
    user,
    isLoggedIn,
    isLoading,
    signUpUser,
    signOutUser,
    signInUser,
  };
};
