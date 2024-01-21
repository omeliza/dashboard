import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import ReactModal from 'react-modal';
import { joiResolver } from '@hookform/resolvers/joi';
import { Typography } from '@mui/material';

import { signUp } from 'services/auth.service';
import Logo from 'components/Logo/Logo';
import Input from 'components/Input/Input';
import { registerSchema } from 'constants/validationSchemas';
import { IAuthFormInputs, SignUp } from 'interfaces/interfaces';
import CustomButton from 'components/CustomButton/CustomButton';
import { AuthForm, Block, customStyles, Wrapper } from 'components/Auth/styles';
import { PATHS } from 'constants/paths';

const Register = () => {
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const methods = useForm<IAuthFormInputs>({
    mode: 'onBlur',
    resolver: joiResolver(registerSchema),
  });
  const {
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const onRegisterSubmit = async (data: SignUp) => {
    try {
      const response = await signUp(
        data.email,
        data.firstName,
        data.lastName,
        data.password,
      );
      if (response.status === 201) {
        reset();
        navigate(PATHS.login);
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setMessage(error?.response?.data.message);
        openModal();
      }
    }
  };
  return (
    <Wrapper>
      <Block>
        <Logo size="medium" />
        <Typography variant="h1">Sign Up</Typography>
        <p>Create a new account</p>
        <ReactModal
          style={customStyles}
          isOpen={isOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
        >
          {message}
        </ReactModal>
        <FormProvider {...methods}>
          <AuthForm onSubmit={handleSubmit(onRegisterSubmit)}>
            <Input
              placeholder="Email address"
              type="email"
              label="email"
              name="email"
              errorMessage={errors.email?.message}
            />
            <Input
              placeholder="First name"
              type="text"
              label="first name"
              name="firstName"
              errorMessage={errors.firstName?.message}
            />
            <Input
              placeholder="Last name"
              type="text"
              label="last name"
              name="lastName"
              errorMessage={errors.lastName?.message}
            />
            <Input
              placeholder="Password"
              type="password"
              label="password"
              name="password"
              errorMessage={errors.password?.message}
            />
            <Input
              placeholder="Password"
              type="password"
              label="confirm password"
              name="confirmPassword"
              errorMessage={errors.confirmPassword?.message}
            />
            <Link to={PATHS.forgot} style={{ textAlign: 'right' }}>
              <Typography variant="subtitle2" component="span">
                Forgot Password?
              </Typography>
            </Link>
            <CustomButton type="submit">Register</CustomButton>
          </AuthForm>
        </FormProvider>
      </Block>
    </Wrapper>
  );
};

export default Register;
