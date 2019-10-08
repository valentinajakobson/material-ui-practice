import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
  
  picture: {
      height: '50%',
      width: '60%'
  },
  card: {
    maxWidth: 345,
    margin: '20px',
    marginTop: '40px'
  },
  media: {
    height: '300px'
  },
  link: {
    textDecoration: 'none' 
  },
}));

let data = require('./posts.json')


export default function SpacingGrid() {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {data.map(({id, title, img, text}) => 
        <Card className={classes.card} key={id}>
         <CardActionArea>
         <CardMedia
          component="img"
          className={classes.media}
          image={img}
          alt={text}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}     
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={`/post/${id}`} className={classes.link} >
        <Button size="small" color="primary">
          Learn More  
          {console.log(id)}
        </Button>
        </Link>
      </CardActions>
    </Card>
    )}
        </Grid>     
      </Grid>
    </Grid>
  );
}

