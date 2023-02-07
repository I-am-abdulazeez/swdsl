import { useRef, useState } from 'react';

import {
  Box,
  HStack,
  VStack,
  Heading,
  IconButton,
  Image,
  Text,
  Stack,
} from '@chakra-ui/react';

import { RiAddFill, RiDeleteBin6Line, RiSubtractLine } from 'react-icons/ri';

import ProductBadge from '@components/Products/ProductBadge';
import CartItemAlert from './CartItemAlert';

import ProductTag from '@components/Products/ProductTag';

import { CartItemProps } from '@interfaces/index';
import { useProductStore } from '@store/hooks/useProductStore';

const CartItem: React.FC<CartItemProps> = ({
  cartItem,
  removeProduct,
  addProduct,
  removeAllProduct,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const product = useProductStore((state) => state.product);
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <Box width={{ base: 'initial', md: '630px' }} backgroundColor={'white'}>
      <CartItemAlert
        cancelRef={cancelRef}
        cartItem={cartItem}
        isOpen={isOpen}
        onClose={onClose}
        removeAllProduct={removeAllProduct}
      />
      <Box mb={4} p={5} rounded="lg">
        <Box textAlign={'right'}>
          <IconButton
            aria-label="Delete Button"
            size="sm"
            onClick={onOpen}
            icon={<RiDeleteBin6Line size={'15px'} />}
            colorScheme="error"
            variant={'ghost'}
          />
        </Box>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 8, md: 10 }}
          align={{ base: '', md: 'center' }}
        >
          <Image
            borderRadius={'lg'}
            width={{ base: 'full', md: '120px' }}
            loading="lazy"
            src={cartItem?.url}
            alt={`product-${cartItem?.id}`}
          />
          <VStack spacing={2} align={'flex-start'}>
            <HStack>
              <Heading size="md">{cartItem?.drinkName}</Heading>
              <ProductTag product={product} />
            </HStack>
            <ProductBadge product={cartItem} />
            <Text fontSize="sm" width={{ base: 'initial', md: '350px' }}>
              {cartItem?.description}
            </Text>
            <Text fontSize={'16px'} fontWeight={'bold'}>
              ${cartItem?.price * cartItem?.qty}
            </Text>
          </VStack>
        </Stack>
        <HStack mt={8} justify={{ base: 'center', md: 'right' }}>
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
              colorScheme={'primary'}
              icon={<RiAddFill size="18px" />}
            />
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default CartItem;
