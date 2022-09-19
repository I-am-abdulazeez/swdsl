import { Accordion, AccordionItem, AccordionPanel } from '@chakra-ui/react';
import { DrinkCategory } from '@data/index';

import NavAccordionButton from '../NavAccordionButton';
import NavCategoryList from '../NavCategoryList';

const NavAccordion: React.FC = () => {
  return (
    <Accordion allowToggle>
      {DrinkCategory.map((category, idx) => (
        <AccordionItem key={idx}>
          <NavAccordionButton category={category} />
          <AccordionPanel>
            <NavCategoryList category={category} />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default NavAccordion;
