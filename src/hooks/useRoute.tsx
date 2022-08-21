import { Flex, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { useAuthStore } from '@store/hooks/useAuthStore';

export const withPublic = (Component: React.FC) => {
  return function WithPublic() {
    const user = useAuthStore((state) => state.user);
    const { replace } = useRouter();

    if (user) {
      setTimeout(() => {
        replace('/'); // redirect to home page
      }, 2000);

      return (
        <Flex align={'center'} h={'100vh'} justify={'center'}>
          <Spinner color="primary.600" />
        </Flex>
      );
    }

    return <Component />;
  };
};

export const withPrivate = (Component: React.FC) => {
  return function WithPrivate() {
    const user = useAuthStore((state) => state.user);
    const { replace } = useRouter();

    if (!user) {
      setTimeout(() => {
        replace('/auth/login'); // redirect to login page
      }, 2000);

      return (
        <Flex align={'center'} h={'100vh'} justify={'center'}>
          <Spinner color="primary.600" />
        </Flex>
      );
    }

    return <Component />;
  };
};
