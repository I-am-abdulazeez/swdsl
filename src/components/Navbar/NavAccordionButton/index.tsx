import { AccordionButton, Box, AccordionIcon } from "@chakra-ui/react";

const NavAccordionButton: React.FC = ({ children }) => {
  return (
    <h2>
      <AccordionButton fontSize={"sm"} fontWeight={"medium"}>
        <Box flex="1" textAlign="left">
          {children}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
  );
};

export default NavAccordionButton;
