import localFont from "next/font/local";
import { createTheme } from "@mui/material/styles";

// fonts
const bandaNova = localFont({
  src: [
    {
      path: "./font/bandanova/BandaNova-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "./font/bandanova/BandaNova-Medium.ttf",
      weight: "400",
      style: "light",
    },
    {
      path: "./font/bandanova/BandaNova-Bold.ttf",
      weight: "500",
      style: "light",
    },
  ],
});

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#49d0f2",
      main: "#00C5F6",
      dark: "#0cbce8",
      contrastText: "#FFFFFF",
    },
    success: {
      light: "#80F427",
      main: "#62BC1D",
      dark: "#57a61b",
      contrastText: "#FFFFFF",
    },

    text: {
      primary: "#FFFFFF",
      secondary: GREY[900],
      disabled: GREY[600],
      black: GREY[900],
    },

    white: {
      light: GREY[0],
      main: GREY[200],
      dark: GREY[300],
      contrastText: GREY[900],
    },
    background: { paper: "#FFFFFF", default: "#FFFFFF", neutral: GREY[200] },
  },
  typography: {
    fontFamily: bandaNova.style.fontFamily,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 500,
  },

  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
    MuiPaper: {
      boxShadow: "#5353531F",
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 30.4,
          boxShadow:
            "-0.7794860601425171px 3.1179442405700684px 17.148691177368164px rgba(82.87, 82.87, 82.87, 0.12)",
        },
      },
    },

    // <div style={{width: '100%', height: '100%', background: 'white', boxShadow: '-0.7794860601425171px 3.1179442405700684px 17.148691177368164px rgba(82.87, 82.87, 82.87, 0.12)', borderRadius: 30.40}} />

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "3px 25px",
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
