import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

import { productActions } from '@store/actions/product-actions';
import { ProductState, ProductStore } from '@store/types';

const initialState: ProductState = {
  products: null,
  product: null,
  isLoading: false,
  isLoadingError: false,
};

export const useProductStore = create<ProductStore>()(
  devtools(
    persist(
      () => ({
        ...initialState,
        ...productActions,
      }),
      { name: 'product-store' }
    )
  )
);
