import { Box, Grid, Typography } from "@mui/material";
import homeStyle from "./Home.styles";
import arifPhoto from "../../assests/image/arifPhoto.png";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import Skill from "../Skill/Skill";
import Footer from "../../Component/Footer/Footer";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  const classes = homeStyle;

  const getImportComponent = () => {
    return (
      <>
        <Skill />
        <Contact />
        <Testimonial />
        <Footer />
      </>
    );
  };

  return (
    <>
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
          <Grid item lg={8} md={8}>
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

          <Grid item lg={3} md={3}>
            <Box>
              <img src={arifPhoto} alt="Arif_Image" />
            </Box>
          </Grid>
        </Grid>

        {/* <Project /> */}
      </Box>
      {getImportComponent()}
    </>
  );
};

export default Home;
