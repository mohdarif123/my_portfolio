import { Box, Grid, Typography } from "@mui/material";
import footerStyle from "./Footer.styles";

const Footer = () => {
  const classes = footerStyle;

  const getHeader = () => {
    return (
      <>
        <Grid
          container
          display={"flex"}
          style={{
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid item>
            <Typography variant="h1">Icon</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1">Content</Typography>
          </Grid>
        </Grid>
      </>
    );
  };

  const mainHeading = () => {
    return (
      <>
        <Box sx={classes.mainWrapper}>{getHeader()}</Box>
      </>
    );
  };

  return mainHeading();
};
export default Footer;
