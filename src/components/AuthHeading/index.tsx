import { Box, chakra, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import LogoLink from "@components/LogoLink";

import { AuthHeadingProps } from "@interfaces/index";

const AuthHeading: React.FC<AuthHeadingProps> = (props) => {
  const { authHeading, authText, authHref, authRoute } = props;

  return (
    <Box textAlign="center">
      <Box mb={2}>
        <LogoLink width="200px" height="100px" />
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
