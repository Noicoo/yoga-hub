import React, { FC } from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';

const LoadingSpinner: FC = () => (
  <>
    <Backdrop open={true}>
      <CircularProgress />/
    </Backdrop>
  </>
);

export default LoadingSpinner;
