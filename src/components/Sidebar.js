import React from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Paper } from '@material-ui/core';
import { Link } from '@mui/material';

function Sidebar({props}) {
    const {archives, description ,social , title } = props;
   

    
    return(
        
        <>
        <Grid  item xs = {12} md = {4}>
        <Paper style={{padding:'8px',marginBottom:'20px'}}  elevation={24}>
        <Typography variant="h6"  gutterBottom> {title} </Typography>
        
        <Typography  color="initial">
        {
            description
        }
        </Typography>
        
        </Paper>
        
        <Typography variant= "h6" gutterBottom>
        Archieves
        </Typography>
        {
        archives.map((archive)=>{
        
            return (
               
                <>
                <Link
                display="block"
                variant = "body1"
                href={archive.url}
                key = {archive.title}
                >
                {
                    archive.title
                }
                </Link>
        
                </>
            )            
        })
        }
        
        <Typography variant= "h6" gutterBottom>
        Social
        </Typography>
        {
            social.map((network)=>{
                return(
                    <Link>
                    <Grid container spacing={1} alignItems ="center" >
                      <Grid item>
                        <network.icon/>
                      </Grid>
                      <Grid item>{network.name}</Grid>
                    </Grid>
                    </Link>
                )
            })
        }

        </Grid>
        
      </>
  )
}

export default Sidebar;
