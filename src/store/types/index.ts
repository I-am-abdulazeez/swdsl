import { User } from 'firebase/auth';

import { IUserRegister, UserDetails } from '@interfaces/index';

export type AuthState = {
  user: User | null;
  isLoading: boolean | undefined;
  isAuthenticated: boolean;
};

export type AuthActions = {
  signUpuser: (user: IUserRegister) => void;
  signInUser: (user: UserDetails) => void;
  forgotPassword: (email: string) => void;
  resetPassword: (oobCode: string, password: string) => void;
  signOutUser: () => void;
};
