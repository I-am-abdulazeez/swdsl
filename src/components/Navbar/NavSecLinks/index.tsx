import NextLink from 'next/link';
import {
  Box,
  Button,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useBreakpointValue,
  useMediaQuery,
} from '@chakra-ui/react';
import router from 'next/router';
import {
  RiStore2Line,
  RiUserLine,
  RiArrowDownSLine,
  RiLogoutCircleLine,
} from 'react-icons/ri';

import IconButtonBadge from '@components/IconButtonBadge';

import { useAuth } from '@hooks/useAuth';
import { useProduct } from '@hooks/useProduct';
import { useAuthStore } from '@store/hooks/useAuthStore';

const NavSecLinks: React.FC = () => {
  const activeShop = router.pathname === '/shop' ? 'primary' : '';
  const activeProfile = router.pathname === '/user/profile';

  const user = useAuthStore((state) => state.user);
  const signOutUser = useAuthStore((state) => state.signOutUser);
  const { cart } = useProduct();

  const buttonSize = useBreakpointValue({ base: 'xs', md: 'sm' });
  const [isMobile] = useMediaQuery(`(min-width: 40em)`);

  console.log(cart?.length);

  return (
    <HStack>
      {!user && (
        <NextLink href="/auth/login" passHref>
          <Button size={buttonSize} variant="ghost">
            Login
          </Button>
        </NextLink>
      )}
      {!user && (
        <NextLink href="/auth/register" passHref>
          <Button size={buttonSize} variant="ghost">
            Signup
          </Button>
        </NextLink>
      )}
      {isMobile ? (
        <NextLink href="/shop" passHref>
          <Button
            size={buttonSize}
            variant="ghost"
            colorScheme={activeShop}
            leftIcon={<RiStore2Line size="17px" />}
          >
            Shop
          </Button>
        </NextLink>
      ) : (
        <NextLink href="/shop" passHref>
          <IconButton
            aria-label="Store"
            size={buttonSize}
            variant="ghost"
            colorScheme={activeShop}
            icon={<RiStore2Line size="17px" />}
          />
        </NextLink>
      )}
      <IconButtonBadge badgeContent={cart?.length} />
      {user && (
        <Box>
          <Menu closeOnBlur={true}>
            <MenuButton
              as={Button}
              size={buttonSize}
              variant="ghost"
              leftIcon={<RiUserLine size="14px" />}
              rightIcon={<RiArrowDownSLine size="14px" />}
            >
              Hi, {user?.displayName}
            </MenuButton>
            <MenuList>
              <NextLink href="/user/profile" passHref>
                <MenuItem
                  borderRight={activeProfile ? '3px solid #b33b32' : ''}
                  borderRightRadius="2px"
                  fontSize={{ base: 'xs', md: 'sm' }}
                >
                  My Account
                </MenuItem>
              </NextLink>
              <MenuDivider />
              <MenuItem
                icon={<RiLogoutCircleLine size={'13px'} />}
                fontSize={{ base: 'xs', md: 'sm' }}
                color={'red.500'}
                onClick={() => signOutUser()}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      )}
    </HStack>
  );
};

export default NavSecLinks;
