import { User } from 'firebase/auth';

import { IUserRegister, UserData, UserDetails } from '@interfaces/index';

export type AuthState = {
  user: User | null;
  isLoading: boolean | undefined;
  isAuthenticated: boolean;
};

export type AuthActions = {
  signUpUser: (user: IUserRegister, newUserDetails: UserData) => void;
  signInUser: (user: UserDetails) => void;
  forgotPassword: (email: string) => void;
  resetPassword: (oobCode: string, password: string) => void;
  signOutUser: () => void;
};

export type AuthStore = AuthState & AuthActions;
