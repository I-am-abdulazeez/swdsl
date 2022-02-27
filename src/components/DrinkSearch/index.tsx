import { Box, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { shadowSm } from "@utils/index";
import { RiSearch2Line } from "react-icons/ri";

const DrinkSearch: React.FC = (): JSX.Element => {
  return (
    <Box>
      <InputGroup size="lg">
        <InputLeftElement pointerEvents="none">
          <RiSearch2Line color="#CBD5E0" size="20px" />
        </InputLeftElement>
        <Input
          type="text"
          _focus={{
            boxShadow: shadowSm,
          }}
          fontSize="14px"
          placeholder="Search for drinks"
        />
      </InputGroup>
    </Box>
  );
};

export default DrinkSearch;
