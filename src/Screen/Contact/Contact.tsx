import { Box, Button, Grid, TextareaAutosize, Typography } from "@mui/material";
import CustomInput from "../../global/CustomInput/CustomInput";
import contactStyle from "./Contact.styles";

function Contact() {
  const classes = contactStyle;
  return (
    <Box sx={classes.mainWrapper}>
      <Grid container justifyContent={"center"}>
        <Grid item>
          <Typography variant="h2" textAlign="center" alignItems="center">
            Contact us
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        // spacing={4}
        sm={12}
        xs={12}
        md={9}
        lg={8}
        xl={12}
        display="flex"
        justifyContent="center"
      >
        <Grid item sm={12} xs={12} md={9} lg={8} xl={7}>
          <CustomInput
            type="text"
            label="Name"
            placeholder="Please enter the name!"
          />
        </Grid>
        <Grid item sm={12} xs={12} md={9} lg={8} xl={7}>
          <CustomInput
            type="number"
            label="Contact Number"
            placeholder="Please enter the contact number!"
          />
        </Grid>
        <Grid item sm={12} xs={12} md={9} lg={8} xl={7}>
          <CustomInput
            type="email"
            label="E-mail"
            placeholder="Please enter the E-mail!"
          />
        </Grid>
        <Grid item sm={12} xs={12} md={9} lg={8} xl={7}>
          <CustomInput
            type="text"
            label="Description"
            placeholder="Please enter the description!"
            sx={classes.descriptionStyle}
          />
        </Grid>
        <Grid item sm={12} xs={12} md={9} lg={8} xl={7}>
          <Button
            style={{
              background: "blue",
              color: "white",
              padding: "5px 10px",
              width: "100%",
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
