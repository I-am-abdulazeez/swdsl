import { Accordion, AccordionItem, AccordionPanel } from "@chakra-ui/react";
import { DrinkCategory } from "@data/index";

import NavAccordionButton from "../NavAccordionButton";
import NavCategoryList from "../NavCategoryList";

const NavAccordion: React.FC = () => {
  return (
    <Accordion allowToggle>
      {DrinkCategory.map((cat, idx) => (
        <AccordionItem _focus={{ boxShadow: "none" }} key={idx}>
          <NavAccordionButton>{cat}</NavAccordionButton>
          <AccordionPanel>
            <NavCategoryList category={cat} />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default NavAccordion;
