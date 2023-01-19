import { theme } from "../../utils/styles";
const NavBarPageStyle = {
  navWrapperStyle: {
    display: "flex",
    backgroundColor: "#1b2430",
    justifyContent: "space-between",
    padding: "20px 80px",
    boxShadow: "0 5px 15px rgba(0,0,0,0,0.6)",
  },
  NavBarStyle: {
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    transition: "0.4s ease-in-out",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItem: "flex-start",
      justifyContent: "flex-start",
      position: "fixed",
      top: "100px",
      right: "-310px",
      width: "300px",
      height: "100vh",
      background: "#2a3239",
      boxShadow: "0 40px rgba(0,0,0.1)",
      padding: "40px 0 0 10px",
    },
  },
  NavBarStyle2: {
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    transition: "0.4s ease-in-out",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItem: "flex-start",
      justifyContent: "flex-start",
      position: "fixed",
      top: "100px",
      right: "0px",
      width: "300px",
      height: "100vh",
      background: "#2a3239",
      boxShadow: "0 40px rgba(0,0,0.1)",
      padding: "40px 0 0 10px",
    },
  },
  listItemStyle: {
    color: "#ffffff",
    width: "150px",
    fontFamily: "SourceSans3_Regular",
    fontWeight: 700,
    display: "list-item",
    fontSize: "1.3rem",
    padding: "0 20px",
    position: "relative",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      color: "#17cf97",
      "&::after": {
        content: "''",
        width: "25%",
        height: "2px",
        background: "#17cf97",
        position: "absolute",
        bottom: "-4px",
        left: "20px",
      },
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "25px",
    },
  },

  mobile: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  iconStyle: {
    color: "white",
    alignItem: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
      cursor: "pointer",
    },
  },
} as any;
export default NavBarPageStyle;
