import { TableRow, TableCell } from '@mui/material';

import FilterPopover from 'components/FilterPopover/FilterPopover';
import SortPopover from 'components/SortPopover/SortPopover';
import { AddContactBox } from 'pages/Contacts/styles';
import { PopoversWrapper } from 'pages/Tickets/styles';

const TableTooltip = ({
  buttonText,
  openModal,
}: {
  buttonText: string;
  openModal: () => void;
}) => (
  <TableRow>
    <TableCell colSpan={3} style={{ borderBottom: 'none' }}>
      <PopoversWrapper>
        <SortPopover />
        <FilterPopover />
      </PopoversWrapper>
    </TableCell>
    <TableCell style={{ borderBottom: 'none' }}>
      <AddContactBox component="button" onClick={openModal}>
        {buttonText}
      </AddContactBox>
    </TableCell>
  </TableRow>
);

export default TableTooltip;
