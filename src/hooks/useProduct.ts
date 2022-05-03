import { useContext } from "react";

import { ProductsContext } from "@context/ProductContext";

export const useProduct = () => {
  return useContext(ProductsContext);
};
