import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { Box, Button, useBreakpointValue } from '@chakra-ui/react';

import NavDrawer from '@components/Navbar/NavDrawer';

const NavPrimaryLinks: React.FC = () => {
  const router = useRouter();
  const buttonSize = useBreakpointValue({ base: 'xs', md: 'sm' });

  const activeHome = router.pathname === '/' ? 'primary' : '';

  return (
    <Box>
      <NavDrawer />
      <NextLink href="/" passHref>
        <Button
          mx={3}
          colorScheme={activeHome}
          size={buttonSize}
          variant="ghost"
        >
          Home
        </Button>
      </NextLink>
    </Box>
  );
};

export default NavPrimaryLinks;
