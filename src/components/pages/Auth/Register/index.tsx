import { VStack } from "@chakra-ui/layout";

import Helmet from "@components/Helmet";
import AuthHeading from "@components/AuthHeading";
import RegisterForm from "./RegisterForm";

import { withPublic } from "src/hooks/useRoutes";
import { AuthContextType } from "src/interfaces";

const Index: React.FC<{ userAuth: AuthContextType }> = ({
  userAuth,
}): JSX.Element => {
  const { isLoading, setUser, setIsLoggedIn, setIsLoading } = userAuth;

  return (
    <>
      <Helmet title="Sign up | Create an Account | ShayoWithDSL.com" />
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
        <RegisterForm
          isLoading={isLoading}
          setUser={setUser}
          setIsLoading={setIsLoading}
          setIsLoggedIn={setIsLoggedIn}
        />
      </VStack>
    </>
  );
};

export default withPublic(Index);
