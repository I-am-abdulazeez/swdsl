import { Box, Flex, Container } from "@chakra-ui/layout";

import NavSecLinks from "@components/Navbar/NavSecLinks";
import NavPrimaryLinks from "@components/Navbar/NavPrimaryLinks";

const Navbar: React.FC = () => {
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
        <Flex
          justify={"space-between"}
          height="100%"
          width="100%"
          align="center"
        >
          <NavPrimaryLinks />
          <NavSecLinks />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
