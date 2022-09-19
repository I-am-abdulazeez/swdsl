import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { RiAddFill, RiSubtractLine } from 'react-icons/ri';

import ProductBadge from '@components/Products/ProductBadge';

import { ProductListProps } from '@interfaces/index';
import { numberWithCommas } from '@utils/index';
import { Cart } from 'src/types';

const ProductList: React.FC<ProductListProps> = ({
  product,
  inCart,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const cartItem: Cart = {
    id: product?.productId,
    category: product?.category,
    drinkName: product?.drinkName,
    price: product?.price,
    url: product?.url,
    qty: 0,
  };
  return (
    <VStack
      rounded={'lg'}
      border="1px solid #EDF2F7"
      shadow={'sm'}
      spacing={1}
      transition={'all 0.3s ease-in-out'}
    >
      <Image
        p={6}
        height={'200px'}
        src={product?.url}
        alt={`${product?.drinkName}`}
      />
      <Stack spacing={1} p={4} width={'full'}>
        <Box>
          <ProductBadge product={product} />
        </Box>
        <Box mt={0} mb={4}>
          <Heading mt={1} size={'sm'}>
            {product?.drinkName}
          </Heading>
          <Text fontWeight={'medium'} fontSize={'sm'}>
            {product?.description}
          </Text>
          <Heading
            fontWeight={'semibold'}
            color={'primary.400'}
            mt={2}
            fontSize="xl"
          >
            ${numberWithCommas(product?.price)}
          </Heading>
        </Box>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={3}>
          {inCart ? (
            <HStack
              mt={3}
              justifyContent={{ base: 'center', md: 'right' }}
              width={'full'}
            >
              <NextLink href={`/product/${product.productId}`} passHref>
                <Button width={'full'} size={'sm'}>
                  View Product
                </Button>
              </NextLink>
              <IconButton
                size="xs"
                onClick={() => onRemoveFromCart(cartItem)}
                aria-label="remove product"
                icon={<RiSubtractLine size="18px" />}
              />
              <IconButton
                size="xs"
                onClick={() => onAddToCart(cartItem)}
                aria-label="add product"
                icon={<RiAddFill size="18px" />}
              />
            </HStack>
          ) : (
            <HStack mt={3} width={'full'}>
              <Button
                width={'full'}
                onClick={() => onAddToCart(cartItem)}
                colorScheme="success"
                size={'sm'}
              >
                Add to cart
              </Button>
            </HStack>
          )}
        </Stack>
      </Stack>
    </VStack>
  );
};

export default ProductList;
