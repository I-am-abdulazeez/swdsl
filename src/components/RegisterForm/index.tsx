import { useState } from 'react';
import { Timestamp } from 'firebase/firestore';

import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  RiEyeLine,
  RiEyeOffLine,
  RiMailOpenLine,
  RiPhoneLine,
  RiUserLine,
} from 'react-icons/ri';

import FormErrorText from '@components/FormErrorText';

import {
  emailPattern,
  inputFocus,
  nigeriaPhoneNumberPattern,
} from '@utils/index';
import { useAuthStore } from '@store/hooks/useAuthStore';
import { IUserRegister, UserData } from 'src/types';

const RegisterForm: React.FC = () => {
  const signUpUser = useAuthStore((state) => state.signUpUser);
  const isLoading = useAuthStore((state) => state.isLoading);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>();

  const handleUserSignup: SubmitHandler<IUserRegister> = (data) => {
    const newData: UserData = {
      email: data.email,
      firstname: data.firstname,
      lastname: data.lastname,
      phonenumber: data.phonenumber,
      accept: data.accept,
      createdAt: Timestamp.fromDate(new Date()).toDate().toDateString(),
      cart: [],
      orders: [],
    };
    signUpUser(data, newData);
  };

  return (
    <form onSubmit={handleSubmit(handleUserSignup)}>
      <VStack spacing={3} width={{ base: '20em', md: '30em' }}>
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <InputGroup>
            <Input
              _focus={inputFocus}
              type="email"
              placeholder="you@example.com"
              {...register('email', {
                required: true,
                pattern: emailPattern,
              })}
            />
            <InputRightElement>
              <RiMailOpenLine size={'12.5px'} />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          width={{ base: 'inherit', md: '30em' }}
          spacing={2}
        >
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <InputGroup>
              <Input
                _focus={inputFocus}
                type="text"
                placeholder="SHIESTY"
                {...register('firstname', {
                  required: true,
                })}
              />
              <InputRightElement>
                <RiUserLine size={'12.5px'} />
              </InputRightElement>
            </InputGroup>
            {errors?.firstname && errors.firstname?.type === 'required' && (
              <FormErrorText>Field is required!</FormErrorText>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <InputGroup>
              <Input
                _focus={inputFocus}
                type="text"
                placeholder="GANG"
                {...register('lastname', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                })}
              />
              <InputRightElement>
                <RiUserLine size={'12.5px'} />
              </InputRightElement>
            </InputGroup>
            {errors?.lastname && errors.lastname?.type === 'required' && (
              <FormErrorText>Field is required!</FormErrorText>
            )}
          </FormControl>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          width={{ base: 'inherit', md: '30em' }}
          spacing={2}
        >
          <FormControl>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                _focus={inputFocus}
                type={showPassword ? 'text' : 'password'}
                placeholder="********"
                {...register('password', {
                  required: true,
                  minLength: 6,
                })}
              />
              <InputRightElement>
                <IconButton
                  size="xs"
                  variant="ghost"
                  aria-label="password"
                  onClick={() => setShowPassword((prev) => !prev)}
                  icon={showPassword ? <RiEyeLine /> : <RiEyeOffLine />}
                />
              </InputRightElement>
            </InputGroup>
            {errors?.password && errors.password?.type === 'required' && (
              <FormErrorText>Password is required.</FormErrorText>
            )}
            {errors?.password && errors.password?.type === 'minLength' && (
              <FormErrorText>Minimum of 6 characters.</FormErrorText>
            )}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="phonenumber">Phone Number</FormLabel>
            <InputGroup>
              <InputLeftAddon>+234</InputLeftAddon>
              <Input
                _focus={inputFocus}
                type="text"
                placeholder="908********"
                {...register('phonenumber', {
                  required: true,
                  maxLength: 10,
                  pattern: nigeriaPhoneNumberPattern,
                })}
              />
              <InputRightElement>
                <RiPhoneLine size={'12.5px'} />
              </InputRightElement>
            </InputGroup>
            {(errors?.phonenumber && errors.phonenumber?.type === 'pattern') ||
              (errors?.phonenumber &&
                errors.phonenumber?.type === 'required' && (
                  <FormErrorText>
                    Please, enter a valid nigeria phonenumber.
                  </FormErrorText>
                ))}
            {errors?.phonenumber &&
              errors.phonenumber?.type === 'maxLength' && (
                <FormErrorText>Maximum of 10 characters.</FormErrorText>
              )}
          </FormControl>
        </Stack>
        <FormControl>
          <Checkbox
            colorScheme="primary"
            {...register('accept', { required: true })}
          >
            I’m 18 years or older.
          </Checkbox>
          {errors?.accept && errors.accept?.type === 'required' && (
            <FormErrorText>
              Please, accept the terms and condition.
            </FormErrorText>
          )}
        </FormControl>
        <Button
          type="submit"
          isLoading={isLoading}
          colorScheme="primary"
          width={'full'}
        >
          Signup user
        </Button>
      </VStack>
    </form>
  );
};

export default RegisterForm;
