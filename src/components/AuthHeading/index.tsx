import { Box, chakra, Text } from "@chakra-ui/react";
import { ChakraNextImage } from "@components/ChakraNextImage";
import NextLink from "next/link";

const AuthHeading = ({
  authHeading,
  authText,
  authHref,
  authRoute,
}: {
  authHeading: string;
  authText: string;
  authHref: string;
  authRoute: string;
}): JSX.Element => {
  return (
    <Box textAlign="center">
      <Box mb={2}>
        <NextLink href="/">
          <a>
            <ChakraNextImage
              width="200px"
              height="100px"
              src="/svgs/swdsl-logo.svg"
              alt="shayo-logo"
            />
          </a>
        </NextLink>
      </Box>
      <Text fontWeight="bold" fontSize="24px">
        {authHeading}
      </Text>
      <Text fontSize="sm">
        {authText} {""}
        <NextLink href={authHref}>
          <chakra.a cursor="pointer" textDecor="underline" color="#501815">
            {" "}
            {authRoute}
          </chakra.a>
        </NextLink>
      </Text>
    </Box>
  );
};

export default AuthHeading;
