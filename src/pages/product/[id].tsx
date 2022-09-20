import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Spinner,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { RiArrowLeftLine } from 'react-icons/ri';

import Navbar from '@components/Navbar';
import Helmet from '@components/Helmet';
import ProductBadge from '@components/Products/ProductBadge';
import ProductNav from '@components/Products/ProductNav';

import { useProductStore } from '@store/hooks/useProductStore';

import { numberWithCommas } from '@utils/index';
import { useEffect } from 'react';
import { useCartStore } from '@store/hooks/useCartStore';
import { Cart } from 'src/types';

const ProductDetails: React.FC = () => {
  const { query, back } = useRouter();

  const cart = useCartStore((state) => state.cart);
  const addProduct = useCartStore((state) => state.addProduct);
  const removeProduct = useCartStore((state) => state.removeProduct);

  const buttonSize = useBreakpointValue({ base: 'xs', md: 'sm' });
  const id = String(query.id);

  const product = useProductStore((state) => state.product);
  const getProduct = useProductStore((state) => state.getProduct);
  const isLoading = useProductStore((state) => state.isLoading);

  let quantity = 0;

  const newProduct: Cart = {
    id: product?.productId,
    drinkName: product?.drinkName,
    description: product?.description,
    url: product?.url,
    price: product?.price,
    category: product?.category,
    qty: 0,
  };

  const inCart = Boolean(cart.find((el) => el.id === id));

  useEffect(() => {
    let subscribe = true;
    if (subscribe) {
      getProduct(id);
    }
    return () => {
      subscribe = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      {isLoading && (
        <Flex justify={'center'} align="center" height={'100vh'}>
          <Spinner color={'primary.500'} />
        </Flex>
      )}
      {product && (
        <>
          <Helmet
            title={`${product?.drinkName} | ShayoWithDSL | #1 online Wine Shop`}
          />
          <Navbar />
          {cart &&
            cart?.map((cartItem) => {
              quantity = cartItem.qty;
            })}
          <Container maxW={'container.lg'} mt={7}>
            <Flex justify={'space-between'} align={'center'}>
              <IconButton
                aria-label="back-icon"
                size={'sm'}
                variant="ghost"
                onClick={back}
                colorScheme="secondary"
                icon={<RiArrowLeftLine size={'18px'} />}
              />
              {inCart ? (
                <Button
                  onClick={() => removeProduct(newProduct)}
                  colorScheme={'error'}
                  size={buttonSize}
                >
                  Remove {`${quantity === 1 ? '' : quantity}`} quantity from
                  cart
                </Button>
              ) : (
                <Button
                  onClick={() => addProduct(newProduct)}
                  colorScheme={'success'}
                  size={buttonSize}
                >
                  Add to cart
                </Button>
              )}
            </Flex>
            <Box mt={10}>
              <ProductNav product={product} />
              <Stack direction={{ base: 'column', md: 'row' }} spacing={10}>
                <Image
                  width="400px"
                  border="1px solid #EDF2F7"
                  borderRadius="md"
                  src={product?.url}
                  alt={product?.id}
                />
                <VStack align="stretch">
                  <Text textAlign={'left'}>
                    <ProductBadge product={product} />
                  </Text>
                  <Heading>{product?.drinkName}</Heading>
                  <Text>{product?.description}</Text>
                  <Heading as="h2" size="lg" color={'primary.700'}>
                    $ {String(numberWithCommas(product?.price))}
                  </Heading>
                </VStack>
              </Stack>
            </Box>
          </Container>
        </>
      )}
    </Box>
  );
};

export default ProductDetails;
