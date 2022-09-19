import { useEffect } from 'react';
import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';

import DrinkSearch from '@components/DrinkSearch';
import Footer from '@components/Footer';
import Helmet from '@components/Helmet';
import Navbar from '@components/Navbar';
import ProductList from '@components/Products/ProductList';
import BackToTop from '@components/BackToTop';

import { useProductStore } from '@store/hooks/useProductStore';
import { useCartStore } from '@store/hooks/useCartStore';

const Shop: React.FC = () => {
  const products = useProductStore((state) => state.products);

  const isLoading = useProductStore((state) => state.isLoading);
  const isLoadingError = useProductStore((state) => state.isLoadingError);

  const getProducts = useProductStore((state) => state.getProducts);

  const cart = useCartStore((state) => state.cart);
  const addProduct = useCartStore((state) => state.addProduct);
  const removeProduct = useCartStore((state) => state.removeProduct);

  useEffect(() => {
    let subscribe = true;
    if (subscribe) {
      getProducts();
    }
    return () => {
      subscribe = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Helmet title="Shop Wine | Shayowithdsl" />
      <Navbar />
      <Box as={'main'} my={{ base: 12, md: 24 }}>
        <Container maxW="container.lg">
          <Box width={{ base: 'auto', md: '700px' }} mx="auto">
            <DrinkSearch />
          </Box>
          <Text my={10} fontWeight={'medium'} fontSize="md" color="gray.600">
            There are {products?.length} products available.
          </Text>
          <Box>
            {isLoading && (
              <HStack spacing={2} mb={3}>
                <Spinner
                  thickness="2px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  size="sm"
                  color="primary.300"
                />
                <Text>Fetching Products</Text>
              </HStack>
            )}
            {isLoadingError && (
              <Text fontSize={'14px'}>Cannot fetch products.</Text>
            )}
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 4 }}
              spacingX={{ base: 3, md: 4 }}
              spacingY={{ base: 3, md: 8 }}
            >
              {products?.map((product) => {
                const inCart = Boolean(
                  cart?.find((el) => el?.id === product?.productId)
                );
                return (
                  <ProductList
                    key={product?.productId}
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
      <BackToTop />
    </Box>
  );
};

export default Shop;
