import { ThemeProvider } from "@mui/material";
import { ComparatorPage } from "./pages/comparator";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ComparatorPage />
    </ThemeProvider>
  );
}

export default App;
