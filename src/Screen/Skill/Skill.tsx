import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { skillStyle } from "./Skill.styles";
import ReactIcon from "../../assests/icon/ReactIcon.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";

const Skill = () => {
  const classes = skillStyle;
  const technologyData = [
    { technologyIcon: ReactIcon, technologyName: "Html" },
    { technologyIcon: "", technologyName: "Css" },
    { technologyIcon: "", technologyName: "Javascript" },
    { technologyIcon: "", technologyName: "Typescript" },
    { technologyIcon: "", technologyName: "React js" },
  ];
  const getHeader = () => {
    return (
      <>
        <Grid container justifyContent={"center"}>
          <Grid item>
            <Typography variant="h3">Technology</Typography>
            <Typography variant="h5" ml={8}>
              Worked on
            </Typography>
          </Grid>
        </Grid>
      </>
    );
  };
  const getTechnologySection = () => {
    return (
      <>
        <Card sx={classes.cardStyle}>
          <CardActionArea>
            <img src={ReactIcon} alt="image" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                React Js
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
    );
  };
  return (
    <Box sx={classes.mainWrapper} mt={7}>
      <Grid container xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          {getHeader()}
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          {getTechnologySection()}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skill;
