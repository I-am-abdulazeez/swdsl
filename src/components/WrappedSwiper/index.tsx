import { Box, Text, VStack } from "@chakra-ui/react";
import { ShayoQuotes } from "src/data";
import { QuotesTalks } from "src/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";

const WrappedSwiper = (): JSX.Element => {
  return (
    <Box
      bg={
        "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 150, 0.3)), url('/images/shayo-drinks.jpg')"
      }
      bgSize="cover"
      bgPosition="center"
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
                <VStack h="10em" spacing={6}>
                  <Text
                    fontWeight="semibold"
                    fontSize={{ base: "xl", md: "2xl" }}
                    lineHeight="1.5"
                  >
                    {quouteContent}
                  </Text>
                  <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
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
