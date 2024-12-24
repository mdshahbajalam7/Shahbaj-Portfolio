import * as React from "react";
import PropTypes from "prop-types";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "./components/AppAppBar";

import Home from "./components/Home";
import getLPTheme from "./getLPTheme";
import Skills from "./components/Skills";
import About from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";

export default function LandingPage() {
  const [mode, setMode] = React.useState("dark");
  const LPtheme = createTheme(getLPTheme(mode));

  

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <AppAppBar mode={mode}  />
      <Home />
      <Box sx={{ bgcolor: "background.default" }}>
        <About />
        <Divider />

        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <ContactMe />
      </Box>
    </ThemeProvider>
  );
}
