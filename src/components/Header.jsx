import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CloudIcon from "@mui/icons-material/Cloud";

const Header = () => {
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
        <Button variant="outlined">Log out</Button>
      </Box>
    </Stack>
  );
};

export default Header;
