/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Button, Divider, Menu, Paper, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import SortIcon from '@mui/icons-material/Sort';

import { useAppDispatch } from 'redux/hooks';
import { setOrder } from 'redux/slices/contacts/contacts.slice';
import { setTicketOrder } from 'redux/slices/tickets/tickets.slice';
import {
  StyledButtonGroup,
  StyledPopoverTitle,
} from 'components/SortPopover/styles';
import { PATHS } from 'constants/paths';
import { StyledIconButton } from 'components/FilterPopover/styles';

export const SortPopover = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const setAsc = () => {
    location.pathname === PATHS.contacts
      ? dispatch(setOrder('asc'))
      : dispatch(setTicketOrder('asc'));
  };
  const setDesc = () => {
    location.pathname === PATHS.contacts
      ? dispatch(setOrder('desc'))
      : dispatch(setTicketOrder('desc'));
  };
  const setDefault = () => {
    location.pathname === PATHS.contacts
      ? dispatch(setOrder(''))
      : dispatch(setTicketOrder(''));
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <StyledIconButton
        sx={{ mr: '32px' }}
        aria-label="Sort items"
        id="sort-button"
        aria-controls={open ? 'sort-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <SortIcon fill="#9fa2b4" />
        <Typography>Sort</Typography>
      </StyledIconButton>
      <Menu
        id="sort-menu"
        MenuListProps={{
          'aria-labelledby': 'sort-button',
          sx: {
            pt: 0,
            pb: 0,
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <Paper sx={{ p: 2 }}>
          <>
            <StyledPopoverTitle>Sort by name</StyledPopoverTitle>
            <StyledButtonGroup>
              <Button variant="text" onClick={setAsc}>
                Ascending order
              </Button>
              <Button variant="text" onClick={setDesc}>
                Descending order
              </Button>
            </StyledButtonGroup>
            <Divider />
            <Button variant="text" sx={{ ml: 4, mt: 1 }} onClick={setDefault}>
              Default
            </Button>
          </>
        </Paper>
      </Menu>
    </>
  );
};

export default SortPopover;
