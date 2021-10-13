import { Box, Text, VStack } from "@chakra-ui/layout";
import { FC } from "react";
import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { Container, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { RiSearchEyeLine } from "react-icons/ri";

const Index: FC = (): JSX.Element => {
  return (
    <Box>
      <Head>
        <title>Error Page | No result found </title>
        <meta
          name="description"
          content="ShayoWithDSL | #1 Online wine store"
        />
        <meta
          property="og:title"
          content="ShayoWithDSL | #1 Online wine store"
        />
        <meta
          property="og:description"
          content="ShayoWithDSL |#1 Online wine store"
        />
        <meta property="og:image" content="/images/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
