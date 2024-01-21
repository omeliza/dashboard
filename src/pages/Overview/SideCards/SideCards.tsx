import { Fragment } from 'react';
import { Divider, Typography } from '@mui/material';

import { SideCard, SideCardWrapper } from 'pages/Overview/SideCards/styles';
import { mockSideCardData } from 'pages/Overview/SideCards/mockData';

const SideCards = () => (
  <SideCardWrapper>
    {mockSideCardData.map((item, i) => (
      <Fragment key={item.title}>
        <SideCard>
          <Typography>{item.title}</Typography>
          <Typography variant="h1" component="span">
            {item.value}
          </Typography>
        </SideCard>
        {i !== mockSideCardData.length - 1 && <Divider />}
      </Fragment>
    ))}
  </SideCardWrapper>
);

export default SideCards;
