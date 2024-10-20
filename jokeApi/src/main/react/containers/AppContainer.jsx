import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

const AppContainer = () => {
  const location = useLocation();

  return (
    <>
      <Nav locationUrl={location.pathname} />
      <Outlet />
    </>
  );
};

export default AppContainer;
