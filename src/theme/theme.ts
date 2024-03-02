"use client";
import { createTheme } from "@mui/material";

const colors = {
  primary: "#23A6F0",
  secondary: "#23856D",
  text: "#252B42",
  secondaryText: "#737373",
  muted: "#BDBDBD",
  danger: "#E74040",
  disabled: "#8EC2F2",
  success: "#2DC071",
};

declare module "@mui/material/styles" {
  interface TypographyVariants {
    mobileMenu: React.CSSProperties;
    small: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    mobileMenu?: React.CSSProperties;
    small?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    mobileMenu: true;
    small: true;
  }
}

let theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: "62.5%",
        },
      },
    },
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    success: {
      main: colors.success,
    },
    error: {
      main: colors.danger,
    },
    text: {
      primary: colors.text,
      secondary: colors.secondaryText,
      disabled: colors.muted,
    },
    action: {
      disabled: colors.disabled,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  typography: {
    htmlFontSize: 10,
    // fontSize: 16,
    fontFamily: "Montserrat, sans-serif",
  },
});

theme = createTheme(theme, {
  typography: {
    // h3: {
    //   fontFamily: "Montserrat, sans-serif",
    //   fontSize: "2.4rem",
    //   fontWeight: 700,
    //   lineHeight: 1.33,
    //   letterSpacing: "0.1px",
    //   [theme.breakpoints.up("md")]: {
    //     fontSize: "4rem",
    //     lineHeight: 1.25,
    //     letterSpacing: "0.2px",
    //   },
    // },
    h2: {
      fontSize: "4rem",
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: "0.2px",
    },
    h3: {
      fontSize: "2.4rem",
      fontWeight: 700,
      lineHeight: 1.33,
      letterSpacing: "0.1px",
      // color: theme.palette.text.primary,
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: "1.6rem",
      fontWeight: 700,
      lineHeight: 1.5,
      letterSpacing: "0.1px",
    },
    h6: {
      fontSize: "1.4rem",
      fontWeight: 700,
      lineHeight: 1.71,
      letterSpacing: "0.2px",
    },
    body1: {
      fontSize: "1.4rem",
      fontWeight: 400,
      lineHeight: 1.42,
      letterSpacing: "0.2px",
    },
    mobileMenu: {
      fontSize: "3rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.2px",
      color: theme.palette.text.secondary,
    },
    small: {
      fontSize: "1.2rem",
      fontWeight: 400,
      lineHeight: 1.33,
      letterSpacing: "0.2px",
      color: theme.palette.text.secondary,
    },
  },
});

export default theme;
