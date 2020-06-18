import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from '../../styles';

export const MenuItemButton = styled(Button)({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'transparent',
  },
});
