import React, { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { routes } from '../../router';
import { Link } from 'react-router-dom';
import { SignUpFormValues } from './index';
import { TextField } from 'formik-material-ui';
import { Button, Typography } from '@material-ui/core';
import { Grid, Box, Container } from '@material-ui/core';

const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .required('this field is required')
    .email('must be a valid email'),
  password: yup
    .string()
    .required('this field is required')
    .min(6, 'must contain at least 6 characters'),
});

interface OwnProps {
  onSubmit(values: SignUpFormValues): void;
  onChange(): void;
  signUpSuccess: boolean;
  errorMsg: string;
}

const SignUpComponent: FC<OwnProps> = ({
  onSubmit,
  onChange,
  signUpSuccess,
  errorMsg,
}) => {
  return (
    <div>
      <Container>
        <Grid container direction="column" alignItems="center" justify="center">
          <Box paddingTop={4} />
          <Grid item>
            <h1>Create your account</h1>
          </Grid>
          <Box paddingTop={2} />

          <Grid item container justify="center">
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={onSubmit}
              validationSchema={signUpSchema}>
              {({ isValid }) => (
                <Form onChange={onChange}>
                  <Field
                    autoComplete="off"
                    type="email"
                    name="email"
                    placeholder="email"
                    component={TextField}
                    fullWidth
                  />

                  <ErrorMessage name="email" component="div" />

                  <Field
                    autoComplete="off"
                    type="password"
                    name="password"
                    placeholder="password"
                    component={TextField}
                    fullWidth
                  />
                  <ErrorMessage name="password" component="div" />

                  <Box paddingTop={2} />

                  <Button
                    type="submit"
                    disabled={!isValid}
                    fullWidth
                    color="primary">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Grid>
          <Box paddingTop={5} />
          <Grid item>
            {signUpSuccess ? (
              <div>
                You successfully signed up. You can now{' '}
                <Link to={routes.signInPath}>log in.</Link>
              </div>
            ) : errorMsg ? (
              <div>{errorMsg}</div>
            ) : (
              <Typography>
                You already have an account?{' '}
                <Link to={routes.signInPath}>Sign in!</Link>
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SignUpComponent;
