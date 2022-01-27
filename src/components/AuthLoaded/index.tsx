import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "src/hooks/useAuth";

const AuthLoaded = ({
  children,
}: {
  children: React.ReactElement;
}): JSX.Element => {
  const { user } = useAuth();
  return user ? (
    children
  ) : (
    <Flex h="100vh" justify={"center"} align={"center"}>
      <Spinner />
    </Flex>
  );
};

export default AuthLoaded;
