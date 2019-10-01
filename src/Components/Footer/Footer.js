import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'pink'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  links: {
      display: 'block',
      fontSize: '20px',
      marginLeft: '60px',
      padding: '10px',
      color: 'black'
  },
  menuContainer:{
      flex:1
  },
  formContainer: {
      flex:1,
      display: 'block'
  },
  button:{
      display: 'block'
  },
  form: {
    display: 'block'
  }
}));


export default function TextFields() {
  const classes = useStyles();
 
  return (
    <div className={classes.container}>
    <div className={classes.menuContainer}>
    <Link
    component="button"
    variant="body2"
    className={classes.links}
    >
    Home
    </Link>
    <Link
    component="button"
    variant="body2"
    className={classes.links}
    >
    About
    </Link>
    <Link
    component="button"
    variant="body2"
    className={classes.links}
    >
    Contact
    </Link>
    </div>
    <div className={classes.formContainer}>
    <form className={classes.form} noValidate autoComplete="off">
        <div>
            
     
    <Typography component="h1">
        Contact us
    </Typography>
      <TextField
        id="standard-name"
        label="Name"
        className={classes.textField}
      />
         </div>
    <Button variant="contained" className={classes.button}>
        Default
    </Button>
    </form>
    </div>
    </div>
  );
}

