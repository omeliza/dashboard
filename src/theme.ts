import { createTheme } from '@mui/material';

import { black, blue, red2 } from 'constants/colors';

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Mulish',
      textTransform: 'none',
      fontSize: '14px',
      lineHeight: '140%',
      fontWeight: 400,
    },
    body2: {
      fontWeight: 600,
      letterSpacing: '0.2px',
      color: black,
    },
    caption: {
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.1px',
    },
    subtitle2: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 600,
      color: blue,
    },
    h1: {
      fontSize: '24px',
      lineHeight: '120%',
      fontWeight: 700,
    },
    h2: {
      fontSize: '19px',
      lineHeight: '24px',
      fontWeight: 700,
      letterSpacing: '0.4px',
      color: black,
    },
    overline: {
      color: red2,
      '&::before': {
        content: '"⚠ "',
        display: 'inline',
      },
    },
  },
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.MuiTableRow-hover:hover': {
            backgroundColor: 'rgba(55, 81, 255, 0.04)',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          textAlign: 'left',
        },
      },
    },
  },
});
