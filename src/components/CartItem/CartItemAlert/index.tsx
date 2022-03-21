import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { CartItemAlertProps } from "@interfaces/index";

const CartItemAlert: React.FC<CartItemAlertProps> = (props) => {
  const { cartItem, isOpen, cancelRef, onClose, removeAllProduct } = props;
  return (
    <AlertDialog
      motionPreset="slideInBottom"
      isOpen={isOpen}
      isCentered
      leastDestructiveRef={cancelRef?.current}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="md" fontWeight="semibold">
            Remove{" "}
            <span style={{ fontWeight: "bold" }}>{cartItem?.drinkName}</span>{" "}
            from cart?
          </AlertDialogHeader>

          <AlertDialogBody fontSize={"14px"}>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button size={"xs"} ref={cancelRef?.current} onClick={onClose}>
              Leave
            </Button>
            <Button
              colorScheme="red"
              size={"xs"}
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
