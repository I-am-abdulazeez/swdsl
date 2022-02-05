import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import ProductBadge from "@components/ProductBadge";
import NextLink from "next/link";

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
      <Box position={"relative"}>
        <Image
          borderRadius={"lg"}
          width="100%"
          loading="lazy"
          height="150px"
          src={product.url}
          alt={`product-${product?.drinkName}`}
        />
      </Box>
      <Box p="0.5em">
        <ProductBadge product={product} />
        <Box mt={2} mb={6}>
          <Heading size="s">{product?.drinkName}</Heading>
          <Heading
            fontWeight={"semibold"}
            color={"primary.500"}
            mt={2}
            fontSize="lg"
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
