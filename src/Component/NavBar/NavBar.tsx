import { Box, List, ListItem, Typography } from "@mui/material";
import NavBarPageStyle from "./NavBar.styles";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import React from "react";

const NavBar = () => {
  const classes = NavBarPageStyle;
  const [clicked, setClicked] = useState(true);
  const [navTextActiveIndex, setNavTextActiveIndex] = useState<number>(0);

  const navigationData = [
    {
      text: "Home",
      key: "/",
    },
    {
      text: "About",
      key: "/about",
    },
    {
      text: "Skill",
      key: "/skill",
    },
    {
      text: "Project",
      key: "/project",
    },
    {
      text: "Contact us",
      key: "/contact_us",
    },
  ];

  const handleHamburger = () => {
    setClicked(false);
  };
  const handleCancel = () => {
    setClicked(true);
  };
  const handleTextActive = (navIndex: any) => {
    setNavTextActiveIndex(navIndex);
  };
  return (
    <>
      <Box sx={classes.navWrapperStyle}>
        <a href="index.html">
          {" "}
          <svg
            id="logo-15"
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
              className="ccustom"
              fill="#17CF97"
            ></path>{" "}
            <path
              d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
              className="ccustom"
              fill="#17CF97"
            ></path>{" "}
            <path
              d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
              className="ccustom"
              fill="#17CF97"
            ></path>{" "}
            <path
              d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
              className="ccustom"
              fill="#17CF97"
            ></path>{" "}
          </svg>
        </a>
        {/* nav  */}
        <Box>
          <List sx={clicked ? classes.NavBarStyle : classes.NavBarStyle2}>
            {navigationData.map((items: any, index) => {
              return (
                <React.Fragment key={index}>
                  <NavLink to={items.key} key={index}>
                    <Typography
                      variant="h3"
                      sx={
                        navTextActiveIndex === index
                          ? classes.listItemDefaultActive
                          : classes.listItemStyle
                      }
                      onClick={() => handleTextActive(index)}
                    >
                      {items.text}
                    </Typography>
                  </NavLink>
                </React.Fragment>
              );
            })}
          </List>
        </Box>
        
        <Box sx={classes.mobile}>
          {clicked ? (
            <>
              <DehazeOutlinedIcon
                sx={classes.iconStyle}
                onClick={handleHamburger}
              />{" "}
            </>
          ) : (
            <>
              {" "}
              <CloseOutlinedIcon
                sx={classes.iconStyle}
                onClick={handleCancel}
              />
            </>
          )}
          <Box></Box>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
