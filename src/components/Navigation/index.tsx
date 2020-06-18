// @ts-nocheck
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../router';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../redux/user';
import LogOut from '../LogOut';
import { MenuList, Button, Grid, AppBar, Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import { StyledMenuItem, MenuItemButton } from './styled';

const Navigation = () => {
  const userId = useSelector(userSelectors.userId);
  const currentPath = useLocation().pathname;

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <MenuList>
            <Grid container direction="row">
              <Grid item>
                <StyledMenuItem selected={currentPath === routes.homePagePath}>
                  <Button component={Link} to={routes.homePagePath}>
                    <MenuItemButton>
                      <HomeIcon />
                    </MenuItemButton>
                  </Button>
                </StyledMenuItem>
              </Grid>
              <Grid item>
                <StyledMenuItem selected={currentPath === routes.signInPath}>
                  {userId ? (
                    <LogOut />
                  ) : (
                    <Button component={Link} to={routes.signInPath}>
                      <MenuItemButton>Sign In</MenuItemButton>
                    </Button>
                  )}
                </StyledMenuItem>
              </Grid>
            </Grid>
          </MenuList>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
