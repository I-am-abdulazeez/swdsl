import {
  Box,
  Button,
  HStack,
  VStack,
  Heading,
  IconButton,
  Image,
  Text,
  Spacer,
  Checkbox,
  Stack,
} from "@chakra-ui/react";
import ProductBadge from "@components/Products/ProductBadge";
import { FC, useRef, useState } from "react";
import { RiAddFill, RiDeleteBin2Line, RiSubtractLine } from "react-icons/ri";

import { CartItemProps } from "src/interfaces";
import CartItemAlert from "./CartItemAlert";

const CartItem: FC<CartItemProps> = (props) => {
  const { cartItem, removeProduct, addProduct, removeAllProduct } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  return (
    <Box>
      <CartItemAlert
        cancelRef={cancelRef}
        cartItem={cartItem}
        isOpen={isOpen}
        onClose={onClose}
        removeAllProduct={removeAllProduct}
      />
      <Box my={4} p={5} rounded="lg" border="1px solid #EDF2F7">
        <Stack direction={{ base: "column", md: "row" }} spacing={10}>
          <Image
            borderRadius={"lg"}
            width="140px"
            loading="eager"
            src={cartItem?.url}
            alt={`product-${cartItem?.id}`}
          />
          <VStack spacing={2} align={"flex-start"}>
            <ProductBadge product={cartItem} />
            <Heading size="md">{cartItem?.drinkName}</Heading>
            <Text fontSize="xs" width={{ base: "initial", md: "350px" }}>
              {cartItem?.description}
            </Text>
          </VStack>
          <VStack justify={"flex-start"}>
            <Checkbox defaultChecked colorScheme="primary">
              12 packs
            </Checkbox>
            <Checkbox defaultChecked colorScheme="primary">
              6 packs
            </Checkbox>
          </VStack>
          <Box>
            <Text fontSize={"16px"}>{cartItem?.price.toFixed(2)}</Text>
          </Box>
          <Box>
            <Text fontSize={"16px"}>{cartItem?.price * cartItem?.qty}</Text>
          </Box>
        </Stack>
        <HStack mt={4} justify={{ base: "center", md: "right" }}>
          <Box>
            <Button
              size="xs"
              onClick={() => setIsOpen(true)}
              leftIcon={<RiDeleteBin2Line size={"12.5px"} />}
              colorScheme="error"
              variant={"ghost"}
            >
              Remove Product
            </Button>
          </Box>
          <Spacer />
          <HStack spacing={4}>
            <IconButton
              size="xs"
              onClick={() => removeProduct(cartItem)}
              aria-label="remove product"
              isDisabled={cartItem?.qty === 1}
              icon={<RiSubtractLine size="18px" />}
            />
            <Text>{cartItem?.qty}</Text>
            <IconButton
              size="xs"
              onClick={() => addProduct(cartItem)}
              aria-label="add product"
              colorScheme={"primary"}
              icon={<RiAddFill size="18px" />}
            />
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default CartItem;
