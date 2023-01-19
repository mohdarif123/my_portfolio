import { Home } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Route } from "react-router";
import { BrowserRouter , Routes } from "react-router-dom";
import NavBar from "./Component/NavBar/NavBar";
import Contact from "./Screen/Contact/Contact";
import About from "./Screen/About/About";
import Skill from "./Screen/Skill/Skill";
import Project from "./Screen/Project/Project";

function App() {
  return (
    <Box>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact_us" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
