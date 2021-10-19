import { Box, Flex, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import { FC } from "react";
import Head from "next/head";
import NextLink from "next/link";
import Navbar from "@components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChakraNextImage } from "@components/ChakraNextImage";
import { DSLFounders } from "src/data";
import { Founders } from "src/interfaces";
import TeamStack from "@components/TeamStack";
import { chakra } from "@chakra-ui/system";

const Index: FC = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Contact Shayo Team | No result found </title>
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

      <SimpleGrid
        id="contact-carousel"
        columns={{ base: 1, md: 2 }}
        height="91vh"
        as="main"
      >
        <Flex bgColor="#292929" align="center" justifyContent="center">
          <Swiper
            pagination={{
              type: "bullets",
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 2,
            }}
            autoplay={{
              delay: 3000,
            }}
            style={{ textAlign: "center", color: "#ddd", height: "5rem" }}
          >
            <SwiperSlide>
              <Text>Picture Loading 1...</Text>
            </SwiperSlide>
            <SwiperSlide>
              <Text>Picture Loading 2...</Text>
            </SwiperSlide>
            <SwiperSlide>
              <Text>Picture Loading. 3..</Text>
            </SwiperSlide>
          </Swiper>
        </Flex>
        <Flex justify="center" align="center" flexDir="column">
          <VStack spacing={2}>
            <Box>
              <NextLink href="/">
                <a>
                  <ChakraNextImage
                    width="300px"
                    height="90px"
                    src="/svgs/swdsl-logo.svg"
                    alt="shayo-logo"
                  />
                </a>
              </NextLink>
            </Box>
            <Box w={{ base: "20em", md: "25em" }} textAlign="center">
              <Swiper autoplay={{ delay: 5000 }}>
                {DSLFounders.map(({ founderName, founderId }: Founders) => (
                  <SwiperSlide key={founderId}>
                    <Text fontWeight="bold" fontSize="lg">
                      {founderName}
                    </Text>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Text fontStyle="italic" fontWeight="semibold" fontSize="sm">
                Founder
              </Text>
            </Box>
            <Box
              w={{ base: "20em", md: "25em" }}
              py={{ base: "1rem", md: "5rem" }}
              as="section"
            >
              <Swiper autoplay={{ delay: 5000 }}>
                {DSLFounders.map(
                  (
                    { founderEmail, founderPhoneNumber }: Founders,
                    idx: number
                  ) => (
                    <SwiperSlide key={idx}>
                      <VStack>
                        <Text>
                          Business Email:{" "}
                          <chakra.span fontWeight="bold">
                            {founderEmail}
                          </chakra.span>
                        </Text>
                        <Text>
                          Business Number:{" "}
                          <chakra.span fontWeight="bold">
                            {founderPhoneNumber}
                          </chakra.span>
                        </Text>
                      </VStack>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </Box>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 2 }} width="80%">
            <VStack spacing={5}>
              <Text
                textAlign="left"
                width={{ base: "unset", md: "250px" }}
                fontWeight="bold"
                textDecor="underline"
                fontSize="lg"
              >
                Our Team
              </Text>
              <TeamStack />
            </VStack>
            <VStack mt={{ base: "2rem", md: "0px" }}>
              <Text
                textAlign="left"
                width={{ base: "unset", md: "250px" }}
                fontWeight="bold"
                textDecor="underline"
                fontSize="lg"
              >
                Physical Address
              </Text>
              <Box w={{ base: "20em", md: "16em" }} ml={3}>
                <Swiper
                  autoplay={{
                    delay: 3000,
                  }}
                >
                  {DSLFounders.map(
                    ({ founderAddress }: Founders, idx: number) => (
                      <SwiperSlide key={idx}>
                        <Text
                          width={{ base: "unset", md: "250px" }}
                          fontWeight="medium"
                          fontSize="sm"
                          textAlign={{ base: "center", md: "left" }}
                        >
                          {founderAddress}
                        </Text>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </Box>
            </VStack>
          </SimpleGrid>
        </Flex>
      </SimpleGrid>
    </>
  );
};

export default Index;
