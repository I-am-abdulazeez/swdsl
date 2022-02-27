import { Flex, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { useAuth } from "src/hooks/useAuth";
import { AuthContextType } from "src/interfaces";

export const withPublic = (
  Component: React.FC<{ userAuth: AuthContextType }>
) => {
  return function WithPublic(props: AuthContextType) {
    const auth = useAuth();
    const { replace } = useRouter();

    if (auth.user) {
      setTimeout(() => {
        replace("/");
      }, 2000);

      return (
        <Flex align={"center"} h={"100vh"} justify={"center"}>
          <Spinner color="primary.600" />
        </Flex>
      );
    }

    return <Component userAuth={auth} {...props} />;
  };
};
