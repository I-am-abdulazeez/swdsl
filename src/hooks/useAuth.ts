import { useToast } from "@chakra-ui/react";
import {
  useAuthCreateUserWithEmailAndPassword,
  useAuthSignInWithEmailAndPassword,
  useAuthSignOut,
} from "@react-query-firebase/auth";
import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { updateProfile, UserInfo } from "firebase/auth";
import { collection } from "firebase/firestore";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { firebaseAuth, firebaseFirestore } from "src/lib/firebase";

export const useAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signOutMutation = useAuthSignOut(firebaseAuth);
  const collectionRef = collection(firebaseFirestore, "users");
  const addDocumentMutation = useFirestoreCollectionMutation(collectionRef, {
    onError(error) {
      console.log(error);
    },
    onSuccess(data) {
      console.log(data);
    },
  });
  const chakraToast = useToast();

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
      console.log(currentUser);
      router.push("/");
    },
  });

  // Create Users
  const SignUpUser = (email: string, password: string) => {
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
  const SignInUser = (email: string, password: string) => {
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
    router.push("/");
  };

  const addUser = (newUserData: any) => {};

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        // storage.getItem("user");
        setUser(user);
        setIsLoggedIn(true);
        console.log(user);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return {
    user,
    isLoggedIn,
    isLoading,
    SignUpUser,
    signOutUser,
    SignInUser,
  };
};
