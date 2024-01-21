import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { ICustomListItem } from 'interfaces/interfaces';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setSelectedIndex } from 'redux/slices/sidebar/sidebar.slice';
import { CustomListItemButton } from 'components/Sidebar/CustomListItem/styles';
import { PATHS } from 'constants/paths';

const CustomListItem = ({
  itemIndex,
  name,
  link,
  children,
}: ICustomListItem) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const selectedIndex = useAppSelector((state) => state.sidebar.selectedIndex);
  const switchPage = () => {
    dispatch(setSelectedIndex(itemIndex));
    navigate(link);
  };

  useEffect(() => {
    const currentLocation = location.pathname;
    switch (currentLocation) {
      case PATHS.tickets:
        dispatch(setSelectedIndex(1));
        return;
      case PATHS.contacts:
        dispatch(setSelectedIndex(2));
        return;
      default:
        dispatch(setSelectedIndex(0));
    }
  }, []);

  return (
    <ListItem disablePadding>
      <CustomListItemButton
        selected={selectedIndex === itemIndex}
        onClick={switchPage}
      >
        <ListItemIcon sx={{ minWidth: '40px' }}>{children}</ListItemIcon>
        <ListItemText primary={name} />
      </CustomListItemButton>
    </ListItem>
  );
};

export default CustomListItem;
