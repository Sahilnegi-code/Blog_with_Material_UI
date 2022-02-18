import React from 'react'
import { CardActions,CardContent,Card, Typography, Button  } from '@mui/material';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme)=>({
cover:{
    backgroundImage  : `url(https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80)`
    ,
    opacity:'0.8'
    ,

    backgroundPosition :'center'
},
  title:{
      color:'white',
      fontSize: '50px',
      fontWeight:'bolder'
  }
    }))

const FeaturedPost = () => {
    const classes = useStyles() ;

    return (
        <>
        <Card className= {classes.cover}  >
        <CardContent  style ={{maxHeight:'400px'}}>
        <p className ={classes.title}  >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, quasi!
        </p>
        <Typography variant = "h6" style ={{color:'grey' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda unde, rem architecto atque quo hic provident nesciunt explicabo tenetur illum?
        ! hello
        </Typography>
        </CardContent>
        
        
        
        <CardActions>
        <Button>Read More ...</Button>
        </CardActions>
        

        
        </Card>
        
        </>
    )
}

export default FeaturedPost
