import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { doc } from "@firebase/firestore";
import { useRouter } from "next/router";

import { useFirestoreDocument } from "@react-query-firebase/firestore";
import { RiArrowLeftLine } from "react-icons/ri";

import Navbar from "@components/Navbar";
import Helmet from "@components/Helmet";

import { firebaseFirestoreAdmin } from "src/lib/firebase";

const Index: React.FC = (): JSX.Element => {
  const { query, back } = useRouter();
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });
  const { id }: any = query;

  const ref = doc(firebaseFirestoreAdmin, "products", id);
  const product = useFirestoreDocument(["products", id], ref, {
    subscribe: true,
    includeMetadataChanges: true,
  });
  const snapshot = product?.data?.data();

  console.log(product);

  return (
    <Box>
      <Helmet
        title={`${snapshot?.drinkName} | ShayoWithDSL | #1 online Wine Shop`}
      />
      <Navbar />
      <Container maxW={"container.lg"} mt={7}>
        <Flex justify={"space-between"} align={"center"}>
          <IconButton
            aria-label="back-icon"
            size={"sm"}
            variant="ghost"
            onClick={back}
            colorScheme="secondary"
            icon={<RiArrowLeftLine size={"18px"} />}
          />
          <Button colorScheme={"success"} size={buttonSize}>
            Add to cart
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;
