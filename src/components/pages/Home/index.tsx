import { Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import Head from "next/head";

const Index = (): JSX.Element => {
  return (
    <Box>
      <Head>
        <title>ShayoWithDSL</title>
        <meta name="description" content="ShayoWithDSL" />
        <meta property="og:title" content="ShayoWithDSL" />
        <meta property="og:description" content="ShayoWithDSL" />
        <meta property="og:image" content="/images/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Text>Home Page</Text>
      <Button size="sm" colorScheme="blue">
        Submit
      </Button>
    </Box>
  );
};

export default Index;
