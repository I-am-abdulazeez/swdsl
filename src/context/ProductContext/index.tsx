import { useToast } from "@chakra-ui/react";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import {
  collection,
  DocumentData,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import React, { createContext, useContext, useState } from "react";
import { productContextInitialValues } from "src/data";
import { ProductContextType } from "src/interfaces";
import { firebaseFirestoreAdmin } from "src/lib/firebase";

const ProductsContext = createContext<ProductContextType>(
  productContextInitialValues
);

export const useProduct = () => {
  return useContext(ProductsContext);
};

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<
    QueryDocumentSnapshot<DocumentData>[]
  >([]);
  const toast = useToast();
  const [cart, setCart] = useState<{}[]>([]);
  const ref = query(
    collection(firebaseFirestoreAdmin, "products"),
    orderBy("createdAt", "desc"),
    limit(50)
  );
  const storeQuery = useFirestoreQuery(
    ["products"],
    ref,
    { subscribe: true },
    {
      onError(err) {
        console.log(err);
        toast({
          title: `Error fetching data ${err.message}`,
          status: "error",
          isClosable: true,
        });
      },
      onSuccess(data) {
        const products = data?.docs;
        setProducts(products);
      },
    }
  );
  const snapshot = storeQuery.data;

  console.log(snapshot);

  const value = {
    products,
    storeQuery,
    cart,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
