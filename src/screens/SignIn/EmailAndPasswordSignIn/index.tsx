import React, { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
      <h2>Sign In with you email and password</h2>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit}>
        {({ isValid }) => (
          <Form>
            <Field
              autoComplete="off"
              type="email"
              name="email"
              placeholder="email"
            />
            <ErrorMessage name="email" component="div" />
            <Field
              autoComplete="off"
              type="password"
              name="password"
              placeholder="password"
            />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={!isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EmailAndPasswordSignIn;
