import { Button, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Box, Flex, Container, Spacer } from "@chakra-ui/layout";
import NextLink from "next/link";
import { RiArrowLeftLine } from "react-icons/ri";
import { useRouter } from "next/dist/client/router";

import NavLinks from "@components/NavLinks";
import NavDrawer from "@components/NavDrawer";

const Navbar = (): JSX.Element => {
  const router = useRouter();
  const buttonSize = useBreakpointValue({ base: "xs", md: "sm" });
  const activeShop = router.pathname === "/shop" ? "primary" : "";

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
          <NavDrawer />
          {router.pathname === "/" && (
            <NextLink href="/">
              <Button
                mx={3}
                color={"primary.500"}
                size={buttonSize}
                variant="ghost"
              >
                Home
              </Button>
            </NextLink>
          )}

          {router.pathname === "/shop" && (
            <NextLink href="/">
              <Button
                mx={3}
                color={activeShop}
                size={buttonSize}
                variant="ghost"
              >
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
          <NavLinks />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
