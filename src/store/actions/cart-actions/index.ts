import { useCartStore } from '@store/hooks/useCartStore';

import { CartActions } from '@store/types';
import { customToast } from '@utils/index';

export const cartActions: CartActions = {
  addProduct: (cartItem) => {
    const cart = useCartStore.getState().cart;
    let cartArray = [...cart];
    useCartStore.setState((state) => ({
      ...state,
      isLoading: true,
    }));
    const exist = cartArray?.find((x) => x.id === cartItem.id);
    if (exist) {
      cartArray = cart?.map((x) =>
        x?.id === cartItem.id ? { ...exist, qty: exist?.qty + 1 } : x
      );
      useCartStore.setState((state) => ({
        ...state,
        cart: [...cartArray],
        isLoading: false,
      }));
      customToast({
        status: 'success',
        title: `Product updated with a new quantity`,
      });
    } else {
      cartArray = [...cart, { ...cartItem, qty: 1 }];
      useCartStore.setState((state) => ({
        ...state,
        isLoading: false,
        cart: [...cartArray],
      }));
      customToast({
        status: 'success',
        title: `Product added successfully`,
      });
    }
  },
  removeProduct: (cartItem) => {
    const cart = useCartStore.getState().cart;
    let cartArray = [...cart];
    useCartStore.setState((state) => ({
      ...state,
      isLoading: true,
    }));
    const exist = cartArray.find((x) => x.id === cartItem.id);
    if (exist?.qty === 1) {
      cartArray = cart.filter((x) => x.id === cartItem.id);
      useCartStore.setState((state) => ({
        ...state,
        isLoading: false,
        cart: [...cartArray],
      }));
      customToast({
        status: 'success',
        title: `Product removed from cart`,
      });
    } else {
      if (exist) {
        cartArray = cart?.map((x) =>
          x.id === cartItem.id ? { ...exist, qty: exist?.qty - 1 } : x
        );
      }
      useCartStore.setState((state) => ({
        ...state,
        isLoading: false,
        cart: [...cartArray],
      }));
      customToast({
        status: 'success',
        title: `- 1 quantity of product removed`,
      });
    }
  },
  removeAllProduct: (cartItems) => {
    const cart = useCartStore.getState().cart;
    let cartArray = cart;
    useCartStore.setState((state) => ({
      ...state,
      isLoading: true,
    }));
    cartArray = cart.filter((x) => x.id !== cartItems.id);
    useCartStore.setState((state) => ({
      ...state,
      cart: cartArray,
      isLoading: false,
    }));
    customToast({
      status: 'success',
      title: `Product removed from cart`,
    });
  },
};
