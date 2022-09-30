import React from "react";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
