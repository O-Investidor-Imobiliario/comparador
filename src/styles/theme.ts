import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
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
