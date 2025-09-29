import "./App.css";
import Home from "./pages/Home";
// import { ThemeProvider, Paper, Container } from '@mui/material/styles';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Paper } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Choose from "./pages/Choose";

function App() {
  const theme = createTheme({
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/choose" element={<Choose />} />
          </Routes>
          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
