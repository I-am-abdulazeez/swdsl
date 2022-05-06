import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import Helmet from "@components/Helmet";
import LogoLink from "@components/LogoLink";
import FormErrorText from "@components/FormErrorText";

import { useAuth } from "@hooks/useAuth";

import { inputFocus } from "@utils/index";

const ResetPassword: React.FC = () => {
  const router = useRouter();
  const { isLoading, resetPassword } = useAuth();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ password: string }>();

  const location = router.query;
  const firebaseoobCode = String(location.oobCode);

  const passwordReset: SubmitHandler<{ password: string }> = (data) => {
    const newPassword = data.password;
    resetPassword(firebaseoobCode, newPassword);
  };

  return (
    <Flex h="100vh" direction={"column"} justify={"center"} align={"center"}>
      <Helmet title="Reset password | ShayoWithDSL" />
      <Box mb={2}>
        <LogoLink width="200px" height="100px" />
      </Box>
      <Box textAlign={"center"}>
        <Heading fontSize={"xl"}>Reset your password</Heading>
        <Text mt={2} fontSize={"sm"}>
          Please use a very strong password.
        </Text>
      </Box>
      <form onSubmit={handleSubmit(passwordReset)}>
        <FormControl my={7} w={{ base: "20rem", md: "22rem" }} id="password">
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
          {errors.password?.type === "minLength" && (
            <FormErrorText>Minimum characters of 6</FormErrorText>
          )}
        </FormControl>
        <Button
          isLoading={isLoading}
          isFullWidth
          colorScheme={"primary"}
          type="submit"
        >
          Reset password
        </Button>
      </form>
    </Flex>
  );
};

export default ResetPassword;
