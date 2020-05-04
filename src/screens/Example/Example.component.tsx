import React from 'react';
import logo from '../../assets/logo.svg';
import { Grid, Link, Typography } from '@material-ui/core';

const ExampleComponent = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <img src={logo} alt="logo" height={100} />
      <Typography>test</Typography>
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
