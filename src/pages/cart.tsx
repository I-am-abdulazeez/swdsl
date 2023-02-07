import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

import NextLink from 'next/link';
import { RiStore2Line } from 'react-icons/ri';

import CartItem from '@components/CartItem';
import Helmet from '@components/Helmet';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

import { numberWithCommas } from '@utils/index';

import { useCartStore } from '@store/hooks/useCartStore';

const Cart: React.FC = () => {
  const cart = useCartStore((state) => state.cart);
  const addProduct = useCartStore((state) => state.addProduct);
  const removeProduct = useCartStore((state) => state.removeProduct);
  const removeAllProduct = useCartStore((state) => state.removeAllProduct);

  const cartIsEmpty = cart?.length === 0;
  const cartLength = cart?.length;
  const shippingFee = 15;

  const itemsPrice = cart
    .map((cartItem) => cartItem?.price * cartItem?.qty || 1)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  const totalPrice = itemsPrice * shippingFee;

  return (
    <Box width={'100%'} backgroundColor={'#edf2f73b'}>
      <Helmet title="My Cart | ShayoWithDSL" />
      <Navbar />

      <Container pt={8} pb={1} maxW={'container.lg'}>
        <Heading size="lg" fontWeight="semibold">
          Shopping Cart ({cartLength}).
        </Heading>
        <Divider mt={4} />
        <Box my={6}>
          {cartIsEmpty && (
            <VStack
              spacing={5}
              align={'center'}
              justify="center"
              height={'50vh'}
            >
              <RiStore2Line size={'4rem'} color="#e3e3e3" />
              <Text fontSize={'sm'}>
                No item found, add one from shop page.
              </Text>
              <NextLink href="/shop" passHref>
                <Button colorScheme={'primary'} size={'sm'}>
                  Shop
                </Button>
              </NextLink>
            </VStack>
          )}
          {!cartIsEmpty && (
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={6}
              width={'100%'}
            >
              <Box>
                {cart &&
                  cart?.map((cartItem, idx) => {
                    return (
                      <CartItem
                        key={idx}
                        cartItem={cartItem}
                        addProduct={addProduct}
                        removeProduct={removeProduct}
                        removeAllProduct={removeAllProduct}
                      />
                    );
                  })}
              </Box>
              <Box
                alignSelf={'start'}
                width={{ base: '100%', md: '400px' }}
                p={5}
                rounded="lg"
                backgroundColor={'white'}
              >
                <Heading size={'md'}>Summary</Heading>
                <HStack justifyContent={'space-between'} my={4}>
                  <Text fontWeight={'semibold'}>Total item cost</Text>
                  <Text fontWeight={'semibold'}>
                    ${numberWithCommas(itemsPrice.toFixed(2))}
                  </Text>
                </HStack>
                <HStack justifyContent={'space-between'}>
                  <Text fontSize={'medium'} fontWeight={'semibold'}>
                    Shipping fee:
                  </Text>
                  <Text fontWeight={'semibold'}>${shippingFee.toFixed(2)}</Text>
                </HStack>
                <Divider my={3} />
                <HStack mt={2} justifyContent={'space-between'}>
                  <Heading size="md">Total:</Heading>
                  <Heading size="md">
                    ${numberWithCommas(totalPrice.toFixed(2))}
                  </Heading>
                </HStack>

                <Box mt={7} textAlign={'center'}>
                  <Button
                    size="md"
                    width={'full'}
                    rounded={'full'}
                    colorScheme={'primary'}
                    cursor={'pointer'}
                  >
                    Place order
                  </Button>
                </Box>
              </Box>
            </Stack>
          )}
          {!cartIsEmpty && (
            <Box>
              <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={5}
                justifyContent={'center'}
                mt={20}
                mb={6}
              >
                <NextLink href="/shop">
                  <Button
                    as="a"
                    size="md"
                    colorScheme={'primary'}
                    cursor={'pointer'}
                    variant={'outline'}
                  >
                    Continue shopping
                  </Button>
                </NextLink>
              </Stack>
            </Box>
          )}
        </Box>
      </Container>

      <Box mt={2}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Cart;
