import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { useFirestoreQuery } from '@react-query-firebase/firestore';
import {
  collection,
  DocumentData,
  orderBy,
  query,
  QueryDocumentSnapshot,
} from 'firebase/firestore';

import { firebaseFirestore } from '@config/firebase';
import { productContextInitialValues } from '@data/index';
import { ProductContextType } from '@interfaces/index';

export const ProductsContext = createContext<ProductContextType>(
  productContextInitialValues
);

export const ProductProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<
    QueryDocumentSnapshot<DocumentData>[]
  >([]);
  const chakraToast = useToast();
  const [cart, setCart] = useState<any[]>([]);

  const ref = query(
    collection(firebaseFirestore, 'products'),
    orderBy('createdAt', 'desc')
  );

  const storeQuery = useFirestoreQuery(
    ['products'],
    ref,
    { subscribe: true, includeMetadataChanges: true },
    {
      onSuccess: (data) => {
        const products = data?.docs;
        setProducts(products);
      },
    }
  );

  const doStorageThing = () => {
    const cartArrayFromStorage = JSON.parse(
      String(localStorage.getItem('cart'))
    );
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', JSON.stringify([]));
      setCart([]);
    } else {
      setCart(cartArrayFromStorage);
    }
  };

  useEffect(() => {
    doStorageThing();
  }, []);

  // Add Product to Cart
  const addProduct = (product: any) => {
    let cartArray = [...cart];
    const itemExist = cartArray.find((x) => x.id === product.id);
    if (itemExist) {
      cartArray = cartArray.map((x) =>
        x.id === product.id ? { ...itemExist, qty: itemExist.qty + 1 } : x
      );
      setCart([...cartArray]);
      localStorage.setItem('cart', JSON.stringify(cartArray));
      chakraToast({
        status: 'success',
        title: `Product updated with a new quantity`,
        isClosable: true,
        containerStyle: {
          fontSize: '12.5px',
        },
        variant: 'subtle',
        position: 'bottom-right',
      });
    } else {
      cartArray = [...cart, { ...product, qty: 1 }];
      setCart([...cartArray]);
      localStorage.setItem('cart', JSON.stringify(cartArray));
      chakraToast({
        status: 'success',
        title: `Product added successfully`,
        isClosable: true,
        containerStyle: {
          fontSize: '12.5px',
        },
        variant: 'subtle',
        position: 'bottom-right',
      });
    }
  };

  // Remove all product Qty from Cart
  const removeAllProductQty = (product: any) => {
    let cartArray = [...cart];
    cartArray = cart.filter((x) => x.id !== product.id);
    setCart(cartArray);
    localStorage.setItem('cart', JSON.stringify(cartArray));
    chakraToast({
      status: 'success',
      title: `Product removed from cart`,
      isClosable: true,
      containerStyle: {
        fontSize: '12.5px',
      },
      variant: 'subtle',
      position: 'bottom-right',
    });
  };

  // Remove Product from cart by quantity -- only
  const removeProduct = (product: any) => {
    let cartArray = [...cart];
    const exist = cartArray.find((x) => x.id === product.id);
    if (exist?.qty === 1) {
      cartArray = cart.filter((x) => x.id !== product.id);
      setCart([...cartArray]);
      localStorage.setItem('cart', JSON.stringify(cartArray));
      chakraToast({
        status: 'success',
        title: `Product removed from cart`,
        isClosable: true,
        containerStyle: {
          fontSize: '12.5px',
        },
        variant: 'subtle',
        position: 'bottom-right',
      });
    } else {
      cartArray = cart.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCart([...cartArray]);
      localStorage.setItem('cart', JSON.stringify(cartArray));
      chakraToast({
        status: 'success',
        title: `- 1 quantity of product removed`,
        isClosable: true,
        containerStyle: {
          fontSize: '12.5px',
        },
        variant: 'subtle',
        position: 'bottom-right',
      });
    }
  };

  const value = {
    products,
    storeQuery,
    cart,
    addProduct,
    removeProduct,
    removeAllProductQty,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
