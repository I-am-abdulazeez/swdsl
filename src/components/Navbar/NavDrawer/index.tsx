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
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";

import { RiMenuLine } from "react-icons/ri";

import { DrinkCategory } from "src/data";

const NavDrawer: React.FC = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerSize = useBreakpointValue({ base: "full", md: "xs" });

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
          <DrawerCloseButton size={"sm"} />
          <DrawerBody>
            <Accordion allowToggle>
              {DrinkCategory.map(({ drinkName, drinkNameList }, idx) => (
                <AccordionItem key={idx}>
                  <h2>
                    <AccordionButton fontSize={"sm"} fontWeight={"medium"}>
                      <Box flex="1" textAlign="left">
                        {drinkName}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel px={0} pb={4}>
                    {drinkNameList.map((list, idx) => (
                      <Flex key={idx}>
                        <Button
                          size={"sm"}
                          variant={"ghost"}
                          fontWeight={"light"}
                        >
                          {list}
                        </Button>
                      </Flex>
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
