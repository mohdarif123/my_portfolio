import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { skillStyle } from "./Skill.styles";
import ReactIcon from "../../assests/icon/ReactIcon.png";
import Javascript from "../../assests/icon/Javascript.png";
import Html from "../../assests/icon/Html.png";
import Css from "../../assests/icon/Css.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

const Skill = () => {
  const classes = skillStyle;
  const technologyData = [
    { technologyIcon: Html, technologyName: "Html" },
    { technologyIcon: Css, technologyName: "Css" },
    { technologyIcon: Javascript, technologyName: "Javascript" },
    { technologyIcon: ReactIcon, technologyName: "React js" },
    { technologyIcon: Javascript, technologyName: "Redux" },
    { technologyIcon: ReactIcon, technologyName: "Typescript" },
    { technologyIcon: Javascript, technologyName: "Material UI" },
    { technologyIcon: Javascript, technologyName: "antD UI liberary" },
    { technologyIcon: Javascript, technologyName: "Tailwind Css" },
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
        <Grid container spacing={3}>
          {technologyData.map((items) => {
            return (
              <>
                <Grid item xl={2} lg={2} md={4} sm={4} xs={4} gap={2}>
                  <Card sx={classes.cardStyle}>
                    <CardActionArea sx={classes.cardStyleInner}>
                      <Box>
                        <img src={items.technologyIcon} alt="React Icon" width="100" height="100"/>
                      </Box>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {items.technologyName}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
      </>
    );
  };
  return (
    <Box sx={classes.mainWrapper}>
      <Box>{getHeader()}</Box>
      <Box style={{marginTop:"56px"}}>{getTechnologySection()}</Box>
    </Box>
  );
};

export default Skill;
