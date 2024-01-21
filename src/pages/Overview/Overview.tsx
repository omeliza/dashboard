import { Typography } from '@mui/material';

import Cards from 'pages/Overview/Cards/Cards';
import Chart from 'pages/Overview/Chart/Chart';
import SideCards from 'pages/Overview/SideCards/SideCards';
import UnresolvedBox from 'pages/Overview/UnresolvedBox/UnresolvedBox';
import Tasks from 'pages/Overview/Tasks/Tasks';
import {
  ChartSideCardWrapper,
  Content,
  OverviewWrapper,
  TodayTrendsWrapper,
} from 'pages/Overview/styles';

const Overview = () => (
  <OverviewWrapper>
    <Content>
      <Cards />
      <TodayTrendsWrapper>
        <Typography variant="h2">Today’s trends</Typography>
        <Typography variant="caption">as of 25 May 2019, 09:41 PM</Typography>
        <ChartSideCardWrapper>
          <Chart />
          <SideCards />
        </ChartSideCardWrapper>
      </TodayTrendsWrapper>
      <UnresolvedBox />
      <Tasks />
    </Content>
  </OverviewWrapper>
);

export default Overview;
