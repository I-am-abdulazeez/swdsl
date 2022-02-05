import { useAuth } from "src/context/AuthContext";

import NextLink from "next/link";
import {
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
} from "@chakra-ui/react";
import router from "next/router";
import {
  RiStore2Line,
  RiShoppingCartLine,
  RiUserLine,
  RiArrowDownSLine,
  RiLogoutCircleLine,
} from "react-icons/ri";

const NavLinks = () => {
  const { signOutUser, user } = useAuth();
  const buttonSize = useBreakpointValue({ base: "xs", md: "sm" });
  const [isMobile] = useMediaQuery(`(min-width: 40em)`);
  const activeShop = router.pathname === "/shop" ? "primary" : "";

  return (
    <HStack>
      {!user && (
        <NextLink href="/auth/login">
          <Button size={buttonSize} variant="ghost">
            Login
          </Button>
        </NextLink>
      )}
      {!user && (
        <NextLink href="/auth/register">
          <Button size={buttonSize} variant="ghost">
            Signup
          </Button>
        </NextLink>
      )}
      {isMobile ? (
        <NextLink href="/shop">
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
        <NextLink href="/shop">
          <IconButton
            aria-label="Store"
            size={buttonSize}
            variant="ghost"
            colorScheme={activeShop}
            icon={<RiStore2Line size="17px" />}
          />
        </NextLink>
      )}
      <IconButton
        aria-label="shopping cart"
        size={buttonSize}
        variant="ghost"
        icon={<RiShoppingCartLine size="17px" />}
      />
      {user && (
        <Menu closeOnBlur={true}>
          <MenuButton
            as={Button}
            size={buttonSize}
            variant="ghost"
            leftIcon={<RiUserLine size="14px" />}
            rightIcon={<RiArrowDownSLine size="14px" />}
          >
            Hi, {user.displayName}
          </MenuButton>
          <MenuList>
            <MenuItem fontSize={{ base: "xs", md: "sm" }}>My Account</MenuItem>
            <MenuDivider />
            <MenuItem
              icon={<RiLogoutCircleLine size={"13px"} />}
              fontSize={{ base: "xs", md: "sm" }}
              color={"red.500"}
              onClick={() => signOutUser()}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </HStack>
  );
};

export default NavLinks;
