import React, { FC } from 'react';
import { Button } from '@material-ui/core';

import { MenuItemButton } from './styled';

interface OwnProps {
  onClick(): void;
}
const LogOutComponent: FC<OwnProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <MenuItemButton>Log Out</MenuItemButton>
    </Button>
  );
};

export default LogOutComponent;
