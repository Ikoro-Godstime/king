// ? Import function to create Material UI Theme
import { createTheme } from "@mui/material/styles";

// ? Create Dark & Light Theme For Website
export const theme = createTheme({
  palette: {
    primary: {
      main: "#0f477b",
    },
  },
  typography: {
    fontFamily: ["Quicksand", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
        },
      },
      defaultProps: {
        color: "primary",
        disableElevation: true,
        disableRipple: true,
        variant: "contained",
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "primary",
        },
      },
      defaultProps: {
        color: "primary",
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },
  },
});

// ? Create Dark Theme For Website
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#192734",
      paper: "#15202B",
    },
  },
  typography: {
    fontFamily: ["Quicksand", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        variant: "contained",
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
      },
    },
  },
});
