import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from '../../styles';

export const SubmitButton = styled(Button)({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'transparent',
  },
});
