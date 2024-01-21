import { AppBar, styled } from '@mui/material';

import { bgLight, black } from 'constants/colors';

export const StyledAppBar = styled(AppBar)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gridArea: 'h',
  position: 'static',
  bgcolor: 'transparent',
  height: '93px',
  paddingLeft: '30px',
  paddingRight: '33px',
  boxShadow: 'none',
  backgroundColor: `${bgLight}`,
  p: {
    fontWeight: 600,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: '14px',
    color: black,
  },
  '> p': {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '30px',
    letterSpacing: '0.3px',
  },
  header: {
    display: 'flex',
  },
});
