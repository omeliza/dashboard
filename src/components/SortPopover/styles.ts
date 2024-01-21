import { ButtonGroup, IconButton, styled, Typography } from '@mui/material';

import { grey3 } from 'constants/colors';

export const StyledPopoverTitle = styled(Typography)({
  fontWeight: 600,
  textAlign: 'center',
  paddingBottom: 1,
});

export const StyledButtonGroup = styled(ButtonGroup)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingBottom: 1,
});

export const StyledIconButton = styled(IconButton)`
  > p {
    padding-left: 8px;
    font-weight: 600;
    letter-spacing: 0.2px;
    color: ${grey3};
  }
`;
