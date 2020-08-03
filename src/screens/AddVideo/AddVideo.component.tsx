import React, { FC } from 'react';
import { Container, Grid } from '@material-ui/core';
import AddVideoFormik, { AddVideoFormUrl } from './AddVideoFormik';

export type Level = 'beginner' | 'intermediate' | 'advanced' | '';
export type Rating = 1 | 2 | 3 | 4 | 5 | null;
interface OwnProps {
  addVideo(video: AddVideoFormUrl): void;
  videoIsDuplicate: boolean;
  setVideoIsDuplicateToFalse: () => void;
}

const AddVideoComponent: FC<OwnProps> = ({
  addVideo,
  videoIsDuplicate,
  setVideoIsDuplicateToFalse,
}) => {
  return (
    <Container>
      <Grid container>
        <Grid item sm={2} md={3}></Grid>
        <Grid direction="column" item xs={12} sm={8} md={6}>
          <AddVideoFormik
            onSubmit={(values) => addVideo(values)}
            videoIsDuplicate={videoIsDuplicate}
            setVideoIsDuplicateToFalse={setVideoIsDuplicateToFalse}
          />
        </Grid>
        <Grid item sm={2} md={3}></Grid>
      </Grid>
    </Container>
  );
};

export default AddVideoComponent;
