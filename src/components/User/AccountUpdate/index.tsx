import {
  Stack,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { RiMailOpenLine, RiUserLine } from 'react-icons/ri';

import { SubmitHandler, useForm } from 'react-hook-form';

import { useAuthStore } from '@store/hooks/useAuthStore';
import { inputFocus } from '@utils/index';

const AccountUpdate = () => {
  const user = useAuthStore((state) => state.user);
  const updateDisplayName = useAuthStore((state) => state.updateDisplayName);
  const isLoading = useAuthStore((state) => state.isLoading);
  const { register, handleSubmit } = useForm<{ displayName: string }>();

  const updateUserAccount: SubmitHandler<{ displayName: string }> = ({
    displayName,
  }) => {
    updateDisplayName(displayName);
  };

  return (
    <form onSubmit={handleSubmit(updateUserAccount)}>
      <Stack
        direction={{ base: 'column', sm: 'column', md: 'row' }}
        spacing={7}
        mt={7}
        mb={8}
      >
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <InputGroup>
            <Input disabled type="email" defaultValue={user?.email || ''} />
            <InputRightElement>
              <RiMailOpenLine size={'12.5px'} />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Display Name</FormLabel>
          <InputGroup>
            <Input
              _focus={inputFocus}
              type="text"
              {...register('displayName', { required: true })}
              defaultValue={user?.displayName || ''}
            />
            <InputRightElement>
              <RiUserLine size={'12.5px'} />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Stack>
      <Button
        isLoading={isLoading}
        colorScheme={'error'}
        size={'sm'}
        type="submit"
      >
        Update user info
      </Button>
    </form>
  );
};

export default AccountUpdate;
