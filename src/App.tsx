import { Box } from "@mui/material";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import NavBar from "./Component/NavBar/NavBar";
import Contact from "./Screen/Contact/Contact";
import About from "./Screen/About/About";
import Skill from "./Screen/Skill/Skill";
import Project from "./Screen/Project/Project";
import Home from "./Screen/Home/Home";

function App() {
  return (
    <Box>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact_us" element={<Contact />} />
      </Routes>
    </Box>
  );
}

export default App;
