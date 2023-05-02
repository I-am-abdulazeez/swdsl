import {
  Box,
  Container,
  Divider,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import Helmet from '@components/Helmet';
import Navbar from '@components/Navbar';
import CategoryNav from '@components/CategoryNav';
import { useProductStore } from '@store/hooks/useProductStore';
import ProductList from '@components/Products/ProductList';

const CategoryDetails = () => {
  const router = useRouter();
  const category = router.query.name;
  const products = useProductStore((state) => state.products);

  const getDrinksByCategory = (
    category: string | string[] | undefined,
    packSize?: string
  ) => {
    return products?.filter(
      (product) =>
        product?.category === category && product?.packSize === packSize
    );
  };

  const renderProducts = () => {
    if (category === 'Whisky')
      return getDrinksByCategory('Whisky')?.length !== 0 ? (
        <Box>
          <Heading size={'md'} mt={6}>
            {' '}
            3 Packs
          </Heading>
          <Divider my={3} />
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 4 }}
            spacingX={{ base: 3, md: 4 }}
            spacingY={{ base: 3, md: 8 }}
          >
            {getDrinksByCategory('Whisky', '3 Packs')?.map((product) => (
              <ProductList key={product?.productId} product={product} />
            ))}
          </SimpleGrid>
          <Heading size={'md'} mt={6}>
            4 Packs
          </Heading>
          <Divider my={3} />
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 4 }}
            spacingX={{ base: 3, md: 4 }}
            spacingY={{ base: 3, md: 8 }}
          >
            {getDrinksByCategory('Whisky', '4 Packs')?.map((product) => (
              <ProductList key={product?.productId} product={product} />
            ))}
          </SimpleGrid>
          <Heading size={'md'} mt={6}>
            6 Packs
          </Heading>
          <Divider my={3} />
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 4 }}
            spacingX={{ base: 3, md: 4 }}
            spacingY={{ base: 3, md: 8 }}
          >
            {getDrinksByCategory('Whisky', '6 Packs')?.map((product) => (
              <ProductList key={product?.productId} product={product} />
            ))}
          </SimpleGrid>
          <Heading size={'md'} mt={6}>
            12 Packs
          </Heading>
          <Divider my={3} />
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 4 }}
            spacingX={{ base: 3, md: 4 }}
            spacingY={{ base: 3, md: 8 }}
          >
            {getDrinksByCategory('Whisky', '12 Packs')?.map((product) => (
              <ProductList key={product?.productId} product={product} />
            ))}
          </SimpleGrid>
        </Box>
      ) : null;
    else if (category === 'Juice')
      return getDrinksByCategory('Juice')?.length !== 0 ? (
        <Box>
          <Heading size={'md'} mt={6}>
            {' '}
            10 Packs
          </Heading>
          <Divider my={3} />
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 4 }}
            spacingX={{ base: 3, md: 4 }}
            spacingY={{ base: 3, md: 8 }}
          >
            {getDrinksByCategory('Juice', '10 Packs')?.map((product) => (
              <ProductList key={product?.productId} product={product} />
            ))}
          </SimpleGrid>
          <Heading size={'md'} mt={6}>
            12 Packs
          </Heading>
          <Divider my={3} />
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 4 }}
            spacingX={{ base: 3, md: 4 }}
            spacingY={{ base: 3, md: 8 }}
          >
            {getDrinksByCategory('Juice', '12 Packs')?.map((product) => (
              <ProductList key={product?.productId} product={product} />
            ))}
          </SimpleGrid>
        </Box>
      ) : null;
    else
      return (
        <Box>
          <Heading size={'md'} mt={6}>
            6 Packs
          </Heading>
          <Divider my={3} />
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 4 }}
            spacingX={{ base: 3, md: 4 }}
            spacingY={{ base: 3, md: 8 }}
            mt={6}
          >
            {getDrinksByCategory(category, '6 Packs') &&
              getDrinksByCategory(category, '6 Packs')?.map((product) => (
                <ProductList product={product} key={product.productId} />
              ))}
          </SimpleGrid>
          <Heading size={'md'} mt={6}>
            12 Packs
          </Heading>
          <Divider my={3} />
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 4 }}
            spacingX={{ base: 3, md: 4 }}
            spacingY={{ base: 3, md: 8 }}
            mt={6}
          >
            {getDrinksByCategory(category, '12 Packs') &&
              getDrinksByCategory(category, '12 Packs')?.map((product) => (
                <ProductList product={product} key={product.productId} />
              ))}
          </SimpleGrid>
        </Box>
      );
  };

  return (
    <>
      <Helmet title={`${category} | ShayoWithDSL | #1 online Wine Shop`} />
      <Navbar />
      <Container mt={10} maxW={'container.lg'}>
        <CategoryNav category={category} />
        <Box>
          <Heading>{category}</Heading>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 4 }}
            spacingX={{ base: 3, md: 4 }}
            spacingY={{ base: 3, md: 8 }}
            mt={6}
          >
            {getDrinksByCategory(category) &&
              getDrinksByCategory(category)?.map((product) => (
                <ProductList product={product} key={product.productId} />
              ))}
          </SimpleGrid>
          {renderProducts()}
        </Box>
      </Container>
    </>
  );
};

export default CategoryDetails;
