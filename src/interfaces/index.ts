import { UserInfo } from "firebase/auth";
import {
  DocumentData,
  DocumentSnapshot,
  FirestoreError,
  QueryDocumentSnapshot,
  QuerySnapshot,
  Timestamp,
} from "firebase/firestore";
import { Dispatch, MutableRefObject, RefObject, SetStateAction } from "react";
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

export interface UserDetails {
  email: string;
  password: string;
}

export interface IUserRegister extends UserDetails {
  firstname: string;
  lastname: string;
  phonenumber: string;
  accept: boolean;
}

export interface AuthHeadingProps {
  authHeading: string;
  authText: string;
  authHref: string;
  authRoute: string;
}

export interface UserActionType {
  isLoading: boolean;
  setUser: Dispatch<SetStateAction<UserInfo | null>>;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface AuthContextType extends UserActionType {
  user: UserInfo | null;
  isLoggedIn: boolean;
  resetPassword: (oobCode: string, newPassword: string) => void;
  sendPasswordEmailReset: (email: string) => void;
  signInUser: (email: string, password: string) => void;
  signOutUser: () => void;
}

export interface ProductContextType {
  products: QueryDocumentSnapshot<DocumentData>[];
  storeQuery: UseQueryResult<QuerySnapshot<DocumentData>, FirestoreError>;
  cart: any[];
  addProduct: (product: {}) => void;
  removeProduct: (product: {}) => void;
  removeAllProductQty: (product: {}) => void;
}

export interface DrinkCategoryInterface {
  drinkName: string;
  drinkNameList: string[];
}

export interface ProductDetailsParams {
  productId: string;
}

export interface CartItem {
  id: string | string[] | undefined;
  url: string;
  drinkName: string;
  price: string;
  qty: number;
}

export interface UserData {
  email: string;
  firstname: string;
  lastname: string;
  phonenumber: string;
  accept: boolean;
  createdAt: Timestamp | string;
  cart?: CartItem[];
}

export interface ProductListProps {
  product: DocumentData;
  docsSnapshot: QueryDocumentSnapshot<DocumentData>;
  inCart: boolean;
  onAddToCart: (product: {}) => void;
  onRemoveFromCart: (product: {}) => void;
}

export interface ProductNavProps {
  product: UseQueryResult<DocumentSnapshot<DocumentData>, FirestoreError>;
}

export interface UserAuthType {
  userAuth: AuthContextType;
}

export interface LogoLinkProps {
  width: string;
  height: string;
}

export interface ReactChildrenProp {
  children: React.ReactNode;
}

export interface HelmetProps {
  title?: string;
}

export interface IconButtonBadgeProps {
  badgeContent: number;
}

export interface CartItemProps {
  cartItem: any;
  addProduct: (product: any) => void;
  removeProduct: (id: any) => void;
  removeAllProduct: (id: any) => void;
}

export interface CartItemAlertProps {
  cartItem: any;
  isOpen: boolean;
  cancelRef: MutableRefObject<undefined>;
  onClose: () => void;
  removeAllProduct: (id: any) => void;
}

export interface NavCatListProps {
  category: string;
}
