import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

import { cartActions } from '@store/actions/cart-actions';
import { CartState, CartStore } from '@store/types';

const initialState: CartState = {
  cart: [],
  isLoading: false,
};

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      () => ({
        ...initialState,
        ...cartActions,
      }),
      { name: 'cart-store' }
    )
  )
);
