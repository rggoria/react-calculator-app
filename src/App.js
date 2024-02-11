import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BasicCalculator from "./Pages/SimpleCalculator/SimpleCalculator";
import "./App.css";
import { createTheme, ThemeProvider, Box } from "@mui/material";

function App() {
  const [mode, setMode] = useState(true);

  const appTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  const toggleMode = () => {
    setMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Box className={mode ? "modeDark" : "modeLight"}>
        <Navbar mode={mode} toggleMode={toggleMode} className="navbar" />
        <div className="content">
          <BasicCalculator />
        </div>
        <Footer className="footer" />
      </Box>
    </ThemeProvider>
  );
}

export default App;
