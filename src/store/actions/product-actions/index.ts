import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';

import { firebaseFirestore } from '@config/firebase';
import { useProductStore } from '@store/hooks/useProductStore';
import { ProductActions } from '@store/types';
import { customToast } from '@utils/index';
import { Product } from 'src/types';

export const productActions: ProductActions = {
  getProducts: () => {
    useProductStore.setState((state) => ({ ...state, isLoading: true }));
    const productsQuery = query(
      collection(firebaseFirestore, 'products'),
      orderBy('createdAt', 'desc')
    );
    onSnapshot(
      productsQuery,
      (snapshot) => {
        useProductStore.setState((state) => ({
          ...state,
          isLoading: false,
          products: snapshot?.docs.map((doc) => {
            return { ...doc.data(), productId: doc.id } as Product;
          }),
        }));
        console.log(snapshot);
      },
      (error) => {
        useProductStore.setState((state) => ({
          ...state,
          isLoading: false,
          isLoadingError: true,
        }));
        customToast({
          status: 'error',
          title: 'Error',
          description: error.message,
        });
      }
    );
  },
  getProduct: (productId) => {
    useProductStore.setState((state) => ({ ...state, isLoading: true }));
    const productRef = doc(firebaseFirestore, 'products', productId);
    onSnapshot(
      productRef,
      (snapshot) => {
        useProductStore.setState((state) => ({
          ...state,
          isLoading: false,
          product: { ...snapshot?.data(), productId: snapshot?.id } as Product,
        }));
      },
      (error) => {
        useProductStore.setState((state) => ({
          ...state,
          isLoading: false,
          isLoadingError: true,
        }));
        customToast({
          status: 'error',
          title: 'Error',
          description: error.message,
        });
      }
    );
  },
};
