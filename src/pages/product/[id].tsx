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
} from "@chakra-ui/react";
import { doc } from "@firebase/firestore";
import { useFirestoreDocument } from "@react-query-firebase/firestore";
import { useRouter } from "next/router";

import { RiArrowLeftLine } from "react-icons/ri";

import Navbar from "@components/Navbar";
import Helmet from "@components/Helmet";
import ProductBadge from "@components/Products/ProductBadge";
import ProductNav from "@components/Products/ProductNav";

import { firebaseFirestore } from "src/lib/firebase";

import { useProduct } from "src/hooks/useProduct";

import { numberWithCommas } from "@utils/index";

const Index: React.FC = (): JSX.Element => {
  const { query, back } = useRouter();
  const { addProduct, cart, cartIsLoading, removeProduct } = useProduct();
  const buttonSize = useBreakpointValue({ base: "xs", md: "sm" });
  const { id }: any = query;

  const ref = doc(firebaseFirestore, "products", id);
  const product = useFirestoreDocument(["products", id], ref, {
    subscribe: true,
    includeMetadataChanges: true,
  });
  const snapshot = product?.data?.data();

  let quantity!: number;

  const newProduct = {
    id: id,
    drinkName: snapshot?.drinkName,
    description: snapshot?.description,
    url: snapshot?.url,
    price: snapshot?.price,
    category: snapshot?.category,
  };

  console.log(newProduct);

  const inCart = Boolean(cart.find((el) => el.id === id));

  return (
    <Box>
      {product.isLoading && (
        <Flex justify={"center"} align="center" height={"100vh"}>
          <Spinner color={"primary.500"} />
        </Flex>
      )}
      {snapshot && (
        <>
          <Helmet
            title={`${snapshot?.drinkName} | ShayoWithDSL | #1 online Wine Shop`}
          />
          <Navbar />
          {cart &&
            cart?.map((cartItem) => {
              quantity = cartItem.qty;
              console.log(quantity);
            })}
          <Container maxW={"container.lg"} mt={7}>
            <Flex justify={"space-between"} align={"center"}>
              <IconButton
                aria-label="back-icon"
                size={"sm"}
                variant="ghost"
                onClick={back}
                colorScheme="secondary"
                icon={<RiArrowLeftLine size={"18px"} />}
              />
              {inCart ? (
                <Button
                  onClick={() => removeProduct(newProduct)}
                  colorScheme={"error"}
                  isLoading={cartIsLoading}
                  size={buttonSize}
                >
                  Remove {`${quantity === 1 ? "" : quantity}`} quantity from
                  cart
                </Button>
              ) : (
                <Button
                  onClick={() => addProduct(newProduct)}
                  colorScheme={"success"}
                  isLoading={cartIsLoading}
                  size={buttonSize}
                >
                  Add to cart
                </Button>
              )}
            </Flex>
            <Box mt={10}>
              <ProductNav product={product} />
              <Stack direction={{ base: "column", md: "row" }} spacing={10}>
                <Image
                  width="400px"
                  border="1px solid #EDF2F7"
                  borderRadius="md"
                  src={snapshot?.url}
                  alt={snapshot?.id}
                />
                <VStack align="stretch">
                  <Text textAlign={"left"}>
                    <ProductBadge product={snapshot} />
                  </Text>
                  <Heading>{snapshot?.drinkName}</Heading>
                  <Text>{snapshot?.description}</Text>
                  <Heading as="h2" size="lg" color={"primary.700"}>
                    $ {String(numberWithCommas(snapshot?.price))}
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

export default Index;
