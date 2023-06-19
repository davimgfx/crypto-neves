import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header, Footer } from "./components";

import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        paper: "#14161a",
        default: "#14161a",
      },
    },
    typography: {
      fontSize: 16,
    },
  });


  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
