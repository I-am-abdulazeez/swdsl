import { Heading } from "@chakra-ui/react";
import { Box, Container, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import NextLink from "next/link";
import { RiArrowDownLine } from "react-icons/ri";

import { ChakraNextImage } from "@components/ChakraNextImage";
import Navbar from "@components/Navbar";
import ScrollToTop from "@components/ScrollToTop";
import Footer from "@components/Footer";
import ShowCase from "@components/Showcase";
import Helmet from "@components/Helmet";
import DrinkSearch from "@components/DrinkSearch";
import WrappedSwiper from "@components/SwipeComponent/WrappedSwiper";
import VideoSwipe from "@components/SwipeComponent/VideoSwipe";

const Index: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet title="ShayoWithDSL | #1 Online wine store" />
      <Navbar />
      <Box as="main" mt={{ base: "6rem", md: "8rem" }}>
        <Container maxW="container.sm">
          <DrinkSearch />
        </Container>
        <Box textAlign="center" mt={{ base: "3rem", md: "5rem" }}>
          <NextLink href="/">
            <a>
              <ChakraNextImage
                width="800px"
                height="230px"
                src="/svgs/swdsl-logo.svg"
                alt="shayo-logo"
              />
            </a>
          </NextLink>
        </Box>
        <VideoSwipe />
        <ShowCase />
        <WrappedSwiper />
      </Box>

      <VStack
        as="section"
        id="get"
        spacing={{ base: 5, md: 8 }}
        align="center"
        justify="center"
        bg="#501815"
        color="#fff"
        height="300px"
        textAlign="center"
        p={6}
      >
        <Heading fontWeight="semibold" size={"xl"} lineHeight="1.5">
          QUALITY DRINKS DELIVERED TO YOUR DOORSTEP
        </Heading>
        <Button
          bg="transparent"
          _hover={{
            bg: "transparent",
          }}
          size="lg"
          _active={{
            backgroundColor: "transparent",
          }}
          textTransform="uppercase"
          rightIcon={<RiArrowDownLine className="fade-in-down" size="25px" />}
        >
          Get your Now!
        </Button>
      </VStack>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;
