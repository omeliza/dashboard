import { Fragment } from 'react';
import { Box, Divider, Typography } from '@mui/material';

import { BottomTitleWrapper } from 'pages/Overview/styles';
import { RepeatedSection, Wrapper } from 'pages/Overview/UnresolvedBox/styles';
import { unresolvedData } from 'pages/Overview/UnresolvedBox/mockData';

const UnresolvedBox = () => (
  <Wrapper>
    <BottomTitleWrapper>
      <Typography variant="h2">Unresolved tickets</Typography>
      <Typography>View details</Typography>
    </BottomTitleWrapper>
    <Typography variant="caption">
      Group: <span>Support</span>
    </Typography>
    <Box>
      {unresolvedData.map((item, i) => (
        <Fragment key={item.title}>
          <RepeatedSection>
            <Typography variant="body2">{item.title}</Typography>
            <Typography variant="body2">{item.number}</Typography>
          </RepeatedSection>
          {i !== unresolvedData.length - 1 && <Divider />}
        </Fragment>
      ))}
    </Box>
  </Wrapper>
);

export default UnresolvedBox;
