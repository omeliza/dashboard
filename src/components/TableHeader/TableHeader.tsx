import { TableHead, TableCell, Typography } from '@mui/material';

import { StyledTableRow } from 'components/TableHeader/styles';
import TableTooltip from 'components/TableTooltip/TableTooltip';
import { ITableData } from 'interfaces/interfaces';

const TableHeader = ({
  columns,
  openModal,
  buttonText,
}: {
  columns: ITableData[];
  openModal: () => void;
  buttonText: string;
}) => (
  <TableHead>
    <TableTooltip buttonText={buttonText} openModal={openModal} />
    <StyledTableRow>
      {columns.map((column) => (
        <TableCell
          sx={{
            minWidth: column.minWidth,
          }}
        >
          <Typography>{column.label}</Typography>
        </TableCell>
      ))}
    </StyledTableRow>
  </TableHead>
);

export default TableHeader;
