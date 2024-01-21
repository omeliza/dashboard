import { Box, Card, styled } from '@mui/material';

import { bgLight, blue, grey2, grey3, white, white2 } from 'constants/colors';

export const OverviewWrapper = styled(Card)`
  display: flex;
  justify-content: center;
  background-color: ${bgLight};
  padding: 30px;
`;

export const Content = styled('div')`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 4fr 2.5fr;
  grid-template-areas:
    'c1 c2 c3 c4'
    'tr tr tr tr'
    'un un ta ta';
  max-width: 1100px;
`;

export const TodayTrendsWrapper = styled(Box)`
  grid-area: tr;
  background: ${white};
  border: 1px solid ${white2};
  border-radius: 8px;
  padding: 32px 0 32px 32px;
  max-height: 546px;
  > h3 {
    margin-bottom: 8px;
  }
  > p {
    color: ${grey2};
  }
`;

export const ChartSideCardWrapper = styled(Box)`
  display: flex;
`;

export const BottomTitleWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding-left: 32px;
  padding-right: 32px;
  > p {
    color: ${blue};
  }
  + span {
    margin-bottom: 25px;
    color: ${grey2};
    padding-left: 30px;
    padding-right: 30px;
    > span {
      color: ${grey3};
    }
  }
`;
