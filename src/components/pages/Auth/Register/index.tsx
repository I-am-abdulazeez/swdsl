import { FC, useState } from "react";
import { Stack, VStack } from "@chakra-ui/layout";
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
import { getAuth, updateProfile } from "firebase/auth";

import { Button, IconButton } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { SubmitHandler, useForm } from "react-hook-form";
import { Text } from "@chakra-ui/react";

import Helmet from "@components/Helmet";
import AuthHeading from "@components/AuthHeading";

import { collection, doc, Timestamp } from "firebase/firestore";

import { inputFocus, shadowLightMd } from "@utils/index";
import { firebaseFirestore } from "src/lib/firebase";
import { IUserRegister } from "src/interfaces";
import { useFirestoreDocumentMutation } from "@react-query-firebase/firestore";
import { withPublic } from "src/hooks/routes";

const Index = ({ userAuth }: { userAuth: any }): JSX.Element => {
  const auth = getAuth();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { isLoading, signUpUser, user } = userAuth;
  const userId: string = String(user?.uid);
  const collectionRef = collection(firebaseFirestore, "users");
  const ref = doc(collectionRef, userId);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>();
  const docMutation = useFirestoreDocumentMutation(
    ref,
    {},
    {
      onError(error) {
        console.log(error);
      },
      onSuccess(data) {
        console.log(data);
      },
    }
  );

  const handleUserSignup: SubmitHandler<IUserRegister> = (data) => {
    const newData = {
      email: data.email,
      firstname: data.firstname,
      lastname: data.lastname,
      password: data.password,
      phonenumber: data.phonenumber,
      accept: data.accept,
      createdAt: Timestamp.fromDate(new Date()).toDate().toDateString(),
    };
    console.log(newData);
    signUpUser(newData.email, newData.password);
    setTimeout(() => {
      updateProfile(auth?.currentUser!, {
        displayName: newData.firstname,
      })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
      docMutation.mutate(newData);
    }, 2000);
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

        <form onSubmit={handleSubmit(handleUserSignup)}>
          <VStack spacing={3} width={{ base: "20em", md: "30em" }}>
            <FormControl id="email">
              <FormLabel>Email Address</FormLabel>
              <InputGroup>
                <Input
                  _focus={inputFocus}
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
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
              <FormControl id="firstname">
                <FormLabel>First Name</FormLabel>
                <InputGroup>
                  <Input
                    _focus={inputFocus}
                    type="text"
                    placeholder="SHIESTY"
                    {...register("firstname", {
                      required: true,
                    })}
                  />
                  <InputRightElement>
                    <RiUserLine />
                  </InputRightElement>
                </InputGroup>
                {errors.firstname && (
                  <Text fontSize={"xs"} mt={1} color={"red.500"}>
                    Field is required!
                  </Text>
                )}
              </FormControl>
              <FormControl id="lastname">
                <FormLabel>Last Name</FormLabel>
                <InputGroup>
                  <Input
                    _focus={inputFocus}
                    type="text"
                    placeholder="GANG"
                    {...register("lastname", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                  />
                  <InputRightElement>
                    <RiUserLine />
                  </InputRightElement>
                </InputGroup>
                {errors.lastname && (
                  <Text fontSize={"xs"} mt={1} color={"red.500"}>
                    Field is required!
                  </Text>
                )}
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
                    {...register("password", {
                      required: true,
                      minLength: 6,
                    })}
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
                {errors.password && (
                  <Text fontSize={"xs"} mt={1} color={"red.500"}>
                    Password is required and minimum of 6 characters.
                  </Text>
                )}
              </FormControl>
              <FormControl id="phonenumber">
                <FormLabel htmlFor="phonenumber">Phone Number</FormLabel>
                <InputGroup>
                  <InputLeftAddon>+234</InputLeftAddon>
                  <Input
                    _focus={inputFocus}
                    type="text"
                    placeholder="908********"
                    {...register("phonenumber", {
                      required: true,
                      maxLength: 10,
                      pattern:
                        /((^90)([0-9]))|((^70)([0-9]))|((^80)([0-9]))|((^81)([0-9]))(\d{7})/,
                    })}
                  />
                  <InputRightElement>
                    <RiPhoneLine />
                  </InputRightElement>
                </InputGroup>
                {errors.phonenumber && (
                  <Text fontSize={"xs"} mt={1} color={"red.500"}>
                    Please, enter a valid phonenumber.
                  </Text>
                )}
              </FormControl>
            </Stack>
            <FormControl id="accept">
              <Checkbox
                _focus={inputFocus}
                colorScheme="primary"
                {...register("accept", { required: true })}
              >
                I’m 18 years or older.
              </Checkbox>
              {errors.accept && (
                <Text fontSize={"xs"} mt={1} color={"red.500"}>
                  Please, accept the terms.
                </Text>
              )}
            </FormControl>
            <Button
              type="submit"
              isLoading={isLoading}
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

export default withPublic(Index);
