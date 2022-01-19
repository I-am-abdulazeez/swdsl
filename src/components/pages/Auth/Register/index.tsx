import { FC, useState } from "react";
import { Box, Stack, VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import {
  Input,
  InputGroup,
  InputRightElement,
  InputLeftAddon,
} from "@chakra-ui/input";
import {
  RiEyeLine,
  RiEyeOffLine,
  RiMailOpenLine,
  RiPhoneLine,
  RiUserLine,
} from "react-icons/ri";

import { Button, IconButton } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";

import { inputFocus, shadowLightMd } from "@utils/index";

import Helmet from "@components/Helmet";
import AuthHeading from "@components/AuthHeading";
import { useForm } from "react-hook-form";
import { Alert, AlertIcon, AlertTitle, useToast } from "@chakra-ui/react";

const Index: FC = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  const handleSignup = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Helmet title="Register | ShayoWithDSL" />
      <VStack
        as="section"
        align="center"
        justify="center"
        h="100vh"
        spacing={6}
      >
        <AuthHeading
          authHeading="Create an account"
          authText="Already have an account?"
          authHref="/auth/login"
          authRoute="Signin"
        />

        <form onSubmit={handleSubmit(handleSignup)}>
          <VStack spacing={3} width={{ base: "20em", md: "30em" }}>
            <FormControl id="email">
              <FormLabel>Email Address</FormLabel>
              <InputGroup>
                <Input
                  _focus={inputFocus}
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", { required: true })}
                />
                <InputRightElement>
                  <RiMailOpenLine />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack
              direction={{ base: "column", md: "row" }}
              width={{ base: "inherit", md: "30em" }}
              spacing={2}
            >
              <FormControl id="first-name">
                <FormLabel>First Name</FormLabel>
                <InputGroup>
                  <Input
                    _focus={inputFocus}
                    type="text"
                    placeholder="SHIESTY"
                    {...register("first-name", { required: true })}
                  />
                  <InputRightElement>
                    <RiUserLine />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="last-name">
                <FormLabel>Last Name</FormLabel>
                <InputGroup>
                  <Input
                    _focus={inputFocus}
                    type="text"
                    placeholder="GANG"
                    {...register("last-name", { required: true })}
                  />
                  <InputRightElement>
                    <RiUserLine />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Stack>
            <Stack
              direction={{ base: "column", md: "row" }}
              width={{ base: "inherit", md: "30em" }}
              spacing={2}
            >
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    _focus={inputFocus}
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    minLength={6}
                    {...register("password", { required: true })}
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
                  <InputLeftAddon>+234</InputLeftAddon>
                  <Input
                    _focus={inputFocus}
                    type="text"
                    placeholder="908********"
                    {...register("phonenumber", {
                      required: true,
                      minLength: 10,
                      maxLength: 11,
                    })}
                  />
                  <InputRightElement>
                    <RiPhoneLine />
                  </InputRightElement>
                </InputGroup>
                {errors.phonenumber && (
                  <Alert status="error">
                    <AlertIcon />
                    <AlertTitle fontSize={"12px"} fontWeight={"medium"} mr={2}>
                      Please, check the phone number inputed.
                    </AlertTitle>
                  </Alert>
                )}
              </FormControl>
            </Stack>
            <Box display="flex" width="100%">
              <FormControl id="accept" isRequired>
                <Checkbox
                  _focus={inputFocus}
                  colorScheme="primary"
                  {...register("accept", { required: true })}
                >
                  I’m 18 years or older
                </Checkbox>
              </FormControl>
            </Box>
            <Button
              _focus={{
                boxShadow: shadowLightMd,
              }}
              type="submit"
              colorScheme="primary"
              isFullWidth
            >
              Sign up
            </Button>
          </VStack>
        </form>
      </VStack>
    </>
  );
};

export default Index;
