import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import AddVideoFormik from './AddVideoFormik';

interface OwnProps {
  // addVideo(videoUrl: string): void;
  addVideo(
    videoUrl: string,
    level: string | boolean,
    rating: number | null
  ): void;
}

const AddVideoComponent: FC<OwnProps> = ({ addVideo }) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <AddVideoFormik
        // onSubmit={(values) => addVideo(values.youTubeLink)}
        onSubmit={(values) =>
          addVideo(values.youTubeLink, values.level, values.rating)
        }
        // onSubmit={(values) => console.log(values)}
      />
    </Grid>
  );
};

export default AddVideoComponent;
