import React from 'react'
import { Grid , Hidden,Card } from "@material-ui/core"
import { CardActionArea ,CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CardMedia } from '@mui/material';


const useStyles = makeStyles({

    cardMedia:{
        width:300
    },
card:{
    display:'flex'
}

})
const PostCard = ({post}) => {


    console.log(post);
    const classes = useStyles();
    return (
        <>
        
        <Grid item xs ={12} md ={6} >
        <CardActionArea component="a" href ="http://google.com">
        <Card className ={classes.card} >
        <div className ={classes.cardDetails}>
        <CardContent>

<Typography variant="h5"  >
{post.title}
</Typography>
<Typography variant="subtitle1" color="textSecondary">
{post.date}
</Typography>

<Typography variant="subtitle1" paragraph>

{post.description}
</Typography>

<Typography variant="subtitle1" style = {{color:'skyblue'}}>

Continue reading ....

</Typography>



        
        
        
        
        </CardContent>
        </div>
        
        <Hidden xsDown>
<CardMedia className= {classes.cardMedia} image  =  "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
 </Hidden>

        </Card>
        </CardActionArea>
        </Grid>

        </>
    )
}

export default PostCard
