import React, { FC, useState } from 'react';
import { fireApi } from '../../services/firebase';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { routes } from '../../router';
import { Link } from 'react-router-dom';

interface SignUpFormValues {
  email: string;
  password: string;
}

const SignUp: FC = () => {
  const [signUpSuccess, setSignUpSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

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

  const handleSubmit = (values: SignUpFormValues) => {
    fireApi
      .doCreateUserWithEmailAndPassword(values.email, values.password)
      .then(function () {
        setSignUpSuccess(true);
        console.log('You successfully signed up. You can now log in.');
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  const resetMessages = () => {
    setErrorMsg('');
    setSignUpSuccess(false);
  };

  return (
    <div>
      <h1>Create your account</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={signUpSchema}>
        {({ isValid }) => (
          <Form onChange={resetMessages}>
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
      {signUpSuccess ? (
        <div>
          You successfully signed up. You can now{' '}
          <Link to={routes.signInPath}>log in.</Link>
        </div>
      ) : errorMsg ? (
        <div>{errorMsg}</div>
      ) : (
        <div>
          You already have an account?{' '}
          <Link to={routes.signInPath}>Sign in!</Link>
        </div>
      )}
    </div>
  );
};

export default SignUp;
