import "./App.css";
import Home from "./pages/Home";
// import { ThemeProvider, Paper, Container } from '@mui/material/styles';
import { ThemeProvider, createMuiTheme } from "@mui/material/styles";
import { Container, Paper } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";

function App() {
  const theme = createMuiTheme({
    typography: {
      h1: { fontWeight: "bold" },
      h2: {
        fontSize: "2rem",
        color: "black",
      },
      h3: {
        fontSize: "1.8rem",
        fontWeight: "bold",
        color: "white",
      },
    },
    palette: {
      primary: { main: "#ff1744" },
      secondary: {
        main: "#118e16",
        contrastText: "#fff",
      },
    },
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper>
            <Home />
          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
