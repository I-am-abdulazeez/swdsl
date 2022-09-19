import NextLink from 'next/link';

import { Flex, Button } from '@chakra-ui/react';

import { useProductStore } from '@store/hooks/useProductStore';
import { NavCategoryListProps } from '@interfaces/index';

const NavCategoryList: React.FC<NavCategoryListProps> = ({ category }) => {
  const products = useProductStore((state) => state.products);

  const drinksByCategory = (category: string) => {
    return products?.filter((product) => product?.category === category);
  };

  return (
    <>
      {drinksByCategory(category)?.map((product) => {
        return (
          <Flex key={product?.productId}>
            <NextLink href={`product/${product?.productId}`}>
              <Button size={'sm'} variant={'ghost'} fontWeight={'normal'}>
                {product?.drinkName}
              </Button>
            </NextLink>
          </Flex>
        );
      })}
    </>
  );
};

export default NavCategoryList;
