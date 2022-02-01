import { Flex, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { useAuth } from "src/context/AuthContext";

export const withPublic = (Component: any) => {
  return function WithPublic(props: any) {
    const auth = useAuth();
    const router = useRouter();

    if (auth.user) {
      router.replace("/");
      return (
        <Flex align={"center"} h={"100vh"} justify={"center"}>
          <Spinner color="primary.600" />
        </Flex>
      );
    }

    return <Component userAuth={auth} {...props} />;
  };
};
