import React, { FC } from 'react';
import fire from '../../config/services/firebase';

const SignIn: FC = () => (
  <div
    onClick={() => {
      console.log(fire);
    }}>
    Sign In
  </div>
);

export default SignIn;
