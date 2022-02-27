import { Box, Container, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import NextLink from "next/link";

import TeamStack from "@components/TeamStack";
import { ChakraNextImage } from "@components/ChakraNextImage";

const Footer: React.FC = (): JSX.Element => {
  return (
    <Box as="footer" mt="5rem" bg="white">
      <Container maxW="container.lg">
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <NextLink href="/contact">
            <chakra.a cursor="pointer" _hover={{ bgColor: "#EDF2F7" }}>
              <VStack as="section" width={{ base: "unset", md: "250px" }}>
                <ChakraNextImage
                  src="/images/location.png"
                  alt="location"
                  height="210px"
                  width="210px"
                />
                <Text fontWeight="semibold" fontSize="xl">
                  Where to Buy
                </Text>
              </VStack>
            </chakra.a>
          </NextLink>
          <NextLink href="#">
            <a>
              <VStack
                borderLeft={{ base: "none", md: "1px solid #EDF2F7" }}
                spacing={5}
                height={{ base: "200px", md: "300px" }}
                as="section"
                mt={{ base: "5rem", md: "0px" }}
              >
                <Text
                  width={{ base: "300px", md: "250px" }}
                  fontWeight="semibold"
                  textAlign={{ base: "center", md: "start" }}
                  fontSize={{ base: "xl", md: "2xl" }}
                >
                  Write to us if you have any questions:
                </Text>
                <Text
                  textAlign="left"
                  _hover={{
                    textDecor: "underline",
                  }}
                  width={{ base: "unset", md: "250px" }}
                  fontWeight="semibold"
                  fontSize="lg"
                >
                  Our Team
                </Text>

                <TeamStack />
              </VStack>
            </a>
          </NextLink>
        </SimpleGrid>
      </Container>

      <Box textAlign="right" mt={{ base: "3rem", md: "5rem" }}>
        <ChakraNextImage
          width="150px"
          height="70px"
          src="/svgs/swdsl-logo.svg"
          alt="shayo-logo"
        />
      </Box>
    </Box>
  );
};

export default Footer;
