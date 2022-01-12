import { FC, useState } from "react";
import { Box, Stack, VStack } from "@chakra-ui/layout";
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

import { shadowLightMd } from "@utils/index";
import Helmet from "@components/Helmet";
import AuthHeading from "@components/AuthHeading";

const Index: FC = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
