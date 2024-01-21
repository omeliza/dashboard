import { ChangeEvent, useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from '@mui/material';

import ColumnRow from 'pages/Contacts/ColumnRow/ColumnRow';
import ContactsModal from 'pages/Contacts/ContactsModal/ContactsModal';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { toggleContactModal } from 'redux/slices/modal/modal.slice';
import { setCurrentContact } from 'redux/slices/contacts/contacts.slice';
import { StyledBox, StyledPaper } from 'pages/Contacts/styles';
import { sortingFilteredContacts } from 'utils/sortingFiltered';
import TableHeader from 'components/TableHeader/TableHeader';
import { IColumns } from 'interfaces/interfaces';
import { IContact } from 'redux/slices/contacts/types';

const columns: IColumns<IContact>[] = [
  { id: 'name', label: 'Name', minWidth: 396 },
  { id: 'email', label: 'Email', minWidth: 248 },
  { id: 'address', label: 'Address', minWidth: 248 },
  { id: 'createdAt', label: 'Created at', minWidth: 225 },
];

const Contacts = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.contacts.list);
  const { currentId, searchName, order } = useAppSelector(
    (state) => state.contacts,
  );
  const user = useAppSelector((state) =>
    currentId ? state.contacts.list.find((u) => u.id === currentId) : null,
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const openModal = () => {
    dispatch(toggleContactModal());
  };
  useEffect(() => {
    if (user)
      dispatch(
        setCurrentContact({
          id: user.id,
          src: user.src,
          firstName: user.name.split(' ')[0],
          lastName: user.name.split(' ')[1],
          email: user.email,
          address: user.address,
        }),
      );
  }, [currentId]);

  return (
    <>
      <ContactsModal />
      <StyledBox>
        <StyledPaper>
          <>
            <TableContainer>
              <Table>
                <>
                  <TableHeader
                    columns={columns}
                    openModal={openModal}
                    buttonText="+ Add contact"
                  />
                  <TableBody>
                    {sortingFilteredContacts(searchName, order, data)
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage,
                      )
                      .map((row) => (
                        <ColumnRow row={row} columns={columns} />
                      ))}
                  </TableBody>
                </>
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
        </StyledPaper>
      </StyledBox>
    </>
  );
};

export default Contacts;
