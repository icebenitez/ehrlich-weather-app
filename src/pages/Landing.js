import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// UI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Landing = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Box
        sx={{
          marginBottom: "20px",
        }}
      >
        <h1>Hello, World!</h1>
        <p>
          Welcome to the weather forecast web application. Please log in with
          your Github user to use the application and view the weather in your
          city.
        </p>
      </Box>
      <Button variant="contained" onClick={() => loginWithRedirect()}>
        Log In
      </Button>
    </>
  );
};

export default Landing;
