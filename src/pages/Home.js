import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//UI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Login from "./Login";
import User from "./User";

const Home = () => {
  const { isAuthenticated, isLoading, error } = useAuth0();

  const handleLandingDisplay = () => {
    if (isLoading) {
      return <p>Page is loading</p>;
    }

    if (error) {
      return <p>Error</p>;
    }

    if (isAuthenticated) {
      return <User />;
    }

    return <Login />;
  };

  return (
    <>
      <Container
        sx={{
          height: "100vh",
        }}
      >
        <Box>{handleLandingDisplay()}</Box>
      </Container>
    </>
  );
};

export default Home;
