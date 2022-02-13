import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import NextLink from "next/link";

import ProductBadge from "@components/Products/ProductBadge";

import { ProductListProps } from "src/interfaces";

const ProductList: React.FC<ProductListProps> = ({
  product,
  docsSnapshot,
}): JSX.Element => {
  return (
    <Box
      rounded={"lg"}
      border="1px solid #EDF2F7"
      shadow="sm"
      transition={"all 0.3s ease-in-out"}
    >
      <Box position={"relative"} p={{ base: 4, md: 8 }}>
        <Image
          borderRadius={"lg"}
          width="150px"
          m={"0 auto"}
          loading="eager"
          height="100px"
          src={product.url}
          alt={`product-${product?.drinkName}`}
        />
      </Box>
      <Box p={{ base: "0.5em", md: "1em" }}>
        <ProductBadge product={product} />
        <Box mt={0} mb={6}>
          <Heading mt={1} size={"sm"}>
            {product?.drinkName}
          </Heading>
          <Heading
            fontWeight={"semibold"}
            color={"primary.500"}
            mt={2}
            fontSize="xl"
          >
            $ {product?.price}
          </Heading>
        </Box>
        <Flex justify={"space-between"}>
          <NextLink href={`product/${docsSnapshot.id}`}>
            <Button size={"xs"}>View</Button>
          </NextLink>
          <Button colorScheme="success" size={"xs"}>
            Add to cart
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductList;
