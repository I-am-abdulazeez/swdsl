import {
  VStack,
  Box,
  Text,
  chakra,
  FormControl,
  InputGroup,
  Input,
  Button,
  InputRightElement,
  FormLabel,
  IconButton,
} from "@chakra-ui/react";
import { ChakraNextImage } from "@components/ChakraNextImage";
import NextLink from "next/link";
import Head from "next/head";
import { RiEyeLine, RiEyeOffLine, RiMailOpenLine } from "react-icons/ri";
import { FC, useState } from "react";

const Index: FC = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Box>
      <Head>
        <title>Login | ShayoWithDSL</title>
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
            Sign in to your account
          </Text>
          <Text fontSize="sm">
            Don’t have an account? {""}
            <NextLink href="/auth/register">
              <chakra.a cursor="pointer" textDecor="underline" color="#501815">
                {" "}
                Sign up
              </chakra.a>
            </NextLink>
          </Text>
        </Box>

        <form>
          <VStack spacing={3} width={{ base: "20em", md: "23em" }}>
            <FormControl id="email">
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
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  _focus={{
                    borderColor: "primary.500",
                    boxShadow: "#b33b32 0px 0px 0px 1px",
                  }}
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

            <Box display="flex" width="100%" justifyContent="right">
              <NextLink href="/auth/forgot-password">
                <chakra.a
                  fontSize="13px"
                  fontWeight="medium"
                  cursor="pointer"
                  mb={1}
                  textDecor="underline"
                >
                  Forgot password
                </chakra.a>
              </NextLink>
            </Box>

            <Button colorScheme="primary" isFullWidth>
              Sign in
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default Index;
