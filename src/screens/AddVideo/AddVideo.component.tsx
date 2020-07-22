import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import AddVideoFormik from './AddVideoFormik';

interface OwnProps {
  addVideo(videoUrl: string): void;
}

const AddVideoComponent: FC<OwnProps> = ({ addVideo }) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <AddVideoFormik onSubmit={(values) => addVideo(values.youTubeLink)} />
    </Grid>
  );
};

export default AddVideoComponent;
