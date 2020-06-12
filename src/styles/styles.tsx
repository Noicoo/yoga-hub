import { makeStyles } from '@material-ui/core/styles';

//usually useStyles is used within the components being styled
//maybe this is a better approach than having a single useStyles.
//on the other hand, components often need to be styled in the same way
//(ex: sign in button in the Navigation component and Log out button
//in the log out component. That is why for opted for this structure, but of
//course it's just an idea. Another way would be using comments:
//ex.: useStyles....
//shared components
//only login
//only homepage
//only video list and so on

export const useStyles = makeStyles((theme) => ({
  menuItem: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  menuButton: {
    color: theme.palette.text.secondary,
  },
}));
