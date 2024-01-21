import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

import { IErrorProps } from 'interfaces/interfaces';

const Error = ({ resetErrorBoundary }: IErrorProps) => {
  return (
    <>
      <Typography variant="h1">Ooops...something went wrong!</Typography>
      <h3>Try to return to the main page</h3>
      <Link to="/">
        <button type="button" onClick={resetErrorBoundary}>
          Try again
        </button>
      </Link>
    </>
  );
};

export default Error;
