import { Box, Container, Divider, Text } from '@chakra-ui/react';

import Helmet from '@components/Helmet';
import Navbar from '@components/Navbar';
import PasswordUpdate from '@components/User/PasswordUpdate';
import AccountUpdate from '@components/User/AccountUpdate';

import { withPrivate } from '@hooks/useRoute';

import { useAuthStore } from '@store/hooks/useAuthStore';

const Profile: React.FC = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <Box>
      <Helmet
        title={`My Profile | ${user?.displayName} (${user?.email}) | ShayoWithDSL`}
      />
      <Navbar />
      <Container mt={10} maxW={'container.lg'}>
        <Text fontSize={'2xl'} fontWeight="semibold">
          My Profile Page
        </Text>
        <Divider my={4} />
        <Text>Account Information</Text>
        {/* Account Update */}
        <AccountUpdate />
        {/* Password update */}
        {/* <PasswordUpdate /> */}
      </Container>
    </Box>
  );
};

export default withPrivate(Profile);
