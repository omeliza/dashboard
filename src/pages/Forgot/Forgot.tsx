import { Link, useLocation } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Typography } from '@mui/material';

import Input from 'components/Input/Input';
import Logo from 'components/Logo/Logo';
import { onForgotSubmit } from 'services/auth.service';
import { forgotSchema } from 'constants/validationSchemas';
import { IForgot } from 'interfaces/interfaces';
import CustomButton from 'components/CustomButton/CustomButton';
import { AuthForm, Block, Wrapper } from 'components/Auth/styles';
import { PATHS } from 'constants/paths';

const Forgot = () => {
  const location = useLocation();
  const methods = useForm<IForgot>({
    mode: 'onBlur',
    resolver: joiResolver(forgotSchema),
  });
  const {
    formState: { errors },
    handleSubmit,
  } = methods;

  return (
    <Wrapper>
      <Block>
        <Logo size="medium" />
        <Typography variant="h1">Forgot password?</Typography>
        {location.pathname === PATHS.forgotSuccess ? (
          <p>
            Link to change your password has been sent to provided email if we
            have it inside our system
          </p>
        ) : (
          <>
            <p>Enter your email from registered account</p>
            <FormProvider {...methods}>
              <AuthForm onSubmit={handleSubmit(onForgotSubmit)}>
                <Input
                  name="email"
                  placeholder="Email address"
                  type="email"
                  label="email"
                  errorMessage={errors.email?.message}
                />
                <CustomButton type="submit">Send</CustomButton>
              </AuthForm>
            </FormProvider>
            <Typography>
              Don&apos;t have an account?&ensp;
              <Link to="/register">
                <Typography variant="subtitle2" component="span">
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </>
        )}
      </Block>
    </Wrapper>
  );
};

export default Forgot;
