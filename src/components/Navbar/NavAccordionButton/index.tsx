import { AccordionButton, Box, AccordionIcon } from '@chakra-ui/react';

import { NavAccordionButtonProps } from '@interfaces/index';

const NavAccordionButton: React.FC<NavAccordionButtonProps> = ({
  category,
}) => {
  return (
    <h2>
      <AccordionButton fontSize={'sm'} fontWeight={'bold'}>
        <Box flex="1" textAlign="left">
          {category}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
  );
};

export default NavAccordionButton;
