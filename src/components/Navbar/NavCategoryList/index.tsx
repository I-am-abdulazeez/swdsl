import { Flex, Button } from "@chakra-ui/react";
import { useProduct } from "src/hooks/useProduct";

import NextLink from "next/link";

import { NavCatListProps } from "src/interfaces";

const NavCategoryList: React.FC<NavCatListProps> = ({ category }) => {
  const { products } = useProduct();

  const drinksByCategory = (category: string) => {
    return products?.filter((product) => product?.data().category === category);
  };

  return (
    <>
      {drinksByCategory(category).map((docsSnapshot) => {
        const docs = docsSnapshot?.data();
        const productFromCategory = {
          data: { ...docs },
          id: docsSnapshot?.id,
        };
        return (
          <Flex key={productFromCategory?.id}>
            <NextLink href={`product/${productFromCategory?.id}`}>
              <Button size={"sm"} variant={"ghost"} fontWeight={"light"}>
                {productFromCategory?.data?.drinkName}
              </Button>
            </NextLink>
          </Flex>
        );
      })}
    </>
  );
};

export default NavCategoryList;