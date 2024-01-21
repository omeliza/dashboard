import { Paper, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircle';

import { black2, white } from 'constants/colors';

export const StyledPaper = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  min-height: 674px;
  background-color: ${white};
  border: '2px solid ${black2}';
  box-shadow: 24;
  padding: 32px 32px 40px 32px;
  text-align: 'center';
  > h1 {
    letter-spacing: 0.3px;
    text-align: center;
    margin-bottom: 32px;
  }
`;

export const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 316px;
  min-height: 536px;
`;

export const StyledAddIcon = styled(AddIcon)`
  font-size: 60px;
  color: rgba(159, 162, 180, 0.5);
  margin-right: 20px;
  display: flex;
  justify-content: start;
  margin-left: -5px;
  margin-bottom: 0;
`;
