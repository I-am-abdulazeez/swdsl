import { useContext } from "react";

import { ProductsContext } from "src/context/ProductContext";

export const useProduct = () => {
  return useContext(ProductsContext);
};
