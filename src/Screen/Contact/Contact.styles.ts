const contactStyle = {
  mainWrapper: {
    width: "100% !important",
    // background: "linear-gradient(to right bottom, #430089, #82ffa1)",
    background: "white",
    height: "calc(100vh - 72px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
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
} as const;

export default contactStyle;
