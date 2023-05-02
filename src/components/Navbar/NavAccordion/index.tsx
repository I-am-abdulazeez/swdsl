import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { DrinkCategory } from '@data/index';

import NavAccordionButton from '../NavAccordionButton';
import NavCategoryList from '../NavCategoryList';

const NavAccordion: React.FC = () => {
  return (
    <>
      {DrinkCategory.map((category, idx) => (
        <Box
          borderBottom={'1px solid #f2f2f2'}
          textAlign={'left'}
          key={idx}
          p={2}
        >
          <NextLink href={`/category/${category}`} passHref>
            <Button
              justifyContent={'left'}
              width={'full'}
              variant={'ghost'}
              fontWeight={'medium'}
            >
              {category}
            </Button>
          </NextLink>
        </Box>
      ))}
    </>

    // <Accordion allowToggle>
    //   {DrinkCategory.map((category, idx) => (
    //     <AccordionItem key={idx}>
    //       <NavAccordionButton category={category} />
    //       <AccordionPanel>
    //         <NavCategoryList category={category} />
    //       </AccordionPanel>
    //     </AccordionItem>
    //   ))}
    // </Accordion>
  );
};

export default NavAccordion;
