import { User } from 'firebase/auth';
import { DocumentData } from 'firebase/firestore';

import { IUserRegister, UserDetails, UserData, Cart, Product } from 'src/types';

// Auth Store

export type AuthState = {
  user: User | null;
  isLoading: boolean | undefined;
  isAuthenticated: boolean;
  // isLoadingPassword: boolean | undefined;
};

export type AuthActions = {
  signUpUser: (user: IUserRegister, newUserDetails: UserData) => void;
  signInUser: (user: UserDetails) => void;
  forgotPassword: (email: string) => void;
  resetPassword: (oobCode: string, password: string) => void;
  updateDisplayName: (displayName: string) => void;
  // updatePassword: (newPassword: string) => void;
  signOutUser: () => void;
};

export type AuthStore = AuthState & AuthActions;

// Product Store

export type ProductState = {
  products: DocumentData[] | null | [];
  product: DocumentData | null;
  isLoading: boolean | undefined;
  isLoadingError: boolean | undefined;
};

export type ProductActions = {
  getProducts: () => void;
  getProduct: (productId: string | string[] | undefined) => void;
};

export type ProductStore = ProductState & ProductActions;

// Cart Store

export type CartState = {
  cart: Cart[];
  isLoading: boolean;
};

export type CartActions = {
  addProduct: (cartItem: Cart) => void;
  removeProduct: (cartItem: Cart) => void;
  removeAllProduct: (cartItems: Cart) => void;
};

export type CartStore = CartState & CartActions;
