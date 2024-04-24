import { AppBar, Box, InputBase, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete } from '@react-google-maps/api';
import React from 'react';

import useStyles from './styles.js';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" color = "secondary">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          RoamRover🏖️
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title1}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
