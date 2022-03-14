import { Accordion, AccordionItem, AccordionPanel } from "@chakra-ui/react";

import NavAccordionButton from "../NavAccordionButton";
import NavCategoryList from "../NavCategoryList";

const NavAccordion: React.FC = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <NavAccordionButton>Non Alcoholic</NavAccordionButton>
        <AccordionPanel>
          <NavCategoryList category="Non alcoholic" />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <NavAccordionButton>Whiskey</NavAccordionButton>
        <AccordionPanel>
          <NavCategoryList category="Whiskey" />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <NavAccordionButton>Cognac</NavAccordionButton>
        <AccordionPanel>
          <NavCategoryList category="Cognac" />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <NavAccordionButton>Red wine</NavAccordionButton>
        <AccordionPanel>
          <NavCategoryList category="Red wine" />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <NavAccordionButton>Rum</NavAccordionButton>
        <AccordionPanel>
          <NavCategoryList category="Rum" />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <NavAccordionButton>Irish Cream</NavAccordionButton>
        <AccordionPanel>
          <NavCategoryList category="Irish cream" />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <NavAccordionButton>White Wine</NavAccordionButton>
        <AccordionPanel>
          <NavCategoryList category="White wine" />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <NavAccordionButton>Gin</NavAccordionButton>
        <AccordionPanel>
          <NavCategoryList category="Gin" />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <NavAccordionButton>Sparkling Wine</NavAccordionButton>
        <AccordionPanel>
          <NavCategoryList category="Sparkling wine" />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <NavAccordionButton>Brandy</NavAccordionButton>
        <AccordionPanel>
          <NavCategoryList category="Brandy" />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <NavAccordionButton>Juice</NavAccordionButton>
        <AccordionPanel>
          <NavCategoryList category="Juice" />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <NavAccordionButton>Tequila</NavAccordionButton>
        <AccordionPanel>
          <NavCategoryList category="Tequila" />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <NavAccordionButton>Vodka</NavAccordionButton>
        <AccordionPanel>
          <NavCategoryList category="Vodka" />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <NavAccordionButton>Others</NavAccordionButton>
        <AccordionPanel>
          <NavCategoryList category="Others" />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default NavAccordion;
