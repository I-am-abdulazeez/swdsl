import type { PropsWithChildren } from 'react';
import { Text } from '@chakra-ui/react';

const FormErrorText: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Text fontSize={'xs'} mt={1} color={'red.500'}>
      {children}
    </Text>
  );
};

export default FormErrorText;
