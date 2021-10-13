import {
  Button,
  IconButton,
  useMediaQuery,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Box, Flex, HStack, Container, Spacer } from "@chakra-ui/layout";
import NextLink from "next/link";
import { RiShoppingCartLine, RiStore2Line, RiUserLine } from "react-icons/ri";
import { useRouter } from "next/dist/client/router";

const Navbar = (): JSX.Element => {
  const buttonSize = useBreakpointValue({ base: "xs", md: "sm" });
  const [isMobile] = useMediaQuery(`(min-width: 40em)`);
  const router = useRouter();

  return (
    <Box
      as="header"
      left={0}
      top={0}
      right={0}
      bg="white"
      zIndex={3}
      position="sticky"
      transition="box-shadow 0.2s, background-color 0.2s ease-in-out"
      borderBottom="1px solid #EDF2F7"
    >
      <Container maxW="container.lg" h="3.5rem">
        <Flex height="100%" width="100%" align="center">
          <NextLink href="/">
            {router.pathname === "/" ? (
              <Button
                color={router.pathname === "/" ? "primary.500" : "initial"}
                size={buttonSize}
                variant="ghost"
              >
                Home
              </Button>
            ) : (
              <Button
                color={
                  router.pathname === "/contact" ? "primary.500" : "initial"
                }
                size={buttonSize}
                variant="ghost"
              >
                Contact
              </Button>
            )}
          </NextLink>
          <Spacer />
          <HStack>
            <NextLink href="/auth/login">
              <Button size={buttonSize} variant="ghost">
                Login
              </Button>
            </NextLink>
            <NextLink href="/auth/register">
              <Button size={buttonSize} variant="ghost">
                Signup
              </Button>
            </NextLink>
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
            <IconButton
              aria-label="shopping cart"
              size={buttonSize}
              variant="ghost"
              icon={<RiUserLine size="17px" />}
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
