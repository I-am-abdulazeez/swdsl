import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Spinner,
  Text,
  HStack,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

import {
  collection,
  DocumentData,
  FirestoreError,
  getDocs,
  query,
  QueryDocumentSnapshot,
  where,
} from "firebase/firestore";

import { shadowSm } from "@utils/index";

import { firebaseFirestore } from "@lib/firebase";

const DrinkSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [drinkSnap, setDrinkSnap] = useState<
    QueryDocumentSnapshot<DocumentData>[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  const drinkRef = collection(firebaseFirestore, "products");

  const drinkQuery = query(drinkRef, where("drinkName", "==", searchTerm));
  const snapshots = getDocs(drinkQuery);
  let docsIsEmpty!: boolean;

  const getProductOnChange = () => {
    setIsLoading(true);
    snapshots
      .then((docsSnapshot) => {
        setIsLoading(false);
        setDrinkSnap(docsSnapshot?.docs);
        docsIsEmpty = docsSnapshot?.empty;
        console.log(docsSnapshot?.docs);
      })
      .catch((error: FirestoreError) => {
        setIsLoading(false);
        console.log(error.message);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);

    getProductOnChange();
  };

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  return (
    <Box>
      <InputGroup size="lg">
        <InputLeftElement pointerEvents="none">
          <RiSearch2Line color="#CBD5E0" size="20px" />
        </InputLeftElement>
        <Input
          onChange={handleChange}
          type="text"
          _focus={{
            boxShadow: shadowSm,
          }}
          fontSize="14px"
          placeholder="Search for drinks"
        />
      </InputGroup>
      <Box
        padding={5}
        bgColor="white"
        height="40px"
        borderBottomRadius={"8px"}
        border={"1px solid #EDF2F7"}
      >
        {docsIsEmpty && <Text>Drink not found.</Text>}
        {isLoading && (
          <Flex height="100%">
            <Spinner size={"sm"} colorScheme={"primary.500"} />
          </Flex>
        )}
        {drinkSnap &&
          drinkSnap?.map((drinkSnap) => {
            const drinks = drinkSnap?.data();
            return (
              <HStack
                cursor={"pointer"}
                justify={"space-between"}
                padding={"5px"}
                _hover={{
                  bgColor: "#EDF2F7",
                }}
                key={drinkSnap?.id}
              >
                <Text fontWeight={"semibold"}>{drinks?.drinkName}</Text>
                <Badge fontSize={"12px"}>{drinks?.category}</Badge>
              </HStack>
            );
          })}
      </Box>
    </Box>
  );
};

export default DrinkSearch;
