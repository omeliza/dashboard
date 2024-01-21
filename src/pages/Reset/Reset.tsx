import { useForm, FormProvider } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Typography } from '@mui/material';

import Input from 'components/Input/Input';
import Logo from 'components/Logo/Logo';
import { onResetSubmit } from 'services/auth.service';
import { resetSchema } from 'constants/validationSchemas';
import { IReset } from 'interfaces/interfaces';
import CustomButton from 'components/CustomButton/CustomButton';
import { AuthForm, Block, Wrapper } from 'components/Auth/styles';

const Reset = () => {
  const methods = useForm<IReset>({
    mode: 'onBlur',
    resolver: joiResolver(resetSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <Wrapper>
      <Block>
        <Logo size="medium" />
        <Typography variant="h1">Reset Password</Typography>
        <p>Enter new password</p>
        <FormProvider {...methods}>
          <AuthForm onSubmit={handleSubmit(onResetSubmit)}>
            <Input
              name="password"
              placeholder="Password"
              type="password"
              label="password"
              errorMessage={errors.password?.message}
            />
            <Input
              name="confirmPassword"
              placeholder="Password"
              type="password"
              label="confirm password"
              errorMessage={errors.confirmPassword?.message}
            />
            <CustomButton type="submit">Send</CustomButton>
          </AuthForm>
        </FormProvider>
      </Block>
    </Wrapper>
  );
};

export default Reset;
