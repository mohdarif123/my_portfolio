import { Box, Button, Grid, Typography } from "@mui/material";
import CustomInput from "../../global/CustomInput/CustomInput";
import contactStyle from "./Contact.styles";
import { useState } from "react";
import {
  contactFormInitialState,
  validateForContactForm,
} from "./contactFormTypeAndValidation";

function Contact() {
  const classes = contactStyle;
  const [contactFormData, setContactFormData] = useState<any>(
    contactFormInitialState
  );
// email regex 
  const emailRegex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleOnchangeMethod = (event: any) => {
    setContactFormData({
      ...contactFormData,
      [event.target.name]: {
        ...contactFormData[event.target.name],
        value: event.target.value,
        error:""
      },
    });
  };
  const handleValidation = () => {
    const { isValid, errors } = validateForContactForm(contactFormData);
    setContactFormData({ ...errors });
    return isValid;
  };
  const handleSubmit = () => {
    if (handleValidation()) {
      alert("Everything is okay!");
    }
  };

  const getHeader = () => {
    return (
      <>
        <Grid container justifyContent={"center"}>
          <Grid item>
            <Typography variant="h1">Contact us</Typography>
          </Grid>
        </Grid>
      </>
    );
  };
  const getContactForm = () => {
    return (
      <>
        <Grid
          container
          sm={10}
          xs={10}
          md={9}
          lg={8}
          xl={8}
          justifyContent="center"
          mt={5}
        >
          <Grid item sm={12} xs={12} md={9} lg={8} xl={7}>
            <CustomInput
              required
              id="name"
              name="name"
              value={contactFormData.name.value}
              onChange={handleOnchangeMethod}
              type="text"
              label="Name"
              placeholder="Please enter the name!"
              error={contactFormData.name.error}
              helperText={contactFormData.name.error}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={9} lg={8} xl={7}>
            <CustomInput
              required
              id="number"
              name="number"
              value={contactFormData.number.value}
              onChange={handleOnchangeMethod}
              type="number"
              label="Contact Number"
              placeholder="Please enter the contact number!"
              error={contactFormData.number.error}
              helperText={contactFormData.number.error}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={9} lg={8} xl={7}>
            <CustomInput
              required
              id="email"
              name="email"
              value={contactFormData.email.value}
              onChange={handleOnchangeMethod}
              type="email"
              label="E-mail"
              placeholder="Please enter the E-mail!"
              error={contactFormData.email.error}
              helperText={contactFormData.email.error}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={9} lg={8} xl={7}>
            <CustomInput
              required
              id="description"
              name="description"
              value={contactFormData.description.value}
              onChange={handleOnchangeMethod}
              type="text"
              label="Description"
              placeholder="Please enter the description!"
              error={contactFormData.description.error}
              helperText={contactFormData.description.error}
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
