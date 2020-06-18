import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MenuItem } from '@material-ui/core';
import theme from '../../styles';

export const StyledMenuItem = styled(MenuItem)({
  '&:hover': {
    backgroundColor: 'transparent',
  },
});

export const MenuItemButton = styled(Button)({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'transparent',
  },
});
