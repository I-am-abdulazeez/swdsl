import { FC, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { Box, Stack, Text, VStack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { ChakraNextImage } from "@components/ChakraNextImage";
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
    <>
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
        spacing={6}
      >
        <Box textAlign="center">
          <Box mb={2}>
            <NextLink href="/">
              <a>
                <ChakraNextImage
                  width="200px"
                  height="100px"
                  src="/svgs/swdsl-logo.svg"
                  alt="shayo-logo"
                />
              </a>
            </NextLink>
          </Box>
          <Text fontWeight="bold" fontSize="24px">
            Create an account
          </Text>
          <Text fontSize="sm">
            Already have an account? {""}
            <NextLink href="/auth/login">
              <chakra.a cursor="pointer" textDecor="underline" color="#501815">
                Sign in
              </chakra.a>
            </NextLink>
          </Text>
        </Box>

        <form>
          <VStack spacing={3} width={{ base: "20em", md: "23em" }}>
            <FormControl id="email" isRequired>
              <FormLabel>Email Address</FormLabel>
              <InputGroup>
                <Input
                  _focus={{
                    borderColor: "primary.500",
                    boxShadow: "#b33b32 0px 0px 0px 1px",
                  }}
                  type="email"
                  placeholder="you@example.com"
                />
                <InputRightElement>
                  <RiMailOpenLine />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack
              direction={{ base: "column", md: "row" }}
              width={{ base: "inherit", md: "23em" }}
              spacing={2}
            >
              <FormControl id="first-name" isRequired>
                <FormLabel>First Name</FormLabel>
                <InputGroup>
                  <Input
                    _focus={{
                      borderColor: "primary.500",
                      boxShadow: "#b33b32 0px 0px 0px 1px",
                    }}
                    type="text"
                    placeholder="SHIESTY"
                  />
                  <InputRightElement>
                    <RiUserLine />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="last-name" isRequired>
                <FormLabel>Last Name</FormLabel>
                <InputGroup>
                  <Input
                    _focus={{
                      borderColor: "primary.500",
                      boxShadow: "#b33b32 0px 0px 0px 1px",
                    }}
                    type="text"
                    placeholder="GANG"
                  />
                  <InputRightElement>
                    <RiUserLine />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Stack>
            <Stack
              direction={{ base: "column", md: "row" }}
              width={{ base: "inherit", md: "23em" }}
              spacing={2}
            >
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    _focus={{
                      borderColor: "primary.500",
                      boxShadow: "#b33b32 0px 0px 0px 1px",
                    }}
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    minLength={6}
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
              <FormControl id="phonenumber" isRequired>
                <FormLabel>Phone Number</FormLabel>
                <InputGroup>
                  <Input
                    _focus={{
                      borderColor: "primary.500",
                      boxShadow: "#b33b32 0px 0px 0px 1px",
                    }}
                    type="text"
                    placeholder="0908********"
                  />
                  <InputRightElement>
                    <RiPhoneLine />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Stack>
            <Box display="flex" width="100%">
              <FormControl id="checkbox">
                <Checkbox
                  _focus={{
                    borderColor: "primary.500",
                    boxShadow: "#b33b32 0px 0px 0px 1px",
                  }}
                  colorScheme="primary"
                >
                  I’m 18 years or older
                </Checkbox>
              </FormControl>
            </Box>
            <Button type="submit" colorScheme="primary" isFullWidth>
              Sign up
            </Button>
          </VStack>
        </form>
      </VStack>
    </>
  );
};

export default Index;
