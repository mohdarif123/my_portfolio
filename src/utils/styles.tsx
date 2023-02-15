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
export const breakpoints: any = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};
const themes = createTheme({
  // breakpoints,
  typography: {
    ...customTypography,
    // overrides: {
    //   MuiCssBaseline: {
    //     "@global": {
    //       "@font-face": [raleway],
    //     },
    //   },
    // },
  },
});
const customTypography = {
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "MyriadPro_Light",
      "MyriadPro_Bold",
      "MyriadPro_Medium",
      "MyriadPro_Regular",
      "sans-serif",
      "Digital-7 Mono",
    ].join(","),
  },
  // for heading
  h1: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "1.2rem",
      fontFamily: "MyriadPro_Bold",
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "1.3rem",
      fontFamily: "MyriadPro_Bold",
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "1.5rem",
      fontFamily: "MyriadPro_Bold",
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "1.62rem",
      fontFamily: "MyriadPro_Bold",
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "1.65rem",
      fontFamily: "MyriadPro_Bold",
    },
  },
  h2: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "1rem",
      fontFamily: "MyriadPro_Bold",
      lineHeight: "1.5",
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "1.313",
      fontFamily: "MyriadPro_Bold",
      lineHeight: "1.5",
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "1.375",
      fontFamily: "MyriadPro_Bold",
      lineHeight: "1.5",
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "1.375rem",
      fontFamily: "MyriadPro_Bold",
      lineHeight: "1.5",
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "1.5rem",
      fontFamily: "MyriadPro_Bold",
      lineHeight: "1.5",
    },
  },
  // for table header
  h3: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.938rem",
      fontFamily: "MyriadPro_Bold",
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.938rem",
      fontFamily: "MyriadPro_Bold",
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "1rem",
      fontFamily: "MyriadPro_Bold",
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "1rem",
      fontFamily: "MyriadPro_Bold",
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "1.063rem",
      fontFamily: "MyriadPro_Bold",
    },
  },
  // for table row
  h4: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.91rem",
      fontFamily: "MyriadPro_Regular",
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.92rem",
      fontFamily: "MyriadPro_Regular",
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.94rem",
      fontFamily: "MyriadPro_Regular",
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.94rem",
      fontFamily: "MyriadPro_Regular",
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "1rem",
      fontFamily: "MyriadPro_Regular",
    },
  },
  body1: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.80rem",
      fontFamily: "TT_Norms_Pro_Regular",
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.864rem",
      fontFamily: "TT_Norms_Pro_Regular",
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.884rem",
      fontFamily: "TT_Norms_Pro_Regular",
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.9rem",
      fontFamily: "TT_Norms_Pro_Regular",
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "0.91rem",
      fontFamily: "TT_Norms_Pro_Regular",
    },
  },
  body2: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.813rem",
      // fontFamily: "TT_Norms_Pro_Light",
      fontFamily: "MyriadPro_Medium",
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.813rem",
      fontFamily: "MyriadPro_Medium",
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.875rem",
      fontFamily: "MyriadPro_Medium",
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.875rem",
      fontFamily: "MyriadPro_Medium",
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "0.875rem",
      fontFamily: "MyriadPro_Medium",
    },
  },
  subtitle1: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.80rem",
      fontFamily: "TT_Norms_Pro_Light",
      lineHeight: 1.2,
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.82rem",
      fontFamily: "TT_Norms_Pro_Light",
      lineHeight: 1.2,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.86rem",
      fontFamily: "TT_Norms_Pro_Light",
      lineHeight: 1.2,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.88rem",
      fontFamily: "TT_Norms_Pro_Light",
      lineHeight: 1.2,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "0.92rem",
      fontFamily: "TT_Norms_Pro_Light",
      lineHeight: 1.2,
    },
  },
  subtitle2: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.80rem",
      lineHeight: 1.2,
      fontFamily: "TT_Norms_Pro_Light",
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.82rem",
      fontFamily: "TT_Norms_Pro_Light",
      lineHeight: 1.2,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.86rem",
      fontFamily: "TT_Norms_Pro_Light",
      lineHeight: 1.2,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.88rem",
      fontFamily: "TT_Norms_Pro_Light",
      lineHeight: 1.2,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "0.92rem",
      lineHeight: 1.2,
      fontFamily: "TT_Norms_Pro_Light",
    },
    // fontFamily: "TT_Norms_Pro_Light",
  },
  button: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "1rem",
      fontFamily: "TT_Norms_Pro_Medium",
      textTransform: "capitalize",
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "1rem",
      fontFamily: "TT_Norms_Pro_Medium",
      textTransform: "capitalize",
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "1rem",
      fontFamily: "TT_Norms_Pro_Medium",
      textTransform: "capitalize",
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "1.2rem",
      fontFamily: "TT_Norms_Pro_Medium",
      textTransform: "capitalize",
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "1.2rem",
      fontFamily: "TT_Norms_Pro_Medium",
      textTransform: "capitalize",
    },
    fontFamily: "TT_Norms_Pro_Medium",
  },
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "TT_Norms_Pro_Regular",
    "TT_Norms_Pro_Thin",
    "TT_Norms_Pro_Bold",
    "TT_Norms_Pro_Light",
    "TT_Norms_Pro_Medium",
    "sans-serif",
  ].join(","),
};

export { theme, themes };
