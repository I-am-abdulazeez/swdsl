import { Box, HStack, List, ListItem } from '@chakra-ui/react';
import { SelectableListProps } from '@interfaces/index';
import { useEffect } from 'react';

const SelectableList: React.FC<SelectableListProps> = ({
  handleItemClick,
  selectedItem,
  product,
}) => {
  const ShowTypes = () => {
    if (product?.category === 'Whiskey') {
      return (
        <HStack>
          <ListItem
            bg={selectedItem === 1 ? 'primary.50' : 'gray.200'}
            color={selectedItem === 1 ? 'primary' : 'gray.700'}
            fontWeight={'semibold'}
            border={
              selectedItem === 1 ? '1px solid #d77974' : '1px solid  #e2e2e2'
            }
            cursor="pointer"
            p={3}
            onClick={() => handleItemClick(1)}
            borderRadius={'6px'}
          >
            3 packs
          </ListItem>
          <ListItem
            bg={selectedItem === 2 ? 'primary.50' : 'gray.200'}
            color={selectedItem === 2 ? 'primary' : 'gray.700'}
            fontWeight={'semibold'}
            border={
              selectedItem === 2 ? '1px solid #d77974' : '1px solid  #e2e2e2'
            }
            cursor="pointer"
            p={3}
            onClick={() => handleItemClick(2)}
            borderRadius={'6px'}
          >
            4 packs
          </ListItem>
          <ListItem
            bg={selectedItem === 3 ? 'primary.50' : 'gray.200'}
            color={selectedItem === 3 ? 'primary' : 'gray.700'}
            fontWeight={'semibold'}
            border={
              selectedItem === 3 ? '1px solid #d77974' : '1px solid  #e2e2e2'
            }
            borderRadius={'6px'}
            cursor="pointer"
            p={3}
            onClick={() => handleItemClick(3)}
          >
            6 packs
          </ListItem>
          <ListItem
            bg={selectedItem === 4 ? 'primary.50' : 'gray.200'}
            color={selectedItem === 4 ? 'primary' : 'gray.700'}
            fontWeight={'semibold'}
            border={
              selectedItem === 4 ? '1px solid #d77974' : '1px solid  #e2e2e2'
            }
            cursor="pointer"
            p={3}
            onClick={() => handleItemClick(4)}
            borderRadius={'6px'}
          >
            12 packs
          </ListItem>
        </HStack>
      );
    } else if (product?.category === 'Juice')
      return (
        <HStack>
          <ListItem
            bg={selectedItem === 1 ? 'primary.50' : 'gray.200'}
            color={selectedItem === 1 ? 'primary' : 'gray.700'}
            fontWeight={'semibold'}
            border={
              selectedItem === 1 ? '1px solid #d77974' : '1px solid  #e2e2e2'
            }
            cursor="pointer"
            p={3}
            onClick={() => handleItemClick(1)}
            borderRadius={'6px'}
          >
            10 packs
          </ListItem>
          <ListItem
            bg={selectedItem === 2 ? 'primary.50' : 'gray.200'}
            color={selectedItem === 2 ? 'primary' : 'gray.700'}
            fontWeight={'semibold'}
            border={
              selectedItem === 2 ? '1px solid #d77974' : '1px solid  #e2e2e2'
            }
            cursor="pointer"
            onClick={() => handleItemClick(2)}
            p={3}
            borderRadius={'6px'}
          >
            12 Packs
          </ListItem>
        </HStack>
      );
    else
      return (
        <HStack>
          <ListItem
            bg={selectedItem === 1 ? 'primary.50' : 'gray.200'}
            color={selectedItem === 1 ? 'primary' : 'gray.700'}
            fontWeight={'semibold'}
            border={
              selectedItem === 1 ? '1px solid #d77974' : '1px solid  #e2e2e2'
            }
            cursor="pointer"
            onClick={() => handleItemClick(1)}
            p={3}
            borderRadius={'6px'}
          >
            6 Packs
          </ListItem>
          <ListItem
            bg={selectedItem === 2 ? 'primary.50' : 'gray.200'}
            color={selectedItem === 2 ? 'primary' : 'gray.700'}
            fontWeight={'semibold'}
            border={
              selectedItem === 2 ? '1px solid #d77974' : '1px solid  #e2e2e2'
            }
            cursor="pointer"
            onClick={() => handleItemClick(2)}
            p={3}
            borderRadius={'6px'}
          >
            12 Packs
          </ListItem>
        </HStack>
      );
  };

  return (
    <List spacing={3} my={10}>
      <HStack>
        <ListItem
          bg={selectedItem === 0 ? 'primary.50' : 'gray.200'}
          color={selectedItem === 0 ? 'primary' : 'gray.700'}
          fontWeight={'semibold'}
          border={
            selectedItem === 0 ? '1px solid #d77974' : '1px solid  #e2e2e2'
          }
          cursor="pointer"
          p={3}
          onClick={() => handleItemClick(0)}
          borderRadius={'6px'}
        >
          1 bottle
        </ListItem>
        <ShowTypes />
      </HStack>
    </List>
  );
};

export default SelectableList;
