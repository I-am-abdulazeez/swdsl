import {
  Input,
  InputLeftElement,
  InputGroup,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Flex, Box, Container, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { ChakraNextImage } from "@components/ChakraNextImage";
import NextLink from "next/link";
import Navbar from "@components/Navbar";
import Head from "next/head";
import {
  RiArrowDownLine,
  RiDoubleQuotesL,
  RiSearch2Line,
} from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollToTop from "@components/ScrollToTop";
import Footer from "@components/Footer";
import ShowCase from "@components/Showcase";
import { ShayoQuotes } from "src/data";
import { QuotesTalks } from "src/interfaces";

const Index = (): JSX.Element => {
  return (
    <Box>
      <Head>
        <title>ShayoWithDSL | #1 Online wine store</title>
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

      <Box as="main" mt="4rem">
        <Container maxW="container.sm">
          <Box>
            <InputGroup size="lg">
              <InputLeftElement pointerEvents="none">
                <RiSearch2Line color="#CBD5E0" size="20px" />
              </InputLeftElement>
              <Input
                type="text"
                _focus={{
                  borderColor: "primary.500",
                  boxShadow: "#b33b32 0px 0px 0px 1px",
                }}
                fontSize="14px"
                placeholder="Search for drinks"
              />
            </InputGroup>
          </Box>
        </Container>

        <Box textAlign="center" mt={{ base: "3rem", md: "5rem" }}>
          <NextLink href="/">
            <a>
              <ChakraNextImage
                width="315px"
                height="149px"
                src="/svgs/swdsl-logo.svg"
                alt="shayo-logo"
              />
            </a>
          </NextLink>
        </Box>

        <Flex
          bg="#000"
          mt="4rem"
          opacity="0.75"
          justify="center"
          align="center"
          h="400px"
        >
          <Text color="#eee">Video</Text>
        </Flex>

        <ShowCase />

        <Box
          bg={
            "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 150, 0.3)), url('/images/shayo-drinks.jpg')"
          }
          bgSize="cover"
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="450px"
          color="#fff"
        >
          <Box id="drunk" w={{ base: "20em", md: "40rem" }} textAlign="center">
            <Swiper
              pagination={{
                clickable: true,
                dynamicBullets: true,
                type: "bullets",
              }}
              effect="flip"
              autoplay={{
                delay: 3000,
              }}
              parallax={true}
            >
              {ShayoQuotes.map(
                ({ quoteAuthor, quouteContent }: QuotesTalks, idx) => (
                  <SwiperSlide key={idx}>
                    <VStack h="19em" spacing={6}>
                      <RiDoubleQuotesL
                        size="100px"
                        color="#ff0096"
                        opacity="0.4"
                      />
                      <Text
                        fontWeight="semibold"
                        fontSize={{ base: "xl", md: "2xl" }}
                        lineHeight="1.5"
                      >
                        {quouteContent}
                      </Text>
                      <Text
                        fontWeight="bold"
                        fontSize={{ base: "md", md: "lg" }}
                      >
                        {quoteAuthor}
                      </Text>
                    </VStack>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </Box>
        </Box>
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
        <Heading fontWeight="semibold" size={"lg"} lineHeight="1.5">
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
    </Box>
  );
};

export default Index;
