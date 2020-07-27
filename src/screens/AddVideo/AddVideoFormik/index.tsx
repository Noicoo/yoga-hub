import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { FormControl, MenuItem } from '@material-ui/core';
import * as yup from 'yup';
import { TextField } from 'formik-material-ui';
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { Grid, Box, Container } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import { Select } from 'formik-material-ui';
// @ts-ignore
import FormRatings from 'form-ratings';

const addVideoSchema = yup.object().shape({
  youTubeLink: yup
    .string()
    .matches(
      /^(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\-_]+)/,
      'Enter correct url!'
    )
    .required('Please enter website'),
  level: yup.string().required('Please select the level'),
});

interface AddVideoFormUrl {
  youTubeLink: string;
  level: string | boolean;
  rating: number | null;
}

interface OwnProps {
  onSubmit(values: AddVideoFormUrl): void;
}

const AddVideoFormik: FC<OwnProps> = ({ onSubmit }) => {
  return (
    <div>
      <Container>
        <Grid container direction="column" alignItems="center" justify="center">
          <Box paddingTop={4} />
          <Grid item>
            <Typography variant="h5">Add a Yoga Video</Typography>
          </Grid>
          <Box paddingTop={2} />

          <Grid item container justify="center">
            <Formik
              initialValues={{
                youTubeLink: '',
                level: '',
                rating: null,
              }}
              onSubmit={onSubmit}
              validationSchema={addVideoSchema}>
              {({ isValid, resetForm }) => (
                <Form>
                  <Field
                    autoComplete="off"
                    name="youTubeLink"
                    placeholder="your YouTube link"
                    component={TextField}
                    fullWidth
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

                  <Box paddingTop={5} />
                  <ButtonGroup fullWidth variant={'text'}>
                    <Button type="submit" disabled={!isValid} fullWidth>
                      Submit
                    </Button>

                    <Button type="button" onClick={() => resetForm()}>
                      Cancel
                    </Button>
                  </ButtonGroup>
                </Form>
              )}
            </Formik>
          </Grid>
          <Box paddingTop={5} />
        </Grid>
      </Container>
    </div>
  );
};

export default AddVideoFormik;
