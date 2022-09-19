import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import NextLink from 'next/link';
import { RiMailOpenLine } from 'react-icons/ri';
import {
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  chakra,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Helmet from '@components/Helmet';
import LogoLink from '@components/LogoLink';

import { inputFocus } from '@utils/index';
import { useAuthStore } from '@store/hooks/useAuthStore';
import { UserDetails } from 'src/types';

const ForgotPassword: React.FC = () => {
  const sendPasswordEmailReset = useAuthStore((state) => state.forgotPassword);
  const isLoading = useAuthStore((state) => state.isLoading);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDetails>();

  const passwordResetSubmit: SubmitHandler<UserDetails> = ({ email }) => {
    sendPasswordEmailReset(email);
  };

  return (
    <Flex justify={'center'} direction={'column'} align={'center'} h={'100vh'}>
      <Helmet title="Forgot password | ShayoWithDSL" />
      <Box mb={2}>
        <LogoLink width="200px" height="100px" />
      </Box>
      <Box textAlign={'center'}>
        <Heading fontSize={'xl'}>We are humans, we all forget things.</Heading>
        <Text mt={2} fontSize={'sm'}>
          Please enter the e-mail address used for signup.
        </Text>
      </Box>

      <form onSubmit={handleSubmit(passwordResetSubmit)}>
        <FormControl w={{ base: '20rem', md: '25rem' }} my={7} id="email">
          <InputGroup>
            <Input
              _focus={inputFocus}
              type="email"
              {...register('email', {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              placeholder="you@example.com"
            />
            <InputRightElement>
              <RiMailOpenLine size={'12.5px'} />
            </InputRightElement>
          </InputGroup>
          {errors?.email && errors.email?.type === 'required' && (
            <Text fontSize={'xs'} mt={1} color={'red.500'}>
              Email is required!
            </Text>
          )}
        </FormControl>
        <Button
          isLoading={isLoading}
          width={'full'}
          colorScheme={'primary'}
          type="submit"
        >
          Send Reset Email
        </Button>
      </form>
      <NextLink href={'/auth/login'}>
        <chakra.a
          cursor="pointer"
          fontSize={'sm'}
          mt={4}
          textDecor="underline"
          color="#501815"
        >
          {' '}
          Go back to login
        </chakra.a>
      </NextLink>
    </Flex>
  );
};

export default ForgotPassword;
