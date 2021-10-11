import {
  Box,
  Container,
  Spacer,
  HStack,
  Flex,
  Button,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { RiShoppingCartLine, RiUserLine } from "react-icons/ri";

const Navbar = (): JSX.Element => {
  const buttonSize = useBreakpointValue({ base: "xs", md: "sm" });

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
      role="Navigation"
    >
      <Container maxW="container.lg" h="3.5rem">
        <Flex height="100%" width="100%" align="center">
          <NextLink href="/">
            <Button size={buttonSize} variant="ghost">
              Home
            </Button>
          </NextLink>
          <Spacer />
          <HStack>
            <NextLink href="/auth/login">
              <Button size={buttonSize} variant="ghost">
                Login
              </Button>
            </NextLink>
            <NextLink href="/">
              <Button size={buttonSize} variant="ghost">
                Signup
              </Button>
            </NextLink>
            <IconButton
              aria-label="shoppign cart"
              size={buttonSize}
              variant="ghost"
              icon={<RiShoppingCartLine size="17px" />}
            />
            <IconButton
              aria-label="shoppign cart"
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
