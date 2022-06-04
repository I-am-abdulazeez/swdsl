import { useState } from "react";

import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useForm, SubmitHandler } from "react-hook-form";

import {
  RiEyeLine,
  RiEyeOffLine,
  RiMailOpenLine,
  RiUserLine,
} from "react-icons/ri";

import { getAuth, updateProfile } from "firebase/auth";

import Helmet from "@components/Helmet";
import Navbar from "@components/Navbar";

import { useAuth } from "@hooks/useAuth";
import { withPrivate } from "@hooks/useRoute";
import { UserPasswordUpdate } from "@interfaces/index";
import { inputFocus } from "@utils/index";
import { useAuthUpdateProfile } from "@react-query-firebase/auth";

const Index: React.FC = () => {
  const { user } = useAuth();
  const firebaseAuth = getAuth();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { mutate: mutateUpdateDisplayName, isLoading: isLoadingName } =
    useAuthUpdateProfile();

  const { register: userAccountRegister, handleSubmit: userAccountSubmit } =
    useForm<{ displayName: string }>();
  const { register: userPassRegister, handleSubmit: userPassSubmit } =
    useForm<UserPasswordUpdate>();

  const updateUserAccount: SubmitHandler<{ displayName: string }> = (data) => {
    const { displayName } = data;
    const user = firebaseAuth.currentUser;
    if (user) {
      mutateUpdateDisplayName({
        user: user,
        displayName: displayName,
      });
    }
  };

  const updateUserPassword: SubmitHandler<UserPasswordUpdate> = (data) => {
    console.log(data);
  };

  return (
    <Box>
      <Helmet
        title={`My Profile | ${user?.displayName} (${user?.email}) | ShayoWithDSL`}
      />
      <Navbar />
      <Container mt={10} maxW={"container.lg"}>
        <Text fontSize={"2xl"} fontWeight="semibold">
          My Profile Page
        </Text>
        <Divider my={4} />
        <Text>Account Information</Text>
        {/* Account Update */}
        <form onSubmit={userAccountSubmit(updateUserAccount)}>
          <Stack
            direction={{ base: "column", sm: "column", md: "row" }}
            spacing={7}
            mt={7}
            mb={8}
          >
            <FormControl id="email">
              <FormLabel>Email Address</FormLabel>
              <InputGroup>
                <Input disabled type="email" defaultValue={user?.email || ""} />
                <InputRightElement>
                  <RiMailOpenLine size={"12.5px"} />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="displayName">
              <FormLabel>Display Name</FormLabel>
              <InputGroup>
                <Input
                  _focus={inputFocus}
                  type="text"
                  {...userAccountRegister("displayName")}
                  defaultValue={user?.displayName || ""}
                />
                <InputRightElement>
                  <RiUserLine size={"12.5px"} />
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Stack>
          <Button
            isLoading={isLoadingName}
            colorScheme={"error"}
            size={"sm"}
            type="submit"
          >
            Update user info
          </Button>
        </form>

        {/* Password update */}
        <form onSubmit={userPassSubmit(updateUserPassword)}>
          <Box my={6}>
            <Text>Password Details</Text>
            <HStack mt={4}>
              <Text>Show all password</Text>
              <IconButton
                size="xs"
                aria-label="password"
                onClick={() => setShowPassword(!showPassword)}
                icon={showPassword ? <RiEyeLine /> : <RiEyeOffLine />}
              />
            </HStack>
          </Box>

          <Stack
            direction={{ base: "column", sm: "column", md: "row" }}
            spacing={7}
            mb={8}
          >
            <FormControl id="oldPassword">
              <FormLabel>Old Password</FormLabel>
              <Input
                _focus={inputFocus}
                type={showPassword ? "text" : "password"}
                placeholder="********"
                {...userPassRegister("oldPassword", {
                  required: true,
                  minLength: 6,
                })}
              />
            </FormControl>
            <FormControl id="newPassword">
              <FormLabel>New Password</FormLabel>
              <Input
                _focus={inputFocus}
                type={showPassword ? "text" : "password"}
                placeholder="********"
                {...userPassRegister("newPassword", {
                  required: true,
                  minLength: 6,
                })}
              />
            </FormControl>
            <FormControl id="confirmNewPassword">
              <FormLabel>Confirm New Password</FormLabel>
              <Input
                _focus={inputFocus}
                type={showPassword ? "text" : "password"}
                placeholder="********"
                {...userPassRegister("confirmNewPassword", {
                  required: true,
                  minLength: 6,
                })}
              />
            </FormControl>
          </Stack>
          <Button size={"sm"} colorScheme="success" type="submit">
            Update password info
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default withPrivate(Index);
