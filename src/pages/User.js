import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const User = () => {
  const { user } = useAuth0();
  const [githubUrl, setGithubUrl] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    if (user.nickname) {
      setGithubUrl(`https://github.com/${user.nickname}`);
    }
  }, [user]);

  useEffect(() => {
    console.log("city", city);
  }, [city]);

  return (
    <>
      <Box
        sx={{
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <p>{user.name || "John Smith"}</p>
        <div>
          <Link href={githubUrl}>{githubUrl}</Link>
        </div>
        <div>
          <TextField
            // label="With normal TextField"
            // id="filled-start-adornment"
            // sx={{ m: 1, width: "25ch" }}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="filled"
          />
        </div>

        <div>
          <Button>Display Weather</Button>
        </div>
      </Box>
    </>
  );
};

export default User;
