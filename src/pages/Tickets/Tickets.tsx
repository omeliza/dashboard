/* eslint-disable react/destructuring-assignment */
import { ChangeEvent, useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from '@mui/material';

import ColumnRow from 'pages/Tickets/ColumnRow/ColumnRow';
import { toggleTicketModal } from 'redux/slices/modal/modal.slice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import TicketModal from 'pages/Tickets/TicketModal/TicketModal';
import { setCurrentTicket } from 'redux/slices/tickets/tickets.slice';
import { sortingFilteredTickets } from 'utils/sortingFiltered';
import { BgTickets, TableWrapper } from 'pages/Tickets/styles';
import { IColumns } from 'interfaces/interfaces';
import TableHeader from 'components/TableHeader/TableHeader';
import { ITicket } from 'redux/slices/tickets/types';

const columns: IColumns<ITicket>[] = [
  { id: 'details', label: 'Ticket Details', minWidth: 480 },
  { id: 'name', label: 'Customer name', minWidth: 248 },
  { id: 'date', label: 'Date', minWidth: 180 },
  { id: 'priority', label: 'Priority', minWidth: 180 },
];

const Tickets = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const dispatch = useAppDispatch();
  const currentId = useAppSelector((state) => state.tickets.currentTicketId);
  const searchedText = useAppSelector((state) => state.tickets.searchedText);
  const ticketOrder = useAppSelector((state) => state.tickets.ticketOrder);

  const ticket = useAppSelector((state) =>
    currentId ? state.tickets.list.find((t) => t.id === currentId) : null,
  );
  const data = useAppSelector((state) => state.tickets.list);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const openModal = () => {
    dispatch(toggleTicketModal());
  };

  useEffect(() => {
    if (ticket)
      dispatch(
        setCurrentTicket({
          id: ticket.id,
          name: ticket.name,
          details: ticket.details,
          priority: ticket.priority,
        }),
      );
  }, [currentId]);

  return (
    <>
      <TicketModal />
      <BgTickets>
        <TableWrapper>
          <>
            <TableContainer>
              <Table>
                <TableHeader
                  columns={columns}
                  openModal={openModal}
                  buttonText="+ Add ticket"
                />
                <TableBody>
                  {sortingFilteredTickets(searchedText, ticketOrder, data)
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <ColumnRow row={row} columns={columns} />
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[8, 12, 16]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        </TableWrapper>
      </BgTickets>
    </>
  );
};
export default Tickets;
