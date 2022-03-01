import { useState } from "react";

import {
  AuthError,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";

import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Stack,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  RiEyeLine,
  RiEyeOffLine,
  RiMailOpenLine,
  RiPhoneLine,
  RiUserLine,
} from "react-icons/ri";

import FormErrorText from "@components/FormErrorText";

import { firebaseAuth, firebaseFirestore } from "src/lib/firebase";

import { IUserRegister, UserActionType, UserData } from "src/interfaces";
import {
  emailPattern,
  inputFocus,
  nigeriaPhoneNumberPattern,
} from "@utils/index";

const RegisterForm: React.FC<UserActionType> = (props): JSX.Element => {
  const { isLoading, setUser, setIsLoggedIn, setIsLoading } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const chakraToast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>();

  const handleUserSignup: SubmitHandler<IUserRegister> = (data) => {
    setIsLoading(true);
    // Data saved to DB after user creation
    const newData: UserData = {
      email: data.email,
      firstname: data.firstname,
      lastname: data.lastname,
      phonenumber: data.phonenumber,
      accept: data.accept,
      createdAt: Timestamp.fromDate(new Date()).toDate().toDateString(),
      cart: [],
    };

    console.log(newData, data.password);
    const createUser = createUserWithEmailAndPassword(
      firebaseAuth,
      data.email,
      data.password
    );
    createUser
      .then((data) => {
        const currentUser = data.user;
        setUser(currentUser);
        updateProfile(currentUser, {
          displayName: newData.firstname,
        }).catch((error) => {
          console.log(error);
        });
        const userId = data.user.uid;
        const collectionRef = collection(firebaseFirestore, "users");
        const ref = doc(collectionRef, userId);
        setDoc(ref, newData).then(() => {
          console.log("done, saved to DB");
        });
        setIsLoggedIn(true);
        setIsLoading(false);
        chakraToast({
          status: "success",
          title: "Account created successfully",
          isClosable: true,
          variant: "subtle",
          containerStyle: {
            fontSize: "12.5px",
          },
        });
      })
      .catch((error: AuthError) => {
        chakraToast({
          status: "error",
          title: error.message,
          isClosable: true,
          variant: "subtle",
          containerStyle: {
            fontSize: "12.5px",
          },
        });
        setIsLoggedIn(false);
        setIsLoading(false);
      });
  };

  return (
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
                pattern: emailPattern,
              })}
            />
            <InputRightElement>
              <RiMailOpenLine size={"12.5px"} />
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
                <RiUserLine size={"12.5px"} />
              </InputRightElement>
            </InputGroup>
            {errors.firstname?.type === "required" && (
              <FormErrorText>Field is required!</FormErrorText>
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
                <RiUserLine size={"12.5px"} />
              </InputRightElement>
            </InputGroup>
            {errors.lastname?.type === "required" && (
              <FormErrorText>Field is required!</FormErrorText>
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
                  size="xs"
                  variant="ghost"
                  aria-label="password"
                  onClick={() => setShowPassword(!showPassword)}
                  icon={showPassword ? <RiEyeLine /> : <RiEyeOffLine />}
                />
              </InputRightElement>
            </InputGroup>
            {errors.password?.type === "required" && (
              <FormErrorText>Password is required.</FormErrorText>
            )}
            {errors.password?.type === "minLength" && (
              <FormErrorText>Minimum of 6 characters.</FormErrorText>
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
                  pattern: nigeriaPhoneNumberPattern,
                })}
              />
              <InputRightElement>
                <RiPhoneLine size={"12.5px"} />
              </InputRightElement>
            </InputGroup>
            {errors.phonenumber?.type === "pattern" ||
              (errors.phonenumber?.type === "required" && (
                <FormErrorText>
                  Please, enter a valid nigeria phonenumber.
                </FormErrorText>
              ))}
            {errors.phonenumber?.type === "maxLength" && (
              <FormErrorText>Maximum of 10 characters.</FormErrorText>
            )}
          </FormControl>
        </Stack>
        <FormControl id="accept">
          <Checkbox
            colorScheme="primary"
            {...register("accept", { required: true })}
          >
            I’m 18 years or older.
          </Checkbox>
          {errors.accept?.type === "required" && (
            <FormErrorText>
              Please, accept the terms and condition.
            </FormErrorText>
          )}
        </FormControl>
        <Button
          type="submit"
          isLoading={isLoading}
          colorScheme="primary"
          isFullWidth
        >
          Signup user
        </Button>
      </VStack>
    </form>
  );
};

export default RegisterForm;
