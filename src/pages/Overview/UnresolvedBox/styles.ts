import { Box, styled } from '@mui/material';

import { white, white2, grey2 } from 'constants/colors';

export const Wrapper = styled(Box)({
  gridArea: 'un',
  backgroundColor: `${white}`,
  border: `1px solid ${white2}`,
  borderRadius: '8px',
  paddingBottom: '26px',
  paddingTop: '32px',
  maxHeight: '345px',
});

export const RepeatedSection = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '58px',
  paddingLeft: '32px',
  paddingRight: '32px',
  '& > :last-of-type': {
    color: `${grey2}`,
  },
});

export const TitleWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '8px',
  paddingLeft: '32px',
  paddingRight: '32px',
});
