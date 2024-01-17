import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Container
        sx={{
          height: "100vh",
        }}
      >
        <Box>
          <Box
            sx={{
              marginBottom: "20px",
            }}
          >
            Welcome to the weather forecast web application. Please log in with
            your Github user to use the application and view the weather in your
            city.
          </Box>
          <Button variant="contained">Log In</Button>
        </Box>
      </Container>
    </>
  );
};

export default Home;
