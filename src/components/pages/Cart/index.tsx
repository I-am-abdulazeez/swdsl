import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";

import NextLink from "next/link";

import CartItem from "@components/CartItem";
import Helmet from "@components/Helmet";
import Navbar from "@components/Navbar";

import { numberWithCommas } from "@utils/index";

import { useProduct } from "src/hooks/useProduct";

const Index: React.FC = (): JSX.Element => {
  const { cart, removeProduct, addProduct, removeAllProduct } = useProduct();

  const cartIsEmpty = cart.length === 0;
  const cartLength = cart.length;

  const itemsPrice = cart
    .map((product) => product?.price * product?.qty || 1)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  return (
    <Box>
      <Helmet title="My Cart | ShayoWithDSL" />
      <Navbar />

      <Container mt={10} maxW={"container.lg"}>
        <Flex justify={"space-between"}>
          <Text fontSize={"sm"} fontWeight="semibold">
            My Cart
          </Text>
          <Text fontSize={"sm"}>{cartLength} item(s)</Text>
        </Flex>
        <Divider mt={4} />
        <Box my={8}>
          {cartIsEmpty && (
            <Text fontSize={"sm"}>No item found, add one from shop page</Text>
          )}
          {cart.map((cartItem, idx) => {
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
          {!cartIsEmpty && (
            <Box my={8}>
              <Heading size="lg" textAlign={"right"}>
                Total: {numberWithCommas(itemsPrice.toFixed(2))}
              </Heading>
              <Text textAlign={"right"} fontSize={"xs"}>
                Delivery fee not included yet
              </Text>

              <HStack spacing={"6"} justifyContent={"center"} mt={20} mb={6}>
                <NextLink href="/shop">
                  <Button
                    as="a"
                    size="md"
                    colorScheme={"primary"}
                    cursor={"pointer"}
                    variant={"outline"}
                  >
                    Continue shopping
                  </Button>
                </NextLink>
                <Button size="md" colorScheme={"primary"} cursor={"pointer"}>
                  Pay with paystack
                </Button>
              </HStack>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
