import { primaryBlack } from "../../utils/styles";

const footerStyle = {
  mainWrapper: {
    width: "100%",
    height: "100%",
    background: "black",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "0 20px",
    paddingBottom: "30px",
  },
  companyNameTextStyle: {
    color: "white",
    cursor: "pointer",
  },
  bigGuardTextStyle: {
    marginTop: "40px",
    color: "white",
  },
  iconWrapper: {
    display: "flex",
    gap: "2rem",
  },
  footerStyle: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    background: "black",
    paddingBottom: "7px",
    alignItems: "center",
  },
  contactUsInnerTextStyle: {
    display: "flex",
    alignItems: "center",
    color: "white",
  },
  contactUsIconStyle: {
    width: "25px",
    height: "25px",
    marginRight: "10px",
  },
  aboutUsWrapper: {
    color: "white",
    marginLeft: { xl: "10px", lg: "10px" },
  },
  aboutUsSecondWrapper: {
    marginTop: {
      xl: "40px",
      lg: "40px",
      md: "25px",
      sm: "25px",
      xs: "25px",
    },
    marginLeft: { xl: "10px", lg: "10px" },
  },
  contactUsGridWrapper: {
    paddingBottom: { sm: "20px", xs: "20px" },
  },
  contactUsTextStyle: {
    color: "white",
    "&:hover": {
      cursor: "pointer",
      color: "#17cf97",
    },
  },
  iconStyle: {
    cursor: "pointer",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
} as const;

export default footerStyle;
