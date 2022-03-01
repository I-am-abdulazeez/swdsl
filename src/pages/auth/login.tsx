import { useState } from "react";
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
import { SubmitHandler, useForm } from "react-hook-form";

import { RiEyeLine, RiEyeOffLine, RiMailOpenLine } from "react-icons/ri";

import Helmet from "@components/Helmet";
import AuthHeading from "@components/AuthHeading";

import { inputFocus } from "@utils/index";
import { withPublic } from "src/hooks/useRoute";
import { UserAuthType } from "src/interfaces";

const Index: React.FC<UserAuthType> = (props): JSX.Element => {
  const { userAuth } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { signInUser, isLoading } = userAuth;
  const { register, handleSubmit } =
    useForm<{ email: string; password: string }>();

  const handleUserLogin: SubmitHandler<{ email: string; password: string }> = (
    data
  ) => {
    signInUser(data.email, data.password);
  };

  return (
    <Box>
      <Helmet title="Sign in | Login your Account | ShayoWithDSL" />
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
        <form onSubmit={handleSubmit(handleUserLogin)}>
          <VStack spacing={3} width={{ base: "20em", md: "23em" }}>
            <FormControl id="email">
              <FormLabel>Email Address</FormLabel>
              <InputGroup>
                <Input
                  _focus={inputFocus}
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                  placeholder="you@example.com"
                />
                <InputRightElement>
                  <RiMailOpenLine size={"12.5px"} />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  _focus={inputFocus}
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                />
                <InputRightElement>
                  <IconButton
                    size="xs"
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
              type="submit"
              colorScheme="primary"
              isLoading={isLoading}
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

export default withPublic(Index);
