import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';

const styles = (theme) => ({
  root: {
    color: theme.palette.common.white,
  },
});

// eslint-disable-next-line react/jsx-props-no-spreading
const AppBar = ({ ...props }) => <MuiAppBar elevation={0} position="static" {...props} />;

export default withStyles(styles)(AppBar);
