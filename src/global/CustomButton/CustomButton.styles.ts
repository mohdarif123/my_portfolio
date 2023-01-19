const customButtonStyle = {
  loadingStyle: {
    color: "white",
    width: "25px !important",
    height: "25px !important",
  },
  btnStyle: {
    borderRadius: "15px",
  border: "none",
  textAlign: "center",
    padding: "10px 15px",
    // boxShadow: " 4px 4px 30px rgba(0, 0, 0, 0.03)",
    boxShadow: "0 2px 0 rgb(0 0 0 / 2%)",
    color: "#FFFFFF",
    cursor: "pointer",
    textTransform: "none",
    height: "47px",
    transition: "all .3s ease",
    "&:hover": {
      background: "#c20c85",
    },
    width: "80%",
    "&:disabled": {
      color: "rgb(255 255 255 / 50%)",
    },
  },
} as const;

export default customButtonStyle;
