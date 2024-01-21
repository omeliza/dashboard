import { IconButton, styled } from '@mui/material';

import { grey3 } from 'constants/colors';

export const StyledIconButton = styled(IconButton)`
  > p {
    padding-left: 8px;
    font-weight: 600;
    letter-spacing: 0.2px;
    color: ${grey3};
  }
`;
