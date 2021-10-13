import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import { FC } from "react";
import NextLink from "next/link";
import { useBreakpointValue } from "@chakra-ui/media-query";
import Icon from "@chakra-ui/icon";
import { RiAddCircleLine } from "react-icons/ri";
import { ShayoBannerImages } from "src/data";
import { ShayoBanner } from "src/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChakraNextImage } from "@components/ChakraNextImage";

const ShowCase: FC = (): JSX.Element => {
  const headingSize: string | undefined = useBreakpointValue({
    base: "md",
    md: "lg",
  });

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <NextLink href="/contact">
        <a>
          <VStack
            bg="white"
            h="100%"
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
        </a>
      </NextLink>

      <Box bg="#000" id="home">
        <Swiper
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
          {ShayoBannerImages.map(({ alt, src }: ShayoBanner, idx: number) => (
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
          ))}
        </Swiper>
      </Box>
    </SimpleGrid>
  );
};

export default ShowCase;
