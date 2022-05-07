import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";

import { RiMenuLine } from "react-icons/ri";

import NavAccordion from "../NavAccordion";

const NavDrawer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerSize = useBreakpointValue({ base: "full", md: "md" });

  // const items = products?.reduce((prev: any, current) => {
  //   if (!(current?.data()?.category in prev)) {
  //     prev[current?.data()?.category] = [];
  //   }
  //   prev[current?.data()?.category].push({
  //     drinkName: current?.data()?.drinkName,
  //     id: current.id,
  //   });
  //   return prev;
  // }, {});

  return (
    <>
      <IconButton
        aria-label="Options"
        icon={<RiMenuLine />}
        variant="outline"
        size="sm"
        onClick={onOpen}
      >
        Open
      </IconButton>
      <Drawer
        closeOnOverlayClick={false}
        placement="left"
        onClose={onClose}
        size={drawerSize}
        isOpen={isOpen}
      >
        <DrawerOverlay backdropFilter={"saturate(50%) blur(1px)"} />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            color={"primary.500"}
            fontSize={"md"}
          >
            All category
          </DrawerHeader>
          <DrawerCloseButton
            _focus={{
              boxShadow: "none",
            }}
            size={"sm"}
          />
          <DrawerBody>
            <NavAccordion />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
