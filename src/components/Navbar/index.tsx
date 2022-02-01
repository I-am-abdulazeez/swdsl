import {
  Button,
  IconButton,
  useMediaQuery,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { Box, Flex, HStack, Container, Spacer } from "@chakra-ui/layout";
import NextLink from "next/link";
import {
  RiArrowDownSLine,
  RiArrowLeftLine,
  RiLogoutCircleLine,
  RiShoppingCartLine,
  RiStore2Line,
  RiUserLine,
} from "react-icons/ri";
import { useRouter } from "next/dist/client/router";
import { useAuth } from "src/context/AuthContext";

const Navbar = (): JSX.Element => {
  const { signOutUser, user } = useAuth();
  const router = useRouter();
  const buttonSize = useBreakpointValue({ base: "xs", md: "sm" });
  const [isMobile] = useMediaQuery(`(min-width: 40em)`);
  const activeShop = router.pathname === "/shop" ? "primary" : "";

  console.log("Navbar", user);

  console.log(user?.displayName, user?.email);

  return (
    <Box
      as="header"
      left={0}
      top={0}
      right={0}
      bg="rgba(255,255,255,0.8)"
      zIndex={3}
      position="sticky"
      backdropFilter="blur(16px)"
      transition="all 0.2s ease-in-out"
      borderBottom="1px solid #EDF2F7"
    >
      <Container maxW="container.lg" h="3.5rem">
        <Flex height="100%" width="100%" align="center">
          {router.pathname === "/" && (
            <NextLink href="/">
              <Button color={"primary.500"} size={buttonSize} variant="ghost">
                Home
              </Button>
            </NextLink>
          )}
          {router.pathname === "/shop" && (
            <NextLink href="/">
              <Button color={activeShop} size={buttonSize} variant="ghost">
                Home
              </Button>
            </NextLink>
          )}
          {router.pathname === "/contact" && (
            <>
              <NextLink href="/">
                <IconButton
                  size="xs"
                  variant="ghost"
                  aria-label="go-back"
                  icon={<RiArrowLeftLine size="17px" />}
                />
              </NextLink>
              <NextLink href="/contact">
                <Button color={"primary.500"} size={buttonSize} variant="ghost">
                  Contact
                </Button>
              </NextLink>
            </>
          )}
          <Spacer />
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
                  Hi, {user?.displayName}
                </MenuButton>
                <MenuList>
                  <MenuItem fontSize={"sm"}>My Account</MenuItem>
                  <MenuDivider />
                  <MenuItem
                    icon={<RiLogoutCircleLine size={"13px"} />}
                    fontSize={"sm"}
                    color={"red.500"}
                    onClick={() => signOutUser()}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
