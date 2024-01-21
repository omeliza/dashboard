/* eslint-disable @typescript-eslint/no-unused-expressions */
import { ChangeEvent, useState } from 'react';
import { Menu, Paper, TextField, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import FilterIcon from '@mui/icons-material/FilterAlt';

import { StyledIconButton } from 'components/FilterPopover/styles';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setSearchName } from 'redux/slices/contacts/contacts.slice';
import { setSearchedText } from 'redux/slices/tickets/tickets.slice';
import { PATHS } from 'constants/paths';

export const FilterPopover = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const location = useLocation();
  const searchName = useAppSelector((state) => state.contacts.searchName);
  const searchedText = useAppSelector((state) => state.tickets.searchedText);

  const dispatch = useAppDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    location.pathname === PATHS.contacts
      ? dispatch(setSearchName(e.target.value))
      : dispatch(setSearchedText(e.target.value));
  };
  const value =
    location.pathname === PATHS.contacts ? searchName : searchedText;

  const label =
    location.pathname === PATHS.contacts ? 'Search name' : 'Search text';

  const handleClose = () => {
    location.pathname === PATHS.contacts
      ? dispatch(setSearchName(''))
      : dispatch(setSearchedText(''));
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <StyledIconButton
        aria-label="Filter items"
        id="filter-button"
        aria-controls={open ? 'filter-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <FilterIcon fill="#9fa2b4" />
        <Typography>Filter</Typography>
      </StyledIconButton>
      <Menu
        id="filter-menu"
        MenuListProps={{
          'aria-labelledby': 'filter-button',
          sx: {
            paddingTop: 0,
            paddingBottom: 0,
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ paddingTop: 0 }}
      >
        <Paper sx={{ p: 2 }}>
          <TextField
            variant="outlined"
            label={label}
            value={value}
            onChange={handleChange}
          />
        </Paper>
      </Menu>
    </>
  );
};

export default FilterPopover;
