import { useToast } from "@chakra-ui/react";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import {
  arrayUnion,
  collection,
  doc,
  DocumentData,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  setDoc,
  where,
} from "firebase/firestore";
import { createContext, useEffect, useState } from "react";

import { firebaseFirestore } from "src/lib/firebase";
import { productContextInitialValues } from "src/data";
import { ProductContextType, ReactChildrenProp } from "src/interfaces";
import { useAuth } from "src/hooks/useAuth";

export const ProductsContext = createContext<ProductContextType>(
  productContextInitialValues
);

export const ProductProvider = ({ children }: ReactChildrenProp) => {
  const [products, setProducts] = useState<
    QueryDocumentSnapshot<DocumentData>[]
  >([]);
  const chakraToast = useToast();
  const [cart, setCart] = useState<any[]>([]);
  const { user } = useAuth();

  const userId = String(user?.uid);

  const ref = query(
    collection(firebaseFirestore, "products"),
    orderBy("createdAt", "desc"),
    limit(100)
  );

  const storeQuery = useFirestoreQuery(
    ["products"],
    ref,
    { subscribe: true, includeMetadataChanges: true },
    {
      onError(err) {
        console.log(err);
        chakraToast({
          title: `Error fetching data ${err.message}`,
          status: "error",
          variant: "subtle",
          containerStyle: {
            fontSize: "12.5px",
          },
          isClosable: true,
        });
      },
      onSuccess(data) {
        const products = data?.docs;
        setProducts(products);
      },
    }
  );

  useEffect(() => {
    console.log(cart);
    const cartArrayFromStorage = JSON.parse(
      String(localStorage.getItem("cart"))
    );
    setCart(cartArrayFromStorage);
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
      localStorage.setItem("cart", JSON.stringify(cartArray));
      chakraToast({
        status: "success",
        title: `Product updated with a new quantity`,
        isClosable: true,
        containerStyle: {
          fontSize: "12.5px",
        },
        variant: "subtle",
        position: "bottom-right",
      });
    } else {
      cartArray = [...cart, { ...product, qty: 1 }];
      setCart([...cartArray]);
      localStorage.setItem("cart", JSON.stringify(cartArray));
      chakraToast({
        status: "success",
        title: `Product added successfully`,
        isClosable: true,
        containerStyle: {
          fontSize: "12.5px",
        },
        variant: "subtle",
        position: "bottom-right",
      });
    }
  };

  // Remove all product Qty from Cart
  const removeAllProductQty = (product: any) => {
    let cartArray = [...cart];
    cartArray = cart.filter((x) => x.id !== product.id);
    setCart(cartArray);
    localStorage.setItem("cart", JSON.stringify(cartArray));
    chakraToast({
      status: "success",
      title: `Product removed from cart`,
      isClosable: true,
      containerStyle: {
        fontSize: "12.5px",
      },
      variant: "subtle",
      position: "bottom-right",
    });
  };

  // Remove Product from cart by quantity -- only
  const removeProduct = (product: any) => {
    let cartArray = [...cart];
    const exist = cartArray.find((x) => x.id === product.id);
    if (exist?.qty === 1) {
      cartArray = cart.filter((x) => x.id !== product.id);
      setCart([...cartArray]);
      localStorage.setItem("cart", JSON.stringify(cartArray));
    } else {
      cartArray = cart.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCart([...cartArray]);
      localStorage.setItem("cart", JSON.stringify(cartArray));
      chakraToast({
        status: "success",
        title: `- 1 quantity of product removed`,
        isClosable: true,
        containerStyle: {
          fontSize: "12.5px",
        },
        variant: "subtle",
        position: "bottom-right",
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
