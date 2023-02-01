import { Box, Button, Grid, Typography } from "@mui/material";
import CustomInput from "../../global/CustomInput/CustomInput";
import contactStyle from "./Contact.styles";
import { useState } from 'react';
import { contactFormInitialState } from "./contactFormTypeAndValidation";

function Contact() {
  const classes = contactStyle;
  const [contactFormData,setContactFormData] = useState(contactFormInitialState);

  const handleSubmit = () => {
    console.log("submit");
  };

  const getHeader = () => {
    return (
      <>
        <Grid container justifyContent={"center"}>
          <Grid item>
            <Typography variant="h3">Contact us</Typography>
          </Grid>
        </Grid>
      </>
    );
  };
  const getContactForm = () => {
    return (
      <>
        <Grid container sm={10} xs={10} md={9} lg={8} xl={8} justifyContent="center" mt={5}
        >
          <Grid item sm={12} xs={12} md={9} lg={8} xl={7}>
            <CustomInput type="text" label="Name" placeholder="Please enter the name!" />
          </Grid>
          <Grid item sm={12} xs={12} md={9} lg={8} xl={7}>
            <CustomInput type="number" label="Contact Number" placeholder="Please enter the contact number!"
            />
          </Grid>
          <Grid item sm={12} xs={12} md={9} lg={8} xl={7}>
            <CustomInput type="email" label="E-mail" placeholder="Please enter the E-mail!"
            />
          </Grid>
          <Grid item sm={12} xs={12} md={9} lg={8} xl={7}>
            <CustomInput type="text" label="Description" placeholder="Please enter the description!" sx={classes.descriptionStyle}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={9} lg={8} xl={7}>
            <Button sx={classes.buttonStyle} onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </>
    );
  };
  return (
    <Box sx={classes.mainWrapper}>
      {getHeader()}
      {getContactForm()}
    </Box>
  );
}

export default Contact;
