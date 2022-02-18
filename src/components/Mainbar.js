import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Divider } from '@mui/material';
import {posts} from '../Data/data';
import Markdown from 'markdown-to-jsx';
const Mainbar = ({title}) => {
  return (
      <>

      
      <Grid item xs = {12} md = {8}>
      <Typography variant="h6" gutterbottom>
      {title}
      </Typography>

      <Divider style= {{backgroundColor:'grey',height:'4px'}}/>

{

posts.map(post=>{
    
    
    return (



 <Markdown  key = {post.body}>
 {post.body}
 </Markdown >
 
    

)})


}


      </Grid>

      
      </>


      )
    
};

export default Mainbar;
