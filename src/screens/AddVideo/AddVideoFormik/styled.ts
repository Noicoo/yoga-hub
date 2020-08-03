import { styled } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import theme from '../../../styles';

export const WarningTypography = styled(Typography)({
  color: theme.palette.error.main,
  fontWeight: 'bold',
});
