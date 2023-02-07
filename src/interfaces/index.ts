import { RefObject } from 'react';
import { DocumentData } from 'firebase/firestore';
import { Cart, Product } from 'src/types';

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

export interface AuthHeadingProps {
  authHeading: string;
  authText: string;
  authHref: string;
  authRoute: string;
}

export interface ProductListProps {
  product: DocumentData | Product;
  inCart: boolean;
  onAddToCart: (cartItem: Cart) => void;
  onRemoveFromCart: (cartItem: Cart) => void;
}

export interface ProductProps {
  product: DocumentData | null;
}

export interface NavCategoryListProps {
  category: string;
}

export interface NavAccordionButtonProps extends NavCategoryListProps {}

export interface LogoLinkProps {
  width: string;
  height: string;
}

export interface HelmetProps {
  title?: string;
}

export interface IconButtonBadgeProps {
  badgeContent: number;
}

export interface CartItemProps {
  cartItem: Cart;
  addProduct: (product: Cart) => void;
  removeProduct: (cartItem: Cart) => void;
  removeAllProduct: (cartItem: Cart) => void;
}

export interface CartItemAlertProps {
  cartItem: Cart;
  isOpen: boolean;
  cancelRef: RefObject<HTMLButtonElement>;
  onClose: () => void;
  removeAllProduct: (id: any) => void;
}
