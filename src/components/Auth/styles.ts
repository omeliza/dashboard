import { styled } from '@mui/material';

import { bg, grey2, grey5, white, white2 } from 'constants/colors';

export const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
  backgroundColor: bg,
});

export const Block = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px 32px 40px 32px',
  width: '380px',
  maxHeight: '85vh',
  border: `1px solid ${white2}`,
  borderRadius: '8px',
  backgroundColor: white,
  overflowY: 'visible',
  overflowX: 'hidden',
  scrollbarGutter: 'stable both-edges',
  '&::-webkit-scrollbar': {
    width: '10px',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '50px',
    backgroundColor: grey5,
  },
  '> h1': {
    marginBottom: '12px',
  },
  '> h1 + p': {
    textAlign: 'center',
    color: grey2,
  },
});

export const AuthForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginTop: '48px',
  width: '100%',
  '> button[type="submit"]': {
    marginTop: '14px',
  },
  '+ p': {
    marginTop: '24px',
    textAlign: 'right',
  },
});

export const AuthBottomTitle = styled('h5')({
  marginTop: '24px',
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 400,
  textAlign: 'right',
});

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
