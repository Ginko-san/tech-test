import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '../components/AppBar';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: {
    height: 64,
    [theme.breakpoints.up('sm')]: {
      height: 70,
    },
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="https://github.com/Ginko-san"
          >
            Tech test
          </Link>
          <div className={classes.right} />
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
};

export default NavBar;
