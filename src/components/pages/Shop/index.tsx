import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";

import DrinkSearch from "@components/DrinkSearch";
import Helmet from "@components/Helmet";
import Navbar from "@components/Navbar";
import ProductList from "@components/Products/ProductList";

import { useProduct } from "src/context/ProductContext";

const Index: React.FC = (): JSX.Element => {
  const { products, storeQuery } = useProduct();
  return (
    <Box>
      <Helmet title="Shop Wine | Shayowithdsl" />
      <Navbar />
      <Box as={"main"} mt={20}>
        <Container maxW="container.lg">
          <DrinkSearch />
          <Box mt={10}>
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
                const product = docsSnapshot.data();
                return (
                  <ProductList
                    key={docsSnapshot.id}
                    docsSnapshot={docsSnapshot}
                    product={product}
                  />
                );
              })}
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
