import { Box, Typography } from "@mui/material";
import Footer from "../../Component/Footer/Footer";
import Contact from "../Contact/Contact";
import Skill from "../Skill/Skill";
import projectSytle from "./Project.styles";

const Project = () => {
  const classes = projectSytle;
  return (
    <Box>
      <Typography>Project</Typography>

      <Skill />
      <Contact />
      {/* <Project /> */}
      <Footer />
    </Box>
  );
};

export default Project;
