import {
  HStack,
  IconButton,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
} from '@chakra-ui/react';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { UserPasswordUpdate } from 'src/types';
import { customToast, inputFocus } from '@utils/index';
import { useAuthStore } from '@store/hooks/useAuthStore';

const PasswordUpdate: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm<UserPasswordUpdate>();
  // const isLoading = useAuthStore((state) => state.isLoadingPassword);
  // const updatePassword = useAuthStore((state) => state.updatePassword);

  const updateUserPassword: SubmitHandler<UserPasswordUpdate> = ({
    newPassword,
    confirmNewPassword,
  }) => {
    if (newPassword === confirmNewPassword) {
      // updatePassword(newPassword);
    } else {
      customToast({
        status: 'error',
        title: 'Error',
        description: 'Password does not match!',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(updateUserPassword)}>
      <Box my={6}>
        <Text>Password Details</Text>
        <HStack mt={4}>
          <Text>Show all password</Text>
          <IconButton
            size="xs"
            aria-label="password"
            onClick={() => setShowPassword((prev) => !prev)}
            icon={showPassword ? <RiEyeLine /> : <RiEyeOffLine />}
          />
        </HStack>
      </Box>

      <Stack
        direction={{ base: 'column', sm: 'column', md: 'row' }}
        spacing={7}
        mb={8}
      >
        <FormControl>
          <FormLabel>New Password</FormLabel>
          <Input
            _focus={inputFocus}
            type={showPassword ? 'text' : 'password'}
            placeholder="********"
            {...register('newPassword', {
              required: true,
              minLength: 6,
            })}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Confirm New Password</FormLabel>
          <Input
            _focus={inputFocus}
            type={showPassword ? 'text' : 'password'}
            placeholder="********"
            {...register('confirmNewPassword', {
              required: true,
              minLength: 6,
            })}
          />
        </FormControl>
      </Stack>
      <Button size={'sm'} colorScheme="success" type="submit">
        Update password info
      </Button>
    </form>
  );
};

export default PasswordUpdate;
