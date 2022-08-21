import { VStack } from '@chakra-ui/layout';

import Helmet from '@components/Helmet';
import AuthHeading from '@components/AuthHeading';
import RegisterForm from '@components/RegisterForm';

import { withPublic } from '@hooks/useRoute';

const Register: React.FC = () => {
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
          authText="Already have an account ?"
          authHref="/auth/login"
          authRoute="Signin"
        />
        <RegisterForm />
      </VStack>
    </>
  );
};

export default withPublic(Register);
