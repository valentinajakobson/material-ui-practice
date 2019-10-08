import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#52a2f2'
  },
  textField: {
    marginBottom: '20px',
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
      color: 'black',
  },
  menuContainer:{
      flex:1
  },
  formContainer: {
      flex:1,
      display: 'block'
  },
  button:{
      display: 'block',
      margin:'10px'
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
    <Typography variant="h6">
        Contact us
    </Typography>
      <TextField
        id="standard-name"
        label="Name"
        className={classes.textField}
      />
    </div>
    <FormControl component="fieldset">
      <FormLabel component="legend">Your city</FormLabel>
      <FormGroup aria-label="position" name="position">
    <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Helsinki"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Espoo"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Vantaa"
          labelPlacement="end"
        />
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormGroup>
      </FormControl>
    <Button variant="contained" className={classes.button}>
        Submit
    </Button>
    </form>
    </div>
    </div>
  );
}

