import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//UI
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CloudIcon from "@mui/icons-material/Cloud";

const Header = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        borderBottom: "1px solid black",
        padding: "15px",
      }}
    >
      <Box display="flex" alignItems="center">
        <CloudIcon fontSize="large" />
        {"Weather Forecast"}
      </Box>
      <Box>
        {isAuthenticated && (
          <Button variant="outlined" onClick={() => logout()}>
            Logout
          </Button>
        )}
      </Box>
    </Stack>
  );
};

export default Header;
