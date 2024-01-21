import { styled } from '@mui/material';

import { blue, white } from 'constants/colors';

export const MyButton = styled('button')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '48px',
  borderRadius: '8px',
  color: white,
  backgroundColor: blue,
  boxShadow: '0px 4px 12px rgba(55, 81, 255, 0.24)',
  border: `2px solid ${blue}`,
  transition: 'background-color 0.3s ease-in-out',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.2px',
  '&:hover:enabled': {
    backgroundColor: '#3752ffb7',
    boxShadow: 'none',
    transition: 'background-color 0.3s ease-in-out',
  },
  '&:focus:enabled': {
    backgroundColor: 'transparent',
    color: blue,
    transition: 'background-color 0.3s ease-in-out',
  },
  '&:disabled': {
    backgroundColor: '#3752ff42',
    border: '2px solid #3752ff59',
    boxShadow: 'none',
    cursor: 'auto',
  },
});
