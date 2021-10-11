import { Avatar } from "@chakra-ui/avatar";
import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { ChakraNextImage } from "@components/ChakraImage";
import { FC } from "react";

const Footer: FC = (): JSX.Element => {
  return (
    <Box as="footer" pt="4rem" pb={10} px={6} bg="white">
      <Container maxW="container.lg">
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <VStack as="section" width={{ base: "unset", md: "250px" }}>
            <ChakraNextImage
              src="/images/location.png"
              alt="location"
              height="250px"
              width="250px"
            />
            <Text fontWeight="semibold" fontSize="xl">
              Where to Buy
            </Text>
          </VStack>
          <VStack spacing={5} as="section" mt={{ base: "3rem", md: "0px" }}>
            <Text
              width={{ base: "unset", md: "250px" }}
              fontWeight="semibold"
              fontSize="2xl"
            >
              Write to us if you have any questions:
            </Text>
            <Text
              textAlign="left"
              width={{ base: "unset", md: "250px" }}
              fontWeight="semibold"
              fontSize="lg"
              textDecor="underline"
            >
              Our Team
            </Text>

            <Stack
              direction="row"
              spacing={4}
              width={{ base: "unset", md: "250px" }}
            >
              <Avatar size="sm" bg="#EDF2F7" border="1px solid #A5B4C6" />
              <Avatar size="sm" bg="#EDF2F7" border="1px solid #A5B4C6" />
              <Avatar size="sm" bg="#EDF2F7" border="1px solid #A5B4C6" />
            </Stack>

            <Stack
              direction="row"
              spacing={4}
              width={{ base: "unset", md: "250px" }}
            >
              <Avatar size="sm" name="D" bg="#C97200" />
              <Avatar size="sm" name="S" bg="#C97200" />
              <Avatar size="sm" name="L" bg="#C97200" />
            </Stack>
          </VStack>
        </SimpleGrid>
      </Container>

      <Box textAlign="right" mt={{ base: "3rem", md: "5rem" }}>
        <ChakraNextImage
          width="150px"
          height="100px"
          src="/svgs/swdsl-logo.svg"
          alt="shayo-logo"
        />
      </Box>
    </Box>
  );
};

export default Footer;
