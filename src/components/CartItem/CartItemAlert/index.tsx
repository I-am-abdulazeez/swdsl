import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  AlertDialogCloseButton,
} from '@chakra-ui/react';
import { CartItemAlertProps } from '@interfaces/index';

const CartItemAlert: React.FC<CartItemAlertProps> = ({
  cartItem,
  isOpen,
  cancelRef,
  onClose,
  removeAllProduct,
}) => {
  return (
    <AlertDialog
      motionPreset="scale"
      isOpen={isOpen}
      isCentered
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      closeOnOverlayClick={false}
    >
      <AlertDialogOverlay backdropFilter={'blur(15px)'}>
        <AlertDialogContent>
          <AlertDialogCloseButton size={'sm'} />
          <AlertDialogHeader fontSize="md" fontWeight="semibold">
            Remove{' '}
            <span style={{ fontWeight: 'bold' }}>{cartItem?.drinkName}</span>{' '}
            from cart?
          </AlertDialogHeader>

          <AlertDialogBody fontSize={'14px'} fontWeight={'medium'}>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button size={'xs'} ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              size={'xs'}
              onClick={() => {
                removeAllProduct(cartItem);
                onClose();
              }}
              ml={3}
            >
              Remove product
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default CartItemAlert;
