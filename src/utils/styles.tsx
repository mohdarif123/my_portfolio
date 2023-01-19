import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Poppins_Regular",
      "Poppins_Medium",
      "Poppins_Bold",
      "Poppins_Black",
      "sans-serif",
    ].join(","),
  },
});

export { theme };
