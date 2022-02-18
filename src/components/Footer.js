import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link } from '@mui/material';
import { makeStyles,ThemeProvider } from '@mui/styles';

const Footer = ({title,description}) => {
   
    return (
    <>
      <footer   style={{backgroundColor:'grey',height:'150px',paddingTop:'32px',minWidth:'700px'}}>
    <Container >
        <Typography variant="h6" align="center" gutterBottom >
        {title}
        </Typography>

        <Typography
         variant="subtitle1"
          align="center"
          component ="p"
          >
        {description}
        </Typography>

        <Typography
         variant="subtitle1"
          align="center"
          
          >
          Copyright {" "}
          <Link color='inherit' href ='http://google.com' style ={{textDecoration:'none'}}>
          Your Website
          </Link> { " "}
          {new Date().getFullYear()}.
        </Typography>




        

      
    </Container>
    </footer>
    </>
  )
}

export default Footer