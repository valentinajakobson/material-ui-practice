import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    undeline: 'none',
  },
  btns: {
    position: 'absolute',
    right: '0px',
    marginRight: '40px'
  },
}));


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Typography gutterBottom variant="h5" component="h2">
            CATS    
        </Typography>
        <div className = {classes.btns}>
        <Link to="/" className={classes.link}>
           <Button className={classes.button}>
             Cats page
           </Button>
         </Link>
          <Link to="/aboutus" className={classes.link}>
           <Button className={classes.button}>
             About us
           </Button>
         </Link>
         <Link to="/contact" className={classes.link}>
           <Button className={classes.button}>
             Contact
           </Button>
         </Link>
         </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}