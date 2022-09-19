import { Timestamp } from 'firebase/firestore';

export type UserDetails = {
  email: string;
  password: string;
};

export type IUserRegister = {
  firstname: string;
  lastname: string;
  phonenumber: string;
  accept: boolean;
} & UserDetails;

export type UserPasswordUpdate = {
  newPassword: string;
  confirmNewPassword: string;
};

export type Cart = {
  id: string | string[] | undefined;
  url: string;
  drinkName: string;
  price: number;
  qty: number;
  category: string;
  description?: string;
};

export type Product = {
  productId: string;
  drinkName: string;
  description: string;
  category: string;
  price: number;
  url: string;
  createdAt: Timestamp | null;
};

export type UserData = {
  email: string;
  firstname: string;
  lastname: string;
  phonenumber: string;
  accept: boolean;
  createdAt: Timestamp | string;
  cart?: Cart[];
  orders?: any[];
};
