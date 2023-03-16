import { createTheme } from "@mui/material";
import { constants } from "buffer";
import strings from "../global/constants/StringConstants";

// constants color 
const primaryColor = "#FFFFFF";

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
  // for heading 24.8px to 20.8px
  h1: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "1.30rem",
      fontFamily: strings.boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "1.30rem",
      fontFamily: strings.boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "1.45rem",
      fontFamily: strings.boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "1.50rem",
      fontFamily: strings.boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "1.625rem",
      fontFamily: strings.boldFamily,
    },
  },
  // for 22px
  h2: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "1.188rem",
      fontFamily: strings.boldFamily,
      lineHeight: "1.5",
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "1.188rem",
      fontFamily: strings.boldFamily,
      lineHeight: "1.5",
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "1.1.25rem",
      fontFamily: strings.boldFamily,
      lineHeight: "1.5",
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "1.313rem",
      fontFamily: strings.boldFamily,
      lineHeight: "1.5",
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "1.375rem",
      fontFamily: strings.boldFamily,
      lineHeight: "1.5",
    },
  },
  // for table header 17.008px
  h3: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.938rem",
      fontFamily: strings.boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.938rem",
      fontFamily: strings.boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "1rem",
      fontFamily: strings.boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "1rem",
      fontFamily: strings.boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "1.063rem",
      fontFamily: strings.boldFamily,
    },
  },
  // for table row 16px
  h4: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.91rem",
      fontFamily: strings.boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.92rem",
      fontFamily: strings.boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.94rem",
      fontFamily: strings.boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.94rem",
      fontFamily: strings.boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "1rem",
      fontFamily: strings.boldFamily,
    },
  },
  h5: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.75rem",
      fontFamily: strings.mediumFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.75rem",
      fontFamily: strings.mediumFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.781rem",
      fontFamily: strings.mediumFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.813rem",
      fontFamily: strings.mediumFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "0.875rem",
      fontFamily: strings.mediumFamily,
    },
  },
  // for 12px to 9px
  h6: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.563rem",
      fontFamily: strings.boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.563rem",
      fontFamily: strings.boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.625rem",
      fontFamily: strings.boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.75rem",
      fontFamily: strings.boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "0.75rem",
      fontFamily: strings.boldFamily,
    },
  },
  // for normal text 14px
  body1: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.844rem",
      fontFamily: strings.regularFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.875rem",
      fontFamily: strings.regularFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.906rem",
      fontFamily: strings.regularFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.938rem",
      fontFamily: strings.regularFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "1rem",
      fontFamily: strings.regularFamily,
    },
  },
  // stepper  14px
  body2: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.813rem",
      fontFamily: strings.regularFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.844rem",
      fontFamily: strings.regularFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.875rem",
      fontFamily: strings.regularFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.906rem",
      fontFamily: strings.regularFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "0.938rem",
      fontFamily: strings.regularFamily,
    },
  },
  // for 13px
  subtitle1: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.75rem",
      lineHeight: 1.2,
      fontFamily: strings.regularFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.75rem",
      fontFamily: strings.regularFamily,
      lineHeight: 1.2,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.813rem",
      fontFamily: strings.regularFamily,
      lineHeight: 1.2,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.813rem",
      fontFamily: strings.regularFamily,
      lineHeight: 1.2,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "0.813rem",
      lineHeight: 1.2,
      fontFamily: strings.regularFamily,
    },
  },
  subtitle2: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.80rem",
      lineHeight: 1.2,
      fontFamily: strings.proLightFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.82rem",
      fontFamily: strings.proLightFamily,
      lineHeight: 1.2,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.86rem",
      fontFamily: strings.proLightFamily,
      lineHeight: 1.2,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.88rem",
      fontFamily: strings.proLightFamily,
      lineHeight: 1.2,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "0.92rem",
      lineHeight: 1.2,
      fontFamily: strings.proLightFamily,
    },
  },
  // for button 16px
  button: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.875rem",
      fontFamily: strings.regularFamily,
      textTransform: "capitalize",
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.875rem",
      fontFamily: strings.regularFamily,
      textTransform: "capitalize",
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.813rem",
      fontFamily: strings.regularFamily,
      textTransform: "capitalize",
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.875rem",
      fontFamily: strings.regularFamily,
      textTransform: "capitalize",
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "0.938rem",
      fontFamily: strings.regularFamily,
      textTransform: "capitalize",
    },
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

export { theme, themes };
