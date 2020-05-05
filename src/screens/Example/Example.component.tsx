import React, { FC } from 'react';
import logo from '../../assets/logo.svg';
import { Button, Grid, Link, Typography } from '@material-ui/core';

interface OwnProps {
  displayLink: boolean;
  onClick(): void;
}

const ExampleComponent: FC<OwnProps> = ({ displayLink, onClick }) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <img src={logo} alt="logo" height={100} />
      <Typography>storybook</Typography>

      <Button onClick={onClick}>
        {displayLink ? 'Hide link' : 'Show link'}
      </Button>
      {displayLink && (
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </Link>
      )}
    </Grid>
  );
};

export default ExampleComponent;
