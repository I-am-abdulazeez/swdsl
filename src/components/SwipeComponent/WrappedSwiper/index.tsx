import { Box, Text, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import { ShayoQuotes } from "src/data";
import { QuotesTalks } from "src/interfaces";

const WrappedSwiper: React.FC = (): JSX.Element => {
  return (
    <Box
      bg={
        "linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/images/shayo-drinks.jpg')"
      }
      bgSize="cover"
      bgPosition="top"
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="350px"
      color="#fff"
    >
      <Box id="drunk" w={{ base: "20em", md: "40rem" }} textAlign="center">
        <Swiper
          effect="flip"
          autoplay={{
            delay: 5000,
          }}
          parallax={true}
        >
          {ShayoQuotes.map(
            ({ quoteAuthor, quouteContent, quoteId }: QuotesTalks) => (
              <SwiperSlide key={quoteId}>
                <VStack
                  h="10em"
                  justify={"center"}
                  align={"center"}
                  spacing={6}
                >
                  <Text
                    fontWeight="semibold"
                    fontSize={{ base: "xl", md: "2xl" }}
                    lineHeight="1.5"
                    textTransform={"uppercase"}
                  >
                    {quouteContent}
                  </Text>
                  <Text
                    fontWeight="semibold"
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
  );
};

export default WrappedSwiper;
