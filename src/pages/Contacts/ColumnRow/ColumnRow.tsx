import { Avatar, Typography } from '@mui/material';

import {
  NameCellWrapper,
  PositionedRow,
  StyledTableCell,
} from 'pages/Contacts/styles';
import { IColumns } from 'interfaces/interfaces';
import { IContact } from 'redux/slices/contacts/types';
import PopoverPopup from 'components/PopoverPopup/PopoverPopup';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import {
  deleteContact,
  setCurrentContact,
  setCurrentContactId,
} from 'redux/slices/contacts/contacts.slice';
import { toggleContactModal } from 'redux/slices/modal/modal.slice';

const ColumnRow = ({
  row,
  columns,
}: {
  row: IContact;
  columns: IColumns<IContact>[];
}) => {
  const dispatch = useAppDispatch();
  const { currentId } = useAppSelector((state) => state.contacts);
  const user = useAppSelector((state) =>
    currentId ? state.contacts.list.find((u) => u.id === currentId) : null,
  );

  const edit = (id: number | undefined) => {
    dispatch(setCurrentContactId(id));
    if (user) {
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
      dispatch(setCurrentContactId(user.id));
      dispatch(toggleContactModal());
    }
  };

  const deleteLine = (id: number | undefined) => {
    dispatch(setCurrentContactId(id));
    if (user && currentId) {
      dispatch(deleteContact(currentId));
    }
  };

  return (
    <PositionedRow hover tabIndex={-1} key={row.id}>
      {columns.map((column) => {
        const value = row[column.id];
        return (
          <StyledTableCell key={column.id} align="left">
            {column.id === 'name' ? (
              <NameCellWrapper>
                <>
                  <Avatar src={row.src} alt="avatar" />
                  <Typography variant="body2">{value}</Typography>
                </>
              </NameCellWrapper>
            ) : (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: '30px',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: column.id === 'address' ? 400 : 600,
                    maxWidth: '120px',
                  }}
                >
                  {value}
                </Typography>
                {column.id === 'createdAt' && (
                  <PopoverPopup
                    edit={() => edit(row.id)}
                    deleteLine={() => deleteLine(row.id)}
                  />
                )}
              </div>
            )}
          </StyledTableCell>
        );
      })}
    </PositionedRow>
  );
};

export default ColumnRow;
