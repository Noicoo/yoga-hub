import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { FormControl, MenuItem } from '@material-ui/core';
import * as yup from 'yup';
import { TextField } from 'formik-material-ui';
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { Grid, Box } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import { Select } from 'formik-material-ui';
import { WarningTypography } from './styled';
// @ts-ignore
import FormRatings from 'form-ratings';
import { Level, Rating } from '../AddVideo.component';

const addVideoSchema = yup.object().shape({
  youTubeLink: yup
    .string()
    .matches(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi,
      'Enter correct url!'
    )
    .required('Please enter website'),
  level: yup.string().required('Please select the level'),
});

export interface AddVideoFormUrl {
  youTubeLink: string;
  level: Level;
  rating: Rating;
}

interface OwnProps {
  onSubmit(values: AddVideoFormUrl): void;
  videoIsDuplicate: boolean;
  onCancel: () => void;
  videoAdded: boolean;
  clearMessage: () => void;
}

const AddVideoFormik: FC<OwnProps> = ({
  onSubmit,
  videoIsDuplicate,
  onCancel,
  videoAdded,
  clearMessage,
}) => {
  const initialValues: AddVideoFormUrl = {
    youTubeLink: '',
    level: '',
    rating: null,
  };

  return (
    <div>
      <Box paddingTop={4} />

      <Grid container alignItems={'center'}>
        <Grid item md={4} xs={3}></Grid>
        <Grid item md={4} xs={6}>
          <Typography variant="h5">Add a Yoga Video</Typography>
        </Grid>

        <Grid item md={4} xs={3}></Grid>
      </Grid>
      <Box paddingTop={2} />

      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
        validationSchema={addVideoSchema}>
        {({ isValid, resetForm }) => (
          <Form>
            <Field
              autoComplete="off"
              name="youTubeLink"
              placeholder="https://www.youtube.com/watch?v=fldJek9xDoQ"
              component={TextField}
              fullWidth
              onKeyUp={clearMessage}
            />

            <FormControl>
              <InputLabel htmlFor="level">Level</InputLabel>
              <Field
                component={Select}
                name="level"
                inputProps={{
                  id: 'level',
                }}>
                <MenuItem value={'beginner'}>Beginner</MenuItem>
                <MenuItem value={'intermediate'}>Intermediate</MenuItem>
                <MenuItem value={'advanced'}>Advanced</MenuItem>
              </Field>
            </FormControl>

            <Box paddingTop={5} />
            <Box display="flex" justifyContent="center">
              <Field name="rating" as={FormRatings} />
            </Box>

            {videoIsDuplicate ? (
              <Box display="flex" justifyContent="center">
                <WarningTypography>Video Already Exists</WarningTypography>
              </Box>
            ) : null}

            {videoAdded ? (
              <Box display="flex" justifyContent="center">
                <Typography>Video Added to your Favourites</Typography>
              </Box>
            ) : null}

            <Box paddingTop={5} />
            <ButtonGroup fullWidth variant={'text'}>
              <Button type="submit" disabled={!isValid} fullWidth>
                Submit
              </Button>

              <Button
                type="button"
                onClick={() => {
                  resetForm();
                  onCancel();
                }}>
                Cancel
              </Button>
            </ButtonGroup>
          </Form>
        )}
      </Formik>
      {/*</Grid>*/}
      <Box paddingTop={5} />
      {/*</Grid>*/}
      {/*</Container>*/}
    </div>
  );
};

export default AddVideoFormik;
