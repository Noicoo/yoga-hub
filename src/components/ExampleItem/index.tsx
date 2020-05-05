import React, { FC } from 'react';
import logo from '../../assets/logo.svg';
import { Typography } from '@material-ui/core';

interface OwnProps {
  title: string;
}

const ExampleItem: FC<OwnProps> = ({ title }) => (
  <>
    <img src={logo} alt="logo" height={100} />
    <Typography>{title}</Typography>
  </>
);

export default ExampleItem;
