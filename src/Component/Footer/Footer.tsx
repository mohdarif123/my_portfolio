import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LinkdlnIcon from "../../assests/icon/LinkdlnIcon.svg";
import InstragramIcon from "../../assests/icon/InstragramIcon.svg";
import FacebookIcon from "../../assests/icon/FacebookIcon.svg";
import TwitterIcon from "../../assests/icon/TwitterIcon.svg";
import PhoneIcon from "../../assests/icon/PhoneIcon.gif";
import Email_Icon from "../../assests/icon/Email_Icon.png";
import WebsiteIcon from "../../assests/icon/websiteIcon.png";
import AddressIcon from "../../assests/icon/AddressIcon.png";
import footerStyle from "./Footer.styles";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const classes = footerStyle;
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const getFooter = () => {
    return (
      <>
        <Box sx={classes.footerStyle}>
          <Typography sx={{ color: "white" }} variant="h3">
            &copy; {currentYear} BigGuard Technologies. All rights reserved.
          </Typography>
        </Box>
      </>
    );
  };

  const linkedinHandler = () => {
    window.open(
      "https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fnotifications%2F%3Ffilter%3Dall",
      "_blank"
    );
  };
  const twitterHandler = () => {};
  const instagramHandler = () => {};
  const facebookHandler = () => {};

  const getContactUsMethod = () => {
    return (
      <>
        <Typography variant="h1" sx={{ color: "white" }}>
          contact us
        </Typography>
        <Box
          sx={{
            marginTop: {
              xl: "40px",
              lg: "40px",
              md: "25px",
              sm: "25px",
              xs: "25px",
            },
          }}
        >
          <Typography sx={classes.contactUsInnerTextStyle} variant="subtitle1">
            <Box
              component={"img"}
              src={PhoneIcon}
              sx={classes.contactUsIconStyle}
            />
            <Typography variant="h3" style={{ flexGrow: 1 }}>
              +91 9879876545
            </Typography>
          </Typography>

          <Typography
            sx={classes.contactUsInnerTextStyle}
            variant="subtitle1"
            mt={1}
          >
            <Box
              component={"img"}
              src={Email_Icon}
              sx={classes.contactUsIconStyle}
            />
            <Typography variant="h3" style={{ flexGrow: 1 }}>
              info@abc.com
            </Typography>
          </Typography>

          <Typography
            sx={classes.contactUsInnerTextStyle}
            variant="subtitle1"
            mt={1}
          >
            <Box
              component={"img"}
              src={WebsiteIcon}
              sx={classes.contactUsIconStyle}
            />
            <Typography variant="h3" style={{ flexGrow: 1 }}>
              www.abc.com
            </Typography>
          </Typography>

          <Typography
            sx={classes.contactUsInnerTextStyle}
            variant="subtitle1"
            mt={1}
          >
            <Box
              component={"img"}
              src={AddressIcon}
              sx={classes.contactUsIconStyle}
            />
            <Typography variant="h3" style={{ flexGrow: 1 }}>
              Rajpat Nagar,Delhi INDIA
            </Typography>
          </Typography>
        </Box>
      </>
    );
  };

  const getAboutUsMethod = () => {
    return (
      <>
        <Typography variant="h1" sx={classes.aboutUsWrapper}>
          About us
        </Typography>
        <Box sx={classes.aboutUsSecondWrapper}>
          <Typography variant="h3" sx={classes.contactUsTextStyle}>
            Contact Us
          </Typography>
          <Typography variant="h3" sx={classes.contactUsTextStyle} mt={1}>
            About Us
          </Typography>
          <Typography variant="h3" sx={classes.contactUsTextStyle} mt={1}>
            Client Testimonial
          </Typography>
          <Typography variant="h3" sx={classes.contactUsTextStyle} mt={1}>
            Our Blog
          </Typography>
        </Box>
      </>
    );
  };

  const getCompanyMethod = () => {
    return (
      <>
        <Typography variant="h1" sx={classes.companyNameTextStyle}>
          My portfolio
        </Typography>
        <Typography variant="h3" sx={classes.bigGuardTextStyle}>
          BigGuard takes pride in being one of the leading cryptocurrency
          companies working to create aflawless development of cryptocurrency
          apps and software.
        </Typography>
        <Box mt={4} sx={classes.iconWrapper}>
          <Box
            component={"img"}
            src={LinkdlnIcon}
            sx={classes.iconStyle}
            onClick={linkedinHandler}
          />
          <Box
            component={"img"}
            src={TwitterIcon}
            sx={classes.iconStyle}
            onClick={twitterHandler}
          />
          <Box
            component={"img"}
            src={InstragramIcon}
            sx={classes.iconStyle}
            onClick={instagramHandler}
          />
          <Box
            component={"img"}
            src={FacebookIcon}
            sx={classes.iconStyle}
            onClick={facebookHandler}
          />
        </Box>
      </>
    );
  };

  const getContactMainMethod = () => {
    return (
      <>
        <Box sx={classes.mainWrapper}>
          <Grid container>
            <Grid item xl={4} lg={4} md={12} sm={12} xs={12} mt={5}>
              {getCompanyMethod()}
            </Grid>
            <Grid item xl={4} lg={4} md={12} sm={12} xs={12} mt={5}>
              {getAboutUsMethod()}
            </Grid>
            <Grid
              item
              xl={4}
              lg={4}
              md={12}
              sm={12}
              xs={12}
              sx={classes.contactUsGridWrapper}
              mt={5}
            >
              {getContactUsMethod()}
            </Grid>
          </Grid>
        </Box>
        {getFooter()}
      </>
    );
  };
  return getContactMainMethod();
};
export default React.memo(Footer);
