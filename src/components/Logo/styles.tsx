import { Typography, TypographyProps, styled } from '@mui/material';

import { grey } from 'constants/colors';

export const Title = styled((props: TypographyProps) => (
  <Typography variant="h2" component="span" {...props} />
))({
  color: grey,
});

export const Wrapper = styled('div')<{ size: 'small' | 'medium' }>(
  ({ size }) => ({
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
    margin: '30px 0 20px',
    justifyContent: 'center',
    flexDirection: size === 'small' ? 'row' : 'column',
  }),
);

export const StyledImg = styled('img')<{ size: 'small' | 'medium' }>(
  ({ size }) => ({
    width: size === 'small' ? '32px' : '54px',
    height: size === 'small' ? '32px' : '54px',
    marginLeft: size === 'small' ? 0 : 'auto',
    marginRight: size === 'small' ? '10px' : 'auto',
  }),
);
