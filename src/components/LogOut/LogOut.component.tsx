import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { useStyles } from '../../styles';

interface OwnProps {
  onClick(): void;
}
const LogOutComponent: FC<OwnProps> = ({ onClick }) => {
  const classes = useStyles();
  return (
    <Button onClick={onClick} className={classes.menuButton}>
      Log Out
    </Button>
  );
};

export default LogOutComponent;
