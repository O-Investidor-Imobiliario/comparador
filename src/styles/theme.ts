import { createTheme } from "@mui/material/styles";
import { Colors } from "./colors";

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: '"Poppins" sans-serif',
      fontSize: 16,
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        InputProps: {
          style: {
            fontFamily: "Poppins, sans-serif",
          },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        style: {
          fontFamily: "Poppins, sans-serif",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#222A59",
    },
    secondary: {
      main: "#EBEEF3",
    },
  },
});
