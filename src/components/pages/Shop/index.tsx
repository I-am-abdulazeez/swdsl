import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";

import DrinkSearch from "@components/DrinkSearch";
import Footer from "@components/Footer";
import Helmet from "@components/Helmet";
import Navbar from "@components/Navbar";
import ProductList from "@components/Products/ProductList";

import { useProduct } from "src/hooks/useProduct";

const Index: React.FC = () => {
  const { products, storeQuery, addProduct, cart, removeProduct } =
    useProduct();

  return (
    <Box>
      <Helmet title="Shop Wine | Shayowithdsl" />
      <Navbar />
      <Box as={"main"} my={{ base: 12, md: 24 }}>
        <Container maxW="container.lg">
          <Box width={{ base: "auto", md: "700px" }} mx="auto">
            <DrinkSearch />
          </Box>
          <Text my={10} fontSize="sm" color="gray.600">
            {products.length} products found.
          </Text>
          <Box>
            {storeQuery.isLoading && (
              <HStack spacing={2}>
                <Spinner
                  thickness="2px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  size="sm"
                  color="primary.500"
                />
                <Text>Fetching Products</Text>
              </HStack>
            )}
            {storeQuery.isLoadingError && <Text>Error Fetching product</Text>}
            <SimpleGrid
              columns={{ base: 2, md: 4 }}
              spacing={{ base: 3, md: 4 }}
            >
              {products?.map((docsSnapshot) => {
                const doc = docsSnapshot.data();
                const product = { ...doc, id: docsSnapshot.id };
                const inCart = Boolean(cart.find((el) => el.id === product.id));
                return (
                  <ProductList
                    key={docsSnapshot?.id}
                    docsSnapshot={docsSnapshot}
                    product={product}
                    onAddToCart={(product) => addProduct(product)}
                    onRemoveFromCart={(product) => removeProduct(product)}
                    inCart={inCart}
                  />
                );
              })}
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Index;
