import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import ReactModal from 'react-modal';
import { joiResolver } from '@hookform/resolvers/joi';
import jwtDecode from 'jwt-decode';
import { Typography } from '@mui/material';

import Input from 'components/Input/Input';
import Logo from 'components/Logo/Logo';
import { SignIn } from 'interfaces/interfaces';
import { signIn } from 'services/auth.service';
import { loginSchema } from 'constants/validationSchemas';
import CustomButton from 'components/CustomButton/CustomButton';
import { useAppDispatch } from 'redux/hooks';
import { authenticated, setUser } from 'redux/slices/auth/auth.slice';
import { AuthForm, Block, customStyles, Wrapper } from 'components/Auth/styles';
import { PATHS } from 'constants/paths';

const Login = () => {
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const methods = useForm<SignIn>({
    mode: 'onBlur',
    resolver: joiResolver(loginSchema),
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
  const onLoginSubmit = async (data: SignIn) => {
    try {
      localStorage.removeItem('token');
      const response = await signIn(data.email, data.password);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        dispatch(setUser(jwtDecode(response.data.token)));
        dispatch(authenticated());
        reset();
        navigate('/');
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
        <Typography variant="h1">Log In to Dashboard Kit</Typography>
        <p>Enter your email and password</p>
        <ReactModal
          style={customStyles}
          isOpen={isOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
        >
          {message}
        </ReactModal>
        <FormProvider {...methods}>
          <AuthForm onSubmit={handleSubmit(onLoginSubmit)}>
            <Input
              placeholder="Email address"
              type="email"
              label="email"
              name="email"
              errorMessage={errors.email?.message}
            />
            <Input
              placeholder="Password"
              type="password"
              label="password"
              name="password"
              errorMessage={errors.password?.message}
            />
            <Link to={PATHS.forgot} style={{ textAlign: 'right' }}>
              <Typography variant="subtitle2" component="span">
                Forgot Password?
              </Typography>
            </Link>
            <CustomButton type="submit">Log In</CustomButton>
          </AuthForm>
        </FormProvider>
        <Typography>
          Don&apos;t have an account?&ensp;
          <Link to={PATHS.register}>
            <Typography variant="subtitle2" component="span">
              Sign up
            </Typography>
          </Link>
        </Typography>
      </Block>
    </Wrapper>
  );
};

export default Login;
