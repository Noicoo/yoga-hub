import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from './index';
import { useSelector } from 'react-redux';
import { userSelectors } from '../redux/user';
import LogOut from '../components/LogOut';
import {
  MenuList,
  MenuItem,
  Button,
  Grid,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { useStyles } from '../styles';

const Navigation = () => {
  const classes = useStyles();
  const userId = useSelector(userSelectors.userId);
  const currentPath = useLocation().pathname;

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <MenuList>
            <Grid container direction="row">
              <Grid item>
                <MenuItem
                  className={classes.menuItem}
                  selected={currentPath === routes.homePagePath}>
                  <Button
                    component={Link}
                    to={routes.homePagePath}
                    className={classes.menuButton}>
                    <HomeIcon />
                  </Button>
                </MenuItem>
              </Grid>
              <Grid item>
                <MenuItem
                  className={classes.menuItem}
                  selected={currentPath === routes.signInPath}>
                  {userId ? (
                    <LogOut />
                  ) : (
                    <Button
                      component={Link}
                      to={routes.signInPath}
                      className={classes.menuButton}>
                      Sign In
                    </Button>
                  )}
                </MenuItem>
              </Grid>
            </Grid>
          </MenuList>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
