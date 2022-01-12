import {
  VStack,
  Box,
  chakra,
  FormControl,
  InputGroup,
  Input,
  Button,
  InputRightElement,
  FormLabel,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { RiEyeLine, RiEyeOffLine, RiMailOpenLine } from "react-icons/ri";
import { useState } from "react";

import Helmet from "@components/Helmet";
import AuthHeading from "@components/AuthHeading";

import { shadowLightMd } from "@utils/index";

const Index: React.FC = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Box>
      <Helmet title="Login | ShayoWithDSL" />
      <VStack
        as="section"
        align="center"
        justify="center"
        h="100vh"
        spacing={6}
      >
        <AuthHeading
          authText="Don’t have an account?"
          authHeading="Sign in to your account"
          authRoute="Signup"
          authHref="/auth/register"
        />
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

            <Button
              _focus={{
                boxShadow: shadowLightMd,
              }}
              type="submit"
              colorScheme="primary"
              isFullWidth
            >
              Sign in
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default Index;
