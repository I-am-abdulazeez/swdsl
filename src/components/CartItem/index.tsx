import { useEffect, useRef, useState } from 'react';

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
  Input,
  Switch,
  FormLabel,
} from '@chakra-ui/react';

import { RiAddFill, RiDeleteBin2Line, RiSubtractLine } from 'react-icons/ri';

import { CartItemProps } from '@interfaces/index';

import ProductBadge from '@components/Products/ProductBadge';

import CartItemAlert from './CartItemAlert';

const CartItem: React.FC<CartItemProps> = ({
  cartItem,
  removeProduct,
  addProduct,
  removeAllProduct,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const [buyInPacks, setBuyInPacks] = useState(false);

  useEffect(() => {
    console.log(buyInPacks);
    setBuyInPacks(false);
  }, []);

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
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 8, md: 10 }}
          align={{ base: '', md: 'center' }}
        >
          <Image
            borderRadius={'lg'}
            width="140px"
            loading="eager"
            src={cartItem?.url}
            alt={`product-${cartItem?.id}`}
          />
          <VStack spacing={2} align={'flex-start'}>
            <ProductBadge product={cartItem} />
            <Heading size="md">{cartItem?.drinkName}</Heading>
            <Text fontSize="xs" width={{ base: 'initial', md: '350px' }}>
              {cartItem?.description}
            </Text>
          </VStack>
          {buyInPacks && (
            <Stack
              spacing={{ base: 5, md: 2 }}
              direction={'column'}
              alignItems={{ base: 'center', sm: 'initial' }}
            >
              <HStack>
                <Input placeholder={'10'} width={12} padding={2} />
                <Text fontWeight={'semibold'}>X 6 packs</Text>
              </HStack>
              <Text textAlign={'center'} fontWeight={'semibold'}>
                or
              </Text>
              <HStack>
                <Input placeholder={'10'} width={12} padding={2} />
                <Text fontWeight={'semibold'}>X 12 packs</Text>
              </HStack>
            </Stack>
          )}
          <Text fontSize={'16px'}>{cartItem?.price.toFixed(2)}</Text>
          <Text fontSize={'16px'}>{cartItem?.price * cartItem?.qty!}</Text>
        </Stack>
        <HStack mt={8} justify={{ base: 'center', md: 'right' }}>
          <Box>
            <Button
              size="xs"
              onClick={() => setIsOpen(true)}
              leftIcon={<RiDeleteBin2Line size={'12.5px'} />}
              colorScheme="error"
              variant={'ghost'}
            >
              Remove Product
            </Button>
          </Box>
          <Spacer />
          {!buyInPacks && (
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
          )}
        </HStack>
        <HStack mt={7} alignItems={'center'}>
          <Text fontWeight={'semibold'}>Buy in wholesale</Text>
          <Switch
            id="packs switch"
            colorScheme={'primary'}
            isChecked={buyInPacks}
            onChange={() => {
              setBuyInPacks((prev) => !prev);
            }}
            size={'sm'}
            fontWeight={'semibold'}
          />
          <Text fontWeight={'semibold'}>Buy in packs</Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default CartItem;
