import React, { FC } from 'react';

interface OwnProps {
  onClick(): void;
}
const LogOutComponent: FC<OwnProps> = ({ onClick }) => {
  return <div onClick={onClick}>Log Out</div>;
};

export default LogOutComponent;
