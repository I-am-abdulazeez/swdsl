import { Box, Button, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiArrowLeftLine } from "react-icons/ri";
import NextLink from "next/link";

import NavDrawer from "@components/Navbar/NavDrawer";

const NavPrimaryLinks: React.FC = () => {
  const router = useRouter();
  const buttonSize = useBreakpointValue({ base: "xs", md: "sm" });

  const activeShop = router.pathname === "/shop" ? "primary" : "";
  const activeCart = router.pathname === "/cart" ? "primary" : "";

  return (
    <Box>
      <NavDrawer />
      {router.pathname === "/" && (
        <NextLink href="/" passHref>
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
        <NextLink href="/" passHref>
          <Button mx={3} color={activeShop} size={buttonSize} variant="ghost">
            Home
          </Button>
        </NextLink>
      )}
      {router.pathname === "/cart" && (
        <NextLink href="/" passHref>
          <Button mx={3} color={activeCart} size={buttonSize} variant="ghost">
            Home
          </Button>
        </NextLink>
      )}
      {router.pathname === "/contact" && (
        <>
          <NextLink href="/" passHref>
            <IconButton
              size="xs"
              variant="ghost"
              aria-label="go-back"
              icon={<RiArrowLeftLine size="17px" />}
            />
          </NextLink>
          <NextLink href="/contact" passHref>
            <Button color={"primary.500"} size={buttonSize} variant="ghost">
              Contact
            </Button>
          </NextLink>
        </>
      )}
    </Box>
  );
};

export default NavPrimaryLinks;
