import { Box, Typography } from '@mui/material';

import CustomBox from 'pages/Tickets/CustomBox/CustomBox';
import {
  PositionedRow,
  StyledCell,
  StyledAvatar,
  DetailsWrapper,
  NameDateWrapper,
  PriorityWrapper,
} from 'pages/Tickets/styles';
import PopoverPopup from 'components/PopoverPopup/PopoverPopup';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import {
  deleteTicket,
  setCurrentTicket,
  setCurrentTicketId,
} from 'redux/slices/tickets/tickets.slice';
import { toggleTicketModal } from 'redux/slices/modal/modal.slice';
import { IColumns } from 'interfaces/interfaces';
import { ITicket } from 'redux/slices/tickets/types';

const CellContent = ({
  row,
  column,
  edit,
  deleteLine,
}: {
  row: ITicket;
  column: IColumns<ITicket>;
  edit: (id: number | undefined) => void;
  deleteLine: (id: number | undefined) => void;
}) => {
  switch (column.id) {
    case 'details':
      return (
        <Box sx={{ display: 'flex' }}>
          {row.src && <StyledAvatar src={row.src} alt="avatar" />}
          <DetailsWrapper>
            <Typography variant="body2">{row.details}</Typography>
            <Typography variant="caption">Updated {row.updated}</Typography>
          </DetailsWrapper>
        </Box>
      );
    case 'name':
      return (
        <NameDateWrapper>
          <Typography variant="body2">{row.name}</Typography>
          <Typography variant="caption">{row.customerDate}</Typography>
        </NameDateWrapper>
      );
    case 'date':
      return (
        <NameDateWrapper>
          <Typography variant="body2">{row.date}</Typography>
          <Typography variant="caption">{row.time}</Typography>
        </NameDateWrapper>
      );
    case 'priority':
      return (
        <PriorityWrapper>
          <CustomBox>{row.priority}</CustomBox>
          <PopoverPopup
            edit={() => edit(row.id)}
            deleteLine={() => deleteLine(row.id)}
          />
        </PriorityWrapper>
      );
    default:
      return <Typography variant="body2">{row[column.id]}</Typography>;
  }
};

const ColumnRow = ({
  row,
  columns,
}: {
  row: ITicket;
  columns: IColumns<ITicket>[];
}) => {
  const dispatch = useAppDispatch();
  const currentId = useAppSelector((state) => state.tickets.currentTicketId);

  const ticket = useAppSelector((state) =>
    currentId ? state.tickets.list.find((t) => t.id === currentId) : null,
  );

  const edit = (id: number | undefined) => {
    dispatch(setCurrentTicketId(id));
    if (ticket && typeof ticket !== undefined) {
      dispatch(
        setCurrentTicket({
          id: ticket.id,
          name: ticket.name,
          tickerDetails: ticket.details,
          priority: ticket.priority,
        }),
      );
      dispatch(setCurrentTicketId(ticket.id));
      dispatch(toggleTicketModal());
    }
  };

  const deleteLine = (id: number | undefined) => {
    dispatch(setCurrentTicketId(id));
    if (ticket && typeof ticket !== undefined && currentId) {
      dispatch(deleteTicket(currentId));
    }
  };

  return (
    <PositionedRow hover tabIndex={-1} key={row.id}>
      {columns.map((column) => (
        <StyledCell key={column.id} component="td">
          <CellContent
            column={column}
            row={row}
            edit={edit}
            deleteLine={deleteLine}
          />
        </StyledCell>
      ))}
    </PositionedRow>
  );
};

export default ColumnRow;
