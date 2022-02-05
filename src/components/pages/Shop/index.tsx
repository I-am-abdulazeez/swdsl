import {
  collection,
  DocumentSnapshot,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import NextLink from "next/link";
import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";

import DrinkSearch from "@components/DrinkSearch";
import Helmet from "@components/Helmet";
import Navbar from "@components/Navbar";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { firebaseFirestoreAdmin } from "src/lib/firebase";
import ProductList from "@components/ProductList";

const Index = (): JSX.Element => {
  const toast = useToast();
  const ref = query(
    collection(firebaseFirestoreAdmin, "products"),
    orderBy("createdAt", "desc"),
    limit(50)
  );
  const storeQuery = useFirestoreQuery(
    ["products"],
    ref,
    { subscribe: true },
    {
      onError(err) {
        console.log(err);
        toast({
          title: `Error fetching data ${err.message}`,
          status: "error",
          isClosable: true,
        });
      },
    }
  );
  const snapshot = storeQuery.data;

  console.log(snapshot);
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
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={3}>
              {snapshot?.docs?.map((docsSnapshot) => {
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
