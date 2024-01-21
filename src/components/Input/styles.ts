import { styled } from '@mui/material';

import { grey2, grey3, white4, white5 } from 'constants/colors';

export const StyledLabel = styled('label')({
  fontSize: '12px',
  lineHeight: '15.06px',
  fontWeight: 700,
  color: grey2,
  position: 'relative',
  letterSpacing: '0.3px',
  left: 0,
  marginTop: '24px',
  '&:first-child': {
    marginTop: 0,
  },
});

export const StyledInput = styled('input')({
  fontFamily: 'Mulish',
  marginTop: '6px',
  marginBottom: '4px',
  width: '100%',
  height: '42px',
  backgroundColor: white4,
  border: `1px solid ${white5}`,
  borderRadius: '8px',
  padding: '11px 16px',
  '&::placeholder': {
    color: grey3,
    fontFamily: 'Mulish',
    fontSize: '14px',
    letterSpacing: '0.3px',
  },
});

export const EyeButton = styled('button')({
  display: 'block',
  backgroundColor: 'unset',
  border: 'none',
  position: 'absolute',
  right: '18px',
  top: '35px',
});
