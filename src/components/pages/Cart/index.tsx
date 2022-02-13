import { Box, Container, Divider, Flex, Text } from "@chakra-ui/react";

import Helmet from "@components/Helmet";
import Navbar from "@components/Navbar";

const Index: React.FC = () => {
  return (
    <Box>
      <Helmet title="My Cart | ShayoWithDSL" />
      <Navbar />
      <Container mt={10} maxW={"container.lg"}>
        <Flex justify={"space-between"}>
          <Text fontSize={"sm"} fontWeight="semibold">
            My Cart
          </Text>
          <Text fontSize={"sm"}>0 item(s)</Text>
        </Flex>
        <Divider mt={4} />
      </Container>
    </Box>
  );
};

export default Index;
