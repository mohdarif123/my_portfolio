const contactStyle = {
  mainWrapper: {
    width: "100%",
    background: "linear-gradient(to right bottom, #430089, #82ffa1)",
    height: "calc(100vh - 72px)",
    display :"flex",
    alignItems : "center",
    justifyContent : "center",
    flexDirection : "column"
  },
  descriptionStyle: {
    width: "100%",
    height: "10% !important",
    backgroundColor: "white",
  },
} as const;

export default contactStyle;
