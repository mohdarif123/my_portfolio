import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import homeStyle from "./Home.styles";
import arif from "../../assests/image/arif.jpg";
import clsx from "clsx";
import Contact from "../Contact/Contact";
import Footer from "../../Component/Footer/Footer";

const Home = () => {
  const classes = homeStyle;

  return (
    <Box sx={classes.container}>
      <Grid
        container
        sm={12}
        xs={12}
        md={12}
        lg={12}
        xl={12}
        justifyContent={"space-evenly"}

      >
        <Grid item>
          <Box style={{ marginTop: "40%" }}>
            <Typography variant="h3">Mohd Arif</Typography>
            <Typography variant="h4" mt={3}>
              ____Software Engineer
            </Typography>
            <Typography mt={4} variant="h5">
              I'm creative web developer in India, and I'm passionate and
              dedicated to my work
            </Typography>
          </Box>
        </Grid>

        <Grid item>
          <Box>
            <img src={arif} alt="Arif_Image" />
          </Box>
        </Grid>
      </Grid>
      <Contact />
      {/* <Footer /> */}
    </Box>
  );
};

export default Home;
