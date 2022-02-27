import { useToast } from "@chakra-ui/react";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import {
  collection,
  doc,
  DocumentData,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import { productContextInitialValues } from "src/data";
import { ProductContextType } from "src/interfaces";
import { firebaseFirestoreAdmin } from "src/lib/firebase";

export const ProductsContext = createContext<ProductContextType>(
  productContextInitialValues
);

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<
    QueryDocumentSnapshot<DocumentData>[]
  >([]);
  const chakraToast = useToast();
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    JSON.parse(localStorage.getItem("cart")!);
  });

  const ref = query(
    collection(firebaseFirestoreAdmin, "products"),
    orderBy("createdAt", "desc"),
    limit(50)
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
          isClosable: true,
        });
      },
      onSuccess(data) {
        const products = data?.docs;
        setProducts(products);
      },
    }
  );

  // Add Product to cart and save to current user {}
  const addProduct = (product: any) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      localStorage.setItem("cart", JSON.stringify(cart));
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
      setCart([...cart, { ...product, qty: 1 }]);
      localStorage.setItem("cart", JSON.stringify(cart));
      chakraToast({
        status: "success",
        title: "Product added successfully",
        isClosable: true,
        containerStyle: {
          fontSize: "12.5px",
        },
        variant: "subtle",
        position: "bottom-right",
      });
    }
  };

  const removeAllProduct = (product: any) => {
    setCart(cart.filter((x) => x.id !== product.id));
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

  const removeProduct = (product: any) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
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
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
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
    removeAllProduct,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
