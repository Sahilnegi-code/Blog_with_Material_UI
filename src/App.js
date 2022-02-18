import {Container, Grid, makeStyles } from "@material-ui/core"
import {featuredPosts , sidebar} from './Data/data'
import Header from "./components/Header";
import FeaturedPost from "./components/FeaturedPost";

import { createTheme } from '@mui/material/styles';
import './App.css';
import PostCard from "./components/PostCard";
import Sidebar from './components/Sidebar';
import Mainbar from './components/Mainbar';
import { style } from "@mui/system";
import Footer from './components/Footer.js';




const useStyles = makeStyles((theme)=>({

  mainGrid:{
    marginTop : theme.spacing(5)
  }

}))
    


function App() {

  const darkTheme = createTheme(
{

  palette : {
    type:"dark"
  }

}
  )

  const classes = useStyles();
  
  return(
    <>
    <Container style ={{minWidth:'700px'}}>
    <Header />
    <FeaturedPost />
    <br/>
    <Grid container spacing= {2}>
      {
        featuredPosts.map((post)=>{
          console.log(post.title);
          return <PostCard    post ={post} key={post.title} />
        })
      }
    </Grid>

    
 <Grid container spacing = {4} className={classes.mainGrid}>
    
 <Sidebar props = {sidebar}/>
  <Mainbar title = " From the firehorse "/>

 </Grid>
 </Container>
 <Footer 
 title = "Footer"
 description = "Something here to give the footer a purpose"

 />
    
   
    

    </>
  )
}
export default App;

