import { Box, styled } from '@mui/material';

import { black, grey2, white2 } from 'constants/colors';

export const SideCardWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  position: relative;
  top: -80px;
`;

export const SideCard = styled(Box)({
  textAlign: 'center',
  width: '342px',
  height: '108.2px',
  padding: '24px 32px 32px 32px',
  borderLeft: `1px solid ${white2}`,
  '& > p:first-of-type': {
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '22px',
    textAlign: 'center',
    letterSpacing: '0.3px',
    color: grey2,
    marginBottom: '6px',
  },
  '& > :last-of-type': {
    textAlign: 'center',
    letterSpacing: '0.3px',
    color: black,
  },
});
