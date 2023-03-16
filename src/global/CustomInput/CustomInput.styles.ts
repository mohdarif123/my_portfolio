const customInputStyle = {
  text: {
    color: "green",
  },
  commentAsterisk: {
    color: "red !important",
    fontFamily: "MyriadPro_Regular",
    fontWeight: 400,
  },
  nameField: {
    fontFamily: "MyriadPro_Bold",
    fontWeight: 700,
    color: "#202730",
    marginBottom: "3px",
    wordSpacing: "2px",
  },
  textField: {
    border: "none",
    width: "100%",
    "& .MuiInputBase-input": {
      position: "relative",
      fontSize: "15px",
      fontFamily: "Roboto, Helvetica, Arial, sans-serif !important",
      background: " #FFFFFF",
      padding: "12px 12px",
      border: "none",
      "&::placeholder": {
        fontFamily: "MyriadPro_Regular",
        fontWeight: 400,
        fontSize: "16px",
      },
      [`@media screen and (max-width: ${1370}px)`]: {
        padding: "10px 12px",
      },
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      "&.Mui-focused fieldset": {
        borderColor: "#24CBC7",
      },
    },
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
      borderColor: "#E7E7E7",
    },
  },
} as const;
export default customInputStyle;
