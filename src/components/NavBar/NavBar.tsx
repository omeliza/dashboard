import { Avatar, Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { useAppSelector } from 'redux/hooks';
import { stringAvatar } from 'utils/navbarHelpers';
import { StyledAppBar } from 'components/NavBar/styles';

const Navbar = () => {
  const location = useLocation();
  const capitalize =
    location.pathname.slice(1).charAt(0).toUpperCase() +
    location.pathname.slice(2);
  const firstName = useAppSelector((state) => state.auth.user.firstname);
  const lastName = useAppSelector((state) => state.auth.user.lastname);
  const fullName = `${firstName} ${lastName}`;

  return (
    <StyledAppBar>
      <>
        <Typography>
          {location.pathname === '/' ? 'Overview' : capitalize}
        </Typography>
        <Box>
          <>
            <Typography>{fullName}</Typography>
            <Avatar {...stringAvatar(fullName)} alt="avatar" />
          </>
        </Box>
      </>
    </StyledAppBar>
  );
};

export default Navbar;
