import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Typography } from '@mui/material';

import hide from 'assets/hide.png';
import show from 'assets/show.png';
import { IInputProps } from 'interfaces/interfaces';
import { EyeButton, StyledInput, StyledLabel } from 'components/Input/styles';

const Input = ({
  placeholder,
  type,
  label,
  name,
  changeHandler,
  value,
  disabled,
  errorMessage,
}: IInputProps) => {
  const [passwordShown, setPasswordShown] = useState(true);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const { register } = useFormContext();
  return (
    <>
      <StyledLabel>
        {label.toUpperCase()}
        <StyledInput
          {...register(name)}
          type={passwordShown ? type : 'text'}
          placeholder={placeholder}
          autoComplete="true"
          onChange={changeHandler}
          value={value}
          disabled={disabled}
        />
        {type === 'password' && (
          <EyeButton type="button" onClick={togglePassword}>
            <img src={passwordShown ? hide : show} alt="hide" />
          </EyeButton>
        )}
      </StyledLabel>
      {errorMessage && (
        <Typography variant="overline">{errorMessage}</Typography>
      )}
    </>
  );
};

export default Input;
