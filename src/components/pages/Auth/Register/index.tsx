import { FC, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { Box, Stack, Text, VStack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { ChakraNextImage } from "@components/ChakraImage";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import {
  RiEyeLine,
  RiEyeOffLine,
  RiMailOpenLine,
  RiPhoneLine,
  RiUserLine,
} from "react-icons/ri";
import { Button, IconButton } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";

const Index: FC = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Box>
      <Head>
        <title>Register | ShayoWithDSL</title>
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

      <VStack
        as="section"
        align="center"
        justify="center"
        h="100vh"
        spacing={5}
      >
        <Box textAlign="center">
          <Box mb={2}>
            <ChakraNextImage
              width="200px"
              height="100px"
              src="/svgs/swdsl-logo.svg"
              alt="shayo-logo"
            />
          </Box>
          <Text fontWeight="bold" fontSize="24px">
            Create an Account
          </Text>
          <Text fontSize="sm">
            Already have an account?
            <NextLink href="/auth/login">
              <chakra.a cursor="pointer" textDecor="underline" color="#501815">
                {" "}
                Signin
              </chakra.a>
            </NextLink>
          </Text>
        </Box>

        <form>
          <VStack spacing={3} width={{ base: "20em", md: "21em" }}>
            <FormControl id="email">
              <FormLabel>Email Address</FormLabel>
              <InputGroup>
                <Input type="email" placeholder="you@example.com" />
                <InputRightElement>
                  <RiMailOpenLine />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack
              direction={{ base: "column", md: "row" }}
              width={{ base: "inherit", md: "21em" }}
              spacing={3}
            >
              <FormControl id="first-name">
                <FormLabel>Firstname</FormLabel>
                <InputGroup>
                  <Input type="text" placeholder="Olamide" />
                  <InputRightElement>
                    <RiUserLine />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="last-name">
                <FormLabel>Lastname</FormLabel>
                <InputGroup>
                  <Input type="text" placeholder="Olanrewaju" />
                  <InputRightElement>
                    <RiUserLine />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Stack>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                />
                <InputRightElement>
                  <IconButton
                    size="sm"
                    variant="ghost"
                    aria-label="password"
                    onClick={() => setShowPassword(!showPassword)}
                    icon={showPassword ? <RiEyeLine /> : <RiEyeOffLine />}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="phonenumber">
              <FormLabel>Phone Number</FormLabel>
              <InputGroup>
                <Input type="text" placeholder="0908********" />
                <InputRightElement>
                  <RiPhoneLine />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Box display="flex" width="100%">
              <Checkbox defaultIsChecked>I’m 18 years or older</Checkbox>
            </Box>
            <Button colorScheme="primary" isFullWidth>
              Signin
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default Index;
