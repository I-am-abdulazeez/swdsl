import { Timestamp } from 'firebase/firestore';

export type Product = {
  drinkName: string;
  description: string;
  category: string;
  price: Number | string;
  url: string;
  createdAt: Timestamp | null;
};
