import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

import NextLink from "next/link";

import { useProduct } from "@hooks/useProduct";

import ProductBadge from "@components/Products/ProductBadge";

const DrinkSearch: React.FC = () => {
  const { products } = useProduct();
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    console.log(products);
  });

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
          padding={searchTerm ? 3 : 0}
          bgColor={"white"}
          maxHeight={"180px"}
          overflowY={"auto"}
          borderBottomRadius={"8px"}
          border={"1px solid #EDF2F7"}
        >
          {products
            .filter((drink) => {
              if (searchTerm === "" || searchTerm === " ") {
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
            })}
        </Box>
      )}
    </Box>
  );
};

export default DrinkSearch;
