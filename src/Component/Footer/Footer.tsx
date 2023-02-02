import { Box, Grid, Typography } from '@mui/material';
import footerStyle from './Footer.styles';

const Footer = ()=> {
    const classes = footerStyle;
    const getHeader = () => {
      return (
        <>
          <Grid container justifyContent={"center"}>
            <Grid item>
              <Typography variant="h3">Contact us</Typography>
            </Grid>
          </Grid>
        </>
      );
    };
  return (
   <Box>
    {getHeader()}
   </Box>
  )
}

export default Footer
