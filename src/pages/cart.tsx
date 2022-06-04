import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { RiStore2Line } from "react-icons/ri";

import CartItem from "@components/CartItem";
import Helmet from "@components/Helmet";
import Navbar from "@components/Navbar";

import { numberWithCommas } from "@utils/index";

import { useProduct } from "@hooks/useProduct";

const Index: React.FC = () => {
  const { cart, removeProduct, addProduct, removeAllProductQty } = useProduct();

  const cartIsEmpty = cart?.length === 0;
  const cartLength = cart?.length;

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
            <VStack
              spacing={5}
              align={"center"}
              justify="center"
              height={"50vh"}
            >
              <RiStore2Line size={"4rem"} color="#e3e3e3" />
              <Text fontSize={"sm"}>
                No item found, add one from shop page.
              </Text>
              <NextLink href="/shop" passHref>
                <Button colorScheme={"primary"} size={"sm"}>
                  Shop
                </Button>
              </NextLink>
            </VStack>
          )}
          {cart &&
            cart?.map((cartItem, idx) => {
              return (
                <CartItem
                  key={idx}
                  cartItem={cartItem}
                  addProduct={addProduct}
                  removeProduct={removeProduct}
                  removeAllProduct={removeAllProductQty}
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
                  Proceed to checkout
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
