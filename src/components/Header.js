import { Toolbar ,Divider ,IconButton,Typography,Badge} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"
// import classes  from "*.module.css";
import { makeStyles } from '@mui/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

const useStyles = makeStyles((theme)=>({
title:{
    flexGrow:1,
}
,
tagline:{
    fontSize :20,
    textTransform:'uppercase',
    justifyContent:'center',
    fontFamily : 'Montserrat'
}

}))
const Header =()=>{
    const classes = useStyles();

return(
    <>
    <Toolbar > 

 

    <IconButton>
    <MenuIcon/>
    </IconButton>

 

    <Typography variant ="h6" className={classes.title}>
    Blogging Website
    </Typography>
    
    <IconButton color='inherit'>
    <AccountCircleIcon />
    </IconButton>

    <Badge badgeContent={4} color="secondary">
    <IconButton color='inherit'>
    <CircleNotificationsIcon />
    </IconButton>
    
  </Badge>
    

    
 </Toolbar>
    <Divider />

    <Toolbar className = {classes.tagline}  > Express your Emotions through words   </Toolbar>
    
    

    </>
)
}
export default Header;