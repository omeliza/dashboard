import { TableRow, styled } from '@mui/material';

import { grey2 } from 'constants/colors';

export const StyledTableRow = styled(TableRow)`
  > th:first-child {
    padding-left: 30px;
  }
  > th:not(:first-child) {
    padding-left: 0;
  }
  p {
    line-height: 18px;
    letter-spacing: 0.2px;
    color: ${grey2};
    font-weight: 700;
  }
`;
