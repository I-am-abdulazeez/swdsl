import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiShoppingCartLine } from "react-icons/ri";
import NextLink from "next/link";

const IconButtonBadge: React.FC<{ badgeContent: number }> = ({
  badgeContent,
}): JSX.Element => {
  const { pathname } = useRouter();

  const buttonSize = useBreakpointValue({ base: "xs", md: "sm" });
  const activeCart = pathname === "/cart" ? "secondary" : "";

  return (
    <NextLink href="/cart" passHref>
      <IconButton
        aria-label="shopping cart"
        size={buttonSize}
        colorScheme={activeCart}
        variant="ghost"
        icon={
          <>
            <RiShoppingCartLine size="17px" />
            <Box
              as={"span"}
              color={"white"}
              position={"absolute"}
              top={"-2px"}
              width="15px"
              height="15px"
              display={"flex"}
              alignItems="center"
              fontSize={"10px"}
              justifyContent={"center"}
              right={"-2px"}
              bgColor={"red.600"}
              rounded="full"
            >
              {badgeContent}
            </Box>
          </>
        }
      />
    </NextLink>
  );
};

export default IconButtonBadge;
