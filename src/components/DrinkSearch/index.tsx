import { ReactNode, useState } from "react";

import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
  HStack,
} from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";

import NextLink from "next/link";

import ProductBadge from "@components/Products/ProductBadge";

import { useProduct } from "@hooks/useProduct";

const DrinkSearch: React.FC = () => {
  const { products } = useProduct();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const displaySearchedProducts = (): ReactNode => {
    return products
      .filter((drink) => {
        if (searchTerm === "") {
          return drink;
        } else if (
          drink
            .data()
            ?.drinkName?.toLowerCase()
            ?.includes(searchTerm?.toLowerCase())
        ) {
          return drink;
        }
      })
      .map((drinkSnap) => {
        const drinks = drinkSnap?.data();
        return (
          <NextLink
            key={drinkSnap?.id}
            href={`product/${drinkSnap?.id}`}
            passHref
          >
            <HStack
              cursor={"pointer"}
              justify={"space-between"}
              padding={"10px"}
              borderRadius={"8px"}
              fontSize={"15px"}
              _hover={{
                bgColor: "#F7FAFC",
              }}
            >
              <Text fontWeight={"normal"}>{drinks?.drinkName}</Text>
              <ProductBadge product={drinks} />
            </HStack>
          </NextLink>
        );
      });
  };

  return (
    <Box>
      <InputGroup size="lg">
        <InputLeftElement pointerEvents="none">
          <RiSearch2Line color="#b33b32" size="18px" />
        </InputLeftElement>
        <Input
          onChange={(e) => setSearchTerm(e.target?.value)}
          type="text"
          _focus={{
            boxShadow: "none",
          }}
          fontSize="13.5px"
          placeholder="Search any drinks name"
        />
      </InputGroup>
      {searchTerm && (
        <Box
          bgColor={"white"}
          maxHeight={"180px"}
          overflowY={"auto"}
          borderBottomRadius={"8px"}
          border={searchTerm ? "1px solid #EDF2F7" : "none"}
        >
          {displaySearchedProducts()}
        </Box>
      )}
    </Box>
  );
};

export default DrinkSearch;
