import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let data = require('./posts.json')


class CatPage extends React.Component {
  render() {

  let post = data.find(p => p.id === this.props.match.params.id);
  console.log(post.text);

    return (
      <div style={{textAlign:'center', marginBottom:'100px', height:'565px'}}>
        <h1>{post.title}</h1>
        <div>
          <img src={post.img} style={{width:'50%', float: 'left', margin: '10px'}}/>
        </div>
        <p style={{margin: '100px 60px 0 60px'}}>{post.text}</p>
        <CardActions>
        <Link to={'/'}>
        <Button style={{margin:'20px', padding:'5px'}}>
          Back
        </Button>
      </Link>
      </CardActions>
      </div>
    )
  }
}
export default CatPage;