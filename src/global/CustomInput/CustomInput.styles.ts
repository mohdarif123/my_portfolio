const customInputStyle = {
  text: {
    color: "green",
  },
  textField: {
    width: "100%",
    background: "#ffffff",
    "& .MuiInputBase-input": {
      position: "relative",
      "&::placeholder": {
        fontFamily: "SourceSans3_Medium",
        fontWeight: 500,
      },
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
      "&.Mui-focused fieldset": {
        borderColor: "#4B0150",
      },
    },
  },
} as const;
export default customInputStyle;
