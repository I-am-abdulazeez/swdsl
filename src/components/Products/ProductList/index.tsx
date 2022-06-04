import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { RiAddFill, RiSubtractLine } from "react-icons/ri";

import ProductBadge from "@components/Products/ProductBadge";

import { ProductListProps } from "@interfaces/index";
import { numberWithCommas } from "@utils/index";

const ProductList: React.FC<ProductListProps> = (props) => {
  const { product, docsSnapshot, inCart, onAddToCart, onRemoveFromCart } =
    props;
  return (
    <Box
      rounded={"lg"}
      border="1px solid #EDF2F7"
      shadow="sm"
      transition={"all 0.3s ease-in-out"}
    >
      <Box
        position={"relative"}
        px={{ base: 4, md: 6 }}
        pt={{ base: 4, md: 6 }}
        pb={2}
      >
        <Image
          borderRadius={"lg"}
          width="200px"
          m={"0 auto"}
          loading="eager"
          height={{ base: "100px", md: "200px" }}
          src={product?.url}
          alt={`${product?.drinkName}`}
        />
      </Box>
      <Box p={{ base: "0.5em", md: "1em" }}>
        <ProductBadge product={product} />
        <Box mt={0} mb={4}>
          <Heading mt={1} size={"sm"}>
            {product?.drinkName}
          </Heading>
          <Heading
            fontWeight={"semibold"}
            color={"primary.500"}
            mt={2}
            fontSize="xl"
          >
            $ {numberWithCommas(product?.price)}
          </Heading>
        </Box>
        <Stack direction={{ base: "column", md: "row" }} spacing={3}>
          <NextLink href={`product/${docsSnapshot?.id}`} passHref>
            <Button isFullWidth size={"xs"} as="a">
              View product
            </Button>
          </NextLink>
          {inCart ? (
            <HStack justify={{ base: "center", md: "right" }}>
              <IconButton
                size="xs"
                onClick={() => onRemoveFromCart(product)}
                aria-label="remove product"
                icon={<RiSubtractLine size="18px" />}
              />
              <IconButton
                size="xs"
                onClick={() => onAddToCart(product)}
                aria-label="add product"
                icon={<RiAddFill size="18px" />}
              />
            </HStack>
          ) : (
            <Button
              isFullWidth
              onClick={() => onAddToCart(product)}
              colorScheme="success"
              size={"xs"}
            >
              Add to cart
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductList;
