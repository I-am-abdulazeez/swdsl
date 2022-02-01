import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import NextLink from "next/link";
import { RiMailOpenLine } from "react-icons/ri";
import {
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

import { ChakraNextImage } from "@components/ChakraNextImage";
import Helmet from "@components/Helmet";
import { inputFocus } from "@utils/index";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "src/context/AuthContext";

const Index = (): JSX.Element => {
  const { sendPasswordEmailReset, isLoading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();

  const passwordResetSubmit: SubmitHandler<{ email: string }> = (data) => {
    console.log(data);
    sendPasswordEmailReset(data.email);
  };

  return (
    <Flex justify={"center"} direction={"column"} align={"center"} h={"100vh"}>
      <Helmet title="Forgot password | ShayoWithDSL" />
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
      <Box textAlign={"center"}>
        <Heading fontSize={"xl"}>We've got you, we all forget things.</Heading>
        <Text mt={2} fontSize={"sm"}>
          Please enter e-mail address used for signup.
        </Text>
      </Box>

      <form onSubmit={handleSubmit(passwordResetSubmit)}>
        <FormControl w={{ base: "20rem", md: "25rem" }} my={7} id="email">
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
              <RiMailOpenLine />
            </InputRightElement>
          </InputGroup>
          {errors.email?.type === "required" && (
            <Text fontSize={"xs"} mt={1} color={"red.500"}>
              Email is required!
            </Text>
          )}
        </FormControl>
        <Button
          isLoading={isLoading}
          isFullWidth
          colorScheme={"primary"}
          type="submit"
        >
          Send Reset Email
        </Button>
      </form>
    </Flex>
  );
};

export default Index;
