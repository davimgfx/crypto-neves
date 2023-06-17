import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./components";

import { Outlet } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
};

export default App;