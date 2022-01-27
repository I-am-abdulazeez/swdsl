import {
  Button,
  IconButton,
  useMediaQuery,
  useBreakpointValue,
  Menu,
  MenuButton,
  Text,
  MenuList,
  MenuItem,
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
import { useAuth } from "src/hooks/useAuth";

const Navbar = (): JSX.Element => {
  const router = useRouter();
  const buttonSize = useBreakpointValue({ base: "xs", md: "sm" });
  const [isMobile] = useMediaQuery(`(min-width: 40em)`);
  const { signOutUser, user, isLoggedIn } = useAuth();

  return (
    <Box
      as="header"
      left={0}
      top={0}
      right={0}
      bg="rgba(255,255,255,0.8)"
      zIndex={3}
      position="sticky"
      backdropFilter="blur(12px)"
      transition="box-shadow 0.2s, background-color 0.2s ease-in-out"
      borderBottom="1px solid #EDF2F7"
    >
      <Container maxW="container.lg" h="3.5rem">
        <Flex height="100%" width="100%" align="center">
          {router.pathname === "/" && (
            <NextLink href="/">
              <Button
                color={router.pathname === "/" ? "primary.500" : "initial"}
                size={buttonSize}
                variant="ghost"
              >
                Home
              </Button>
            </NextLink>
          )}
          {router.pathname === "/contact" && (
            <NextLink href="/">
              <IconButton
                size="sm"
                variant="ghost"
                aria-label="go-back"
                icon={<RiArrowLeftLine size="18px" />}
              />
            </NextLink>
          )}
          {router.pathname === "/contact" && (
            <NextLink href="/contact">
              <Button
                color={
                  router.pathname === "/contact" ? "primary.500" : "initial"
                }
                fontWeight="bold"
                size={buttonSize}
                variant="ghost"
              >
                Contact
              </Button>
            </NextLink>
          )}

          <Spacer />
          <HStack>
            {!user && !isLoggedIn && (
              <NextLink href="/auth/login">
                <Button size={buttonSize} variant="ghost">
                  Login
                </Button>
              </NextLink>
            )}
            {!user && !isLoggedIn && (
              <NextLink href="/auth/register">
                <Button size={buttonSize} variant="ghost">
                  Signup
                </Button>
              </NextLink>
            )}
            <NextLink href="/shop">
              {isMobile ? (
                <Button
                  size={buttonSize}
                  variant="ghost"
                  leftIcon={<RiStore2Line size="17px" />}
                >
                  Shop
                </Button>
              ) : (
                <IconButton
                  aria-label="Store"
                  size={buttonSize}
                  variant="ghost"
                  icon={<RiStore2Line size="17px" />}
                />
              )}
            </NextLink>
            <IconButton
              aria-label="shopping cart"
              size={buttonSize}
              variant="ghost"
              icon={<RiShoppingCartLine size="17px" />}
            />
            {user && isLoggedIn && (
              <Menu>
                <MenuButton
                  as={Button}
                  size={buttonSize}
                  variant="ghost"
                  leftIcon={<RiUserLine size="17px" />}
                  rightIcon={<RiArrowDownSLine size="17px" />}
                >
                  Hi, {user?.displayName}
                </MenuButton>
                <MenuList>
                  <MenuItem fontSize={"sm"}>My Account</MenuItem>
                  <MenuItem
                    icon={<RiLogoutCircleLine size={"18px"} />}
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
