import { theme } from "../../utils/styles";

const contactStyle = {
  mainWrapper: {
    width: "100% !important",
    // background: "linear-gradient(to right bottom, #430089, #82ffa1)",
    background: "#cecece",
    height: "calc(100vh - 72px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  errorStyling: {
    paddingLeft: "10px",
  },
  buttonStyle: {
    background: "black",
    color: "white",
    width: "100%",
    fontFamily: "SourceSans3_Medium",
    fontWeight: 500,
    "&&:hover": {
      background: "blue !important",
      color: "white",
      fontFamily: "SourceSans3_Medium",
      fontWeight: 500,
    },
  },
  headingStyle: {
    // [`@media screen and (max-width: ${1370}px)`]: {
    //   fontSize: "32px",
    //   color: "red !important",
    // },'
    [theme.breakpoints.up("lg")]: {
      fontSize: "50px",
    },
  },
} as const;

export default contactStyle;
