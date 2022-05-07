import { Flex, Button } from "@chakra-ui/react";
import NextLink from "next/link";

import { useProduct } from "@hooks/useProduct";

import { NavCatListProps } from "@interfaces/index";

const NavCategoryList: React.FC<NavCatListProps> = (props) => {
  const { category } = props;
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
              <Button size={"sm"} variant={"ghost"} fontWeight={"normal"}>
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
