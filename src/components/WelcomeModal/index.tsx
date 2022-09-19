import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Heading,
  Center,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ChakraNextImage } from '@components/ChakraNextImage';

const WelcomeModal: React.FC = () => {
  const { isOpen, onClose } = useDisclosure({
    defaultIsOpen: true,
  });
  const isCenteredModal = useBreakpointValue({ base: true, sm: false });

  return (
    <>
      <Modal
        isOpen={isOpen}
        isCentered={isCenteredModal}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay backdropFilter={'blur(15px)'} />
        <ModalContent>
          <ModalHeader fontSize={'18px'}>Restricted Area!</ModalHeader>
          <ModalBody>
            <Center w={'100%'}>
              <ChakraNextImage
                width={'100px'}
                height={'100px'}
                src="/svgs/swdsl-logo.svg"
                alt="shayo-logo"
              />
            </Center>
            This website requires you to be 18 years or older.
            <Heading size={'sm'} mt={4}>
              Are you over 18?
            </Heading>
          </ModalBody>

          <ModalFooter>
            <Button
              width={'full'}
              size={'sm'}
              colorScheme="success"
              mr={3}
              onClick={onClose}
            >
              Yes I am
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WelcomeModal;
