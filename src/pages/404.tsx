import { Box, Text, VStack } from '@chakra-ui/layout';
import { Container, Button } from '@chakra-ui/react';
import { RiEyeCloseLine } from 'react-icons/ri';
import NextLink from 'next/link';

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Helmet from '@components/Helmet';

const Error404: React.FC = () => {
  return (
    <Box>
      <Helmet title="Error Page | No result found " />
      <Navbar />
      <Container maxW="container.lg">
        <VStack spacing={5} as="main" my="10rem">
          <RiEyeCloseLine size="90px" color="#E2E8F0" />
          <Box textAlign="center">
            <Text fontWeight={'bold'}>No results found!</Text>
            <Text>Unfortunately we couldn't find the page.</Text>
          </Box>
          <NextLink href="/">
            <Button size="sm" variant="outline" colorScheme="secondary">
              Go to Homepage
            </Button>
          </NextLink>
        </VStack>
      </Container>

      <Footer />
    </Box>
  );
};

export default Error404;
