import { styled } from '@mui/material';

export const StyledLayout = styled('div')({
  display: 'grid',
  gridTemplateColumns: '255px 1fr',
  gridTemplateRows: '93px 1fr',
  gridTemplateAreas: `
  's h'
  's c'
  's c'
`,
});
