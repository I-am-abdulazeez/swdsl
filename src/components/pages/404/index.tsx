import { Box, Text, VStack } from "@chakra-ui/layout";
import { Container, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { RiSearchEyeLine } from "react-icons/ri";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Helmet from "@components/Helmet";

const Index: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Helmet title="Error Page | No result found " />
      <Navbar />
      <Container maxW="container.lg">
        <VStack spacing={5} as="main" my="10rem">
          <RiSearchEyeLine size="90px" color="#E2E8F0" />
          <Box textAlign="center">
            <Text>No results found!</Text>
            <Text>Unfortunately we couldn't find any product.</Text>
          </Box>
          <NextLink href="/">
            <Button size="sm" variant="outline" colorScheme="primary">
              Go to Homepage
            </Button>
          </NextLink>
        </VStack>
      </Container>

      <Footer />
    </Box>
  );
};

export default Index;
