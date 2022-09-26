import { ReactNode, useState } from 'react';

import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
  HStack,
} from '@chakra-ui/react';
import { RiSearch2Line } from 'react-icons/ri';

import NextLink from 'next/link';

import ProductBadge from '@components/Products/ProductBadge';

import { useProductStore } from '@store/hooks/useProductStore';
import { inputFocus } from '@utils/index';

const DrinkSearch: React.FC = () => {
  const products = useProductStore((state) => state.products);
  const [searchTerm, setSearchTerm] = useState('');

  const displaySearchedProducts = (): ReactNode => {
    return products
      ?.filter((drink) => {
        if (searchTerm === '') {
          return drink;
        } else if (
          drink?.drinkName?.toLowerCase()?.includes(searchTerm?.toLowerCase())
        ) {
          return drink;
        }
      })
      .map((drinkSnap) => {
        return (
          <NextLink
            key={drinkSnap?.productId}
            href={`/product/${drinkSnap?.productId}`}
            passHref
          >
            <HStack
              cursor={'pointer'}
              justify={'space-between'}
              padding={'10px'}
              borderRadius={'8px'}
              fontSize={'15px'}
              _hover={{
                bgColor: '#F7FAFC',
              }}
            >
              <Text fontWeight={'normal'}>{drinkSnap?.drinkName}</Text>
              <ProductBadge product={drinkSnap} />
            </HStack>
          </NextLink>
        );
      });
  };

  return (
    <Box>
      <InputGroup size="lg">
        <InputLeftElement pointerEvents="none">
          <RiSearch2Line color="#b33b32" size="18px" />
        </InputLeftElement>
        <Input
          onChange={(e) => setSearchTerm(e.target?.value)}
          type="text"
          placeholder="Search for a drink"
          fontSize="13px"
          _focus={inputFocus}
        />
      </InputGroup>
      {searchTerm && (
        <Box
          bgColor={'white'}
          maxHeight={'180px'}
          overflowY={'auto'}
          borderBottomRadius={'8px'}
          border={searchTerm ? '1px solid #EDF2F7' : 'none'}
        >
          {displaySearchedProducts()}
        </Box>
      )}
    </Box>
  );
};

export default DrinkSearch;
