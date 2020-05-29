import React, { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { userOperations } from '../../redux/user';
import { useDispatch } from 'react-redux';

interface SignInFormValues {
  email: string;
  password: string;
}

const EmailAndPasswordSignIn: FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values: SignInFormValues) => {
    dispatch(
      userOperations.checkEmailAndPasswordLogin(values.email, values.password)
    );
  };

  return (
    <div>
      <h2>Sign In with you email and password</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}>
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
