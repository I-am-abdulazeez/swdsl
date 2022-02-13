import { UserInfo } from "firebase/auth";
import {
  DocumentData,
  FirestoreError,
  QueryDocumentSnapshot,
  QuerySnapshot,
  Timestamp,
} from "firebase/firestore";
import { UseQueryResult } from "react-query";

export interface ShayoBanner {
  src: string;
  alt: string;
  imageId: string;
}

export interface QuotesTalks {
  quoteAuthor: string;
  quouteContent: string | JSX.Element | JSX.Element[];
  quoteId: string;
}

export interface Founders {
  founderName: string;
  founderEmail: string;
  founderPhoneNumber: string;
  founderAddress: string;
  founderId: string;
}

export interface SVideos {
  videoUrl: string;
  videoId: string;
}

export interface IUserRegister {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  phonenumber: string;
  accept: boolean;
}

export interface AuthContextType {
  user: UserInfo | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  setUser: any;
  resetPassword: (oobCode: string, newPassword: string) => void;
  signUpUser: (email: string, password: string) => void;
  sendPasswordEmailReset: (email: string) => void;
  signInUser: (email: string, password: string) => void;
  signOutUser: () => void;
}

export interface ProductContextType {
  products: QueryDocumentSnapshot<DocumentData>[];
  storeQuery: UseQueryResult<QuerySnapshot<DocumentData>, FirestoreError>;
  cart: {}[];
}

export interface DrinkCategoryInterface {
  drinkName: string;
  drinkNameList: string[];
}

export interface ProductListProps {
  product: DocumentData;
  docsSnapshot: QueryDocumentSnapshot<DocumentData>;
}

export interface ProductDetailsParams {
  productId: string;
}
