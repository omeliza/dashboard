import { FC, Fragment } from 'react';
import {
  Divider,
  FormControlLabel,
  IconButton,
  Typography,
} from '@mui/material';
import MuiCheckbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import add from 'assets/add.png';
import { ICheckbox } from 'interfaces/interfaces';
import { Section, Wrapper } from 'pages/Overview/Tasks/styles';
import { BottomTitleWrapper } from 'pages/Overview/styles';
import { mockTasks } from 'pages/Overview/Tasks/mockTasks';

const Checkbox: FC<ICheckbox> = ({ label, icon, checkedIcon }) => (
  <FormControlLabel
    label={label}
    control={<MuiCheckbox icon={icon} checkedIcon={checkedIcon} />}
  />
);

const Tasks = () => {
  return (
    <Wrapper>
      <BottomTitleWrapper>
        <Typography variant="h2">Tasks</Typography>
        <Typography>View details</Typography>
      </BottomTitleWrapper>
      <Typography variant="caption">Today</Typography>
      <Section>
        <Typography variant="body2">Create new task</Typography>
        <IconButton sx={{ p: 0 }}>
          <img src={add} alt="add" />
        </IconButton>
      </Section>
      <Divider />
      {mockTasks.map((item, i) => (
        <Fragment key={item.src}>
          <Section>
            <Checkbox
              label={item.label}
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CheckCircleIcon />}
            />
            <IconButton sx={{ p: 0 }}>
              <img src={item.src} alt={item.alt} />
            </IconButton>
          </Section>
          {i !== mockTasks.length - 1 && <Divider />}
        </Fragment>
      ))}
    </Wrapper>
  );
};

export default Tasks;
