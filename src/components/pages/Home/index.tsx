import {
  Box,
  Container,
  Input,
  InputLeftElement,
  InputGroup,
  Text,
  Heading,
  Button,
  Flex,
  SimpleGrid,
  Icon,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChakraNextImage } from "@components/ChakraImage";
import Navbar from "@components/Navbar";
import Head from "next/head";
import { FC } from "react";
import {
  RiAddCircleLine,
  RiArrowDownLine,
  RiSearch2Line,
} from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper";
import ScrollToTop from "@components/ScrollToTop";
import Footer from "@components/Footer";

interface ShayoBannerObject {
  src: string;
  alt: string;
}

const ShayoBanner: ShayoBannerObject[] = [
  {
    src: "/images/party-one.png",
    alt: "party-one",
  },
  {
    src: "/images/party-two.png",
    alt: "party-two",
  },
  {
    src: "/images/party-three.png",
    alt: "party-three",
  },
];

const Index: FC = (): JSX.Element => {
  const headingSize: string | undefined = useBreakpointValue({
    base: "md",
    md: "lg",
  });

  return (
    <Box>
      <Head>
        <title>ShayoWithDSL</title>
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

      <Box as="main" mt="3rem">
        <Container maxW="container.sm">
          <Box>
            <InputGroup size="lg">
              <InputLeftElement
                pointerEvents="none"
                children={<RiSearch2Line color="#CBD5E0" size="20px" />}
              />
              <Input
                type="text"
                fontSize="14px"
                placeholder="Search for drinks"
              />
            </InputGroup>
          </Box>
        </Container>

        <Box textAlign="center" mt={{ base: "3rem", md: "5rem" }}>
          <ChakraNextImage
            width="315px"
            height="149px"
            src="/svgs/swdsl-logo.svg"
            alt="shayo-logo"
          />
        </Box>

        <Flex
          bg="#000"
          mt="4rem"
          opacity="0.75"
          justify="center"
          align="center"
          h="300px"
        >
          <Text color="#eee">Video</Text>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <VStack
            bg="white"
            spacing={{ base: 5, md: 10 }}
            p={{ base: 8, md: 10 }}
            justify="center"
          >
            <Heading
              size={headingSize}
              fontWeight="semibold"
              textAlign={{ base: "center", md: "unset" }}
            >
              Looking to sell something
            </Heading>
            <Icon
              as={RiAddCircleLine}
              color="#501815"
              w={{ base: "70px", md: "90px" }}
              h={{ base: "70px", md: "90px" }}
            />
            <Text fontWeight="semibold" fontSize={{ base: "md", md: "2xl" }}>
              Postup an ad...
            </Text>
          </VStack>
          <Box bg="#000" id="home">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                type: "bullets",
              }}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
              }}
            >
              {ShayoBanner.map(
                ({ alt, src }: ShayoBannerObject, idx: number) => (
                  <SwiperSlide key={idx}>
                    <Box textAlign="center">
                      <ChakraNextImage
                        src={src}
                        alt={alt}
                        height="350px"
                        width="350px"
                      />
                    </Box>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </Box>
        </SimpleGrid>

        <Box
          id="drunk"
          p={6}
          as="section"
          bg={`linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 150, 0.3)), url("/images/shayo-drinks.jpg")`}
          bgSize="cover"
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="400px"
          color="#fff"
        >
          <Box w={{ base: "unset", md: "40rem" }} textAlign="center">
            <Heading fontWeight="semibold" size={"lg"} lineHeight="1.5">
              One should always be drunk. That's all that matters... But with
              what? With wine, with poetry, or with virtue, as you chose. But
              get drunk.
            </Heading>
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
