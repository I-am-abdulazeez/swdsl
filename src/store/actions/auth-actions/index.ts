import {
  AuthError,
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';

import Router from 'next/router';

import { useAuthStore } from '../../hooks/useAuthStore';
import { AuthActions } from '../../types';

import { firebaseAuth, firebaseFirestore } from '@config/firebase';
import { customToast } from '@utils/index';

const urlRedirectMode =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/auth/login'
    : 'https://www.shayowithdsl.com/auth/login';

const currentUser = getAuth().currentUser;

export const authActions: AuthActions = {
  signUpUser: (user, newUserDetails) => {
    const { email, password, firstname } = user;
    useAuthStore.setState((state) => ({
      ...state,
      isLoading: true,
    }));
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((currentUser) => {
        useAuthStore.setState((state) => ({
          ...state,
          isLoading: false,
          user: currentUser?.user,
          isAuthenticated: true,
        }));
        updateProfile(currentUser?.user, {
          displayName: firstname,
        }).catch((error) => {
          console.log(error);
        });
        const userId = currentUser?.user?.uid;
        const ref = doc(collection(firebaseFirestore, 'users'), userId);
        setDoc(ref, newUserDetails)
          .then(() => {
            console.log('done, saved to DB');
          })
          .catch((error) => {
            console.log(error);
          });
        customToast({
          status: 'success',
          title: 'Account created successfully',
        });
        Router.push('/');
      })
      .catch((error: AuthError) => {
        useAuthStore.setState((state) => ({
          ...state,
          isLoading: false,
          isAuthenticated: false,
        }));
        customToast({
          status: 'error',
          title: 'Error',
          description: error?.message,
        });
      });
  },
  signInUser: (user) => {
    const { email, password } = user;
    useAuthStore.setState((state) => ({
      ...state,
      isLoading: true,
    }));
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((currentUser) => {
        useAuthStore.setState((state) => ({
          ...state,
          isLoading: false,
          user: currentUser?.user,
          isAuthenticated: true,
        }));
        customToast({
          status: 'success',
          title: 'Logged in successfully',
        });
        Router.push('/');
      })
      .catch((error: AuthError) => {
        useAuthStore.setState((state) => ({
          ...state,
          isLoading: false,
          isAuthenticated: false,
        }));
        customToast({
          status: 'error',
          title: 'Error',
          description: error?.message,
        });
      });
  },
  forgotPassword: (email) => {
    useAuthStore.setState((state) => ({
      ...state,
      isLoading: true,
    }));
    sendPasswordResetEmail(firebaseAuth, email, { url: urlRedirectMode })
      .then(() => {
        useAuthStore.setState((state) => ({
          ...state,
          isLoading: false,
        }));
        customToast({
          status: 'success',
          title: 'Password reset email sent!',
        });
        Router.push('/auth/login');
      })
      .catch((error: AuthError) => {
        useAuthStore.setState((state) => ({
          ...state,
          isLoading: false,
        }));
        customToast({
          status: 'error',
          title: 'Error',
          description: error?.message,
        });
      });
  },
  resetPassword: (oobCode, password) => {
    useAuthStore.setState((state) => ({
      ...state,
      isLoading: true,
    }));
    confirmPasswordReset(firebaseAuth, oobCode, password).then(() => {
      useAuthStore.setState((state) => ({
        ...state,
        isLoading: false,
      }));
      customToast({
        status: 'success',
        title: 'Password reset successfully',
      });
      Router.push('/auth/login');
    });
  },
  updateDisplayName: (displayName) => {
    useAuthStore.setState((state) => ({
      ...state,
      isLoading: true,
    }));
    if (currentUser) {
      updateProfile(currentUser, { displayName })
        .then(() => {
          useAuthStore.setState((state) => ({
            ...state,
            isLoading: false,
            user: { ...state?.user!, displayName },
          }));
          customToast({
            status: 'success',
            title: 'Success',
            description: 'Display name updated successfully',
          });
        })
        .catch((error: AuthError) => {
          useAuthStore.setState((state) => ({
            ...state,
            isLoading: false,
          }));
          customToast({
            status: 'error',
            title: 'Error',
            description: error?.message,
          });
        });
    }
  },
  // updatePassword: (newPassword) => {
  //   useAuthStore.setState((state) => ({
  //     ...state,
  //     isLoadingPassword: true,
  //   }));
  //   if (currentUser) {

  //     updatePassword(currentUser, newPassword)
  //       .then(() => {
  //         useAuthStore.setState((state) => ({
  //           ...state,
  //           isLoadingPassword: false,
  //         }));
  //         customToast({
  //           status: 'success',
  //           title: 'Success',
  //           description: 'Password updated successfully',
  //         });
  //       })
  //       .catch((error: AuthError) => {
  //         useAuthStore.setState((state) => ({
  //           ...state,
  //           isLoadingPassword: false,
  //         }));
  //         customToast({
  //           status: 'error',
  //           title: 'Error',
  //           description: error?.message,
  //         });
  //       });
  //   }
  // },
  signOutUser: () => {
    signOut(firebaseAuth).then(() => {
      useAuthStore.setState((state) => ({
        ...state,
        isLoading: false,
        user: null,
        isAuthenticated: false,
      }));
    });
    Router.push('/');
  },
};
