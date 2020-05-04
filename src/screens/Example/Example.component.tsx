import React from 'react';
import logo from '../../assets/logo.svg';
import { Grid, Link, Typography } from '@material-ui/core';

const ExampleComponent = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <img src={logo} alt="logo" height={100} />
      <Typography>
        Edit <code>src/App.tsx</code> and save to reload.
      </Typography>
      <Link
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer">
        Learn React
      </Link>
    </Grid>
  );
};

export default ExampleComponent;
