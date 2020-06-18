import React, { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button } from '@material-ui/core';
import { Box, Typography } from '@material-ui/core';
import { SubmitButton } from '../styled';

export interface SignInFormValues {
  email: string;
  password: string;
}

interface OwnProps {
  onSubmit(values: SignInFormValues): void;
}

//always when I pass props to child I need to define an interface where I specify
//the props' types

const EmailAndPasswordSignIn: FC<OwnProps> = ({ onSubmit }) => {
  return (
    <div>
      <Typography variant="h5">Sign In with your email and password</Typography>
      <Box paddingTop={2} />
      <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit}>
        {({ isValid }) => (
          <Form>
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

            <Button type="submit" disabled={!isValid} fullWidth>
              <SubmitButton>Submit</SubmitButton>
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EmailAndPasswordSignIn;
