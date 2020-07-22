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
                <Button component={Link} to={routes.homePagePath}>
                  <StyledMenuItem
                    selected={currentPath === routes.homePagePath}>
                    <MenuItemButton>
                      <HomeIcon />
                    </MenuItemButton>
                  </StyledMenuItem>
                </Button>
              </Grid>
              <Grid item>
                {userId ? (
                  <>
                    <LogOut />

                    <Button component={Link} to={routes.addVideoPath}>
                      <StyledMenuItem
                        selected={currentPath === routes.addVideoPath}>
                        <MenuItemButton>Add Video</MenuItemButton>
                      </StyledMenuItem>
                    </Button>
                  </>
                ) : (
                  <Button component={Link} to={routes.signInPath}>
                    <StyledMenuItem
                      selected={currentPath === routes.signInPath}>
                      <MenuItemButton>Sign In</MenuItemButton>
                    </StyledMenuItem>
                  </Button>
                )}
              </Grid>
            </Grid>
          </MenuList>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
