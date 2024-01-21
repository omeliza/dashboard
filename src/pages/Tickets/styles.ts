import { Box, Paper, styled, TableRow, TableCell, Avatar } from '@mui/material';

import { bgLight, blue, grey4, white, white2 } from 'constants/colors';

export const BgTickets = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  padding: '30px',
  width: '100%',
  minHeight: 'calc(100vh - 93px)',
  backgroundColor: `${bgLight}`,
});

export const TableWrapper = styled(Paper)({
  height: 'max-content',
  maxWidth: '1122px',
  bgColor: `${white}`,
  border: `1px solid ${white2}`,
  borderRadius: '8px',
});

export const addTicketStyles = {
  fontSize: '14px',
  fontWeight: 600,
  letterSpacing: '0.2px',
  color: `${blue}`,
  backgroundColor: 'transparent',
};

export const HeaderCell = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '90px',
});

export const PopoversWrapper = styled(Box)({ display: 'flex' });

export const PositionedRow = styled(TableRow)({
  position: 'relative',
  top: 0,
  paddingLeft: '30px',
});

export const StyledCell = styled(TableCell)({
  height: '92px',
  paddingRight: 0,
  'span:last-child': {
    color: `${grey4}`,
  },
});

export const StyledImg = styled('img')({
  marginRight: '24px',
  marginLeft: '14px',
});

export const StyledAvatar = styled(Avatar)({
  marginRight: '24px',
  marginLeft: '14px',
});

export const DetailsWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const NameDateWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const PriorityWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  paddingRight: '30px',
});
