import React, { FC, useState } from 'react';
import fireApi from '../../services/firebase';

import SignUpComponent from './SignUp.component';

export interface SignUpFormValues {
  email: string;
  password: string;
}

const SignUp: FC = () => {
  const [signUpSuccess, setSignUpSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = (values: SignUpFormValues) => {
    fireApi
      .doCreateUserWithEmailAndPassword(values.email, values.password)
      .then(function () {
        setSignUpSuccess(true);
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
    <SignUpComponent
      onSubmit={handleSubmit}
      onChange={resetMessages}
      signUpSuccess={signUpSuccess}
      errorMsg={errorMsg}
    />
  );
};

export default SignUp;
