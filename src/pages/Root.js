import React from "react";
import { Outlet } from "react-router";

import Container from "@mui/material/Container";
import Header from "../components/Header";

const Root = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Root;
