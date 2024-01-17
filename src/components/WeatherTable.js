import React from "react";

import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";

const displayObj = { display: { xs: "none", lg: "table-cell" } };

const WeatherTable = ({ weather }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date (mm/dd/yyyy)</TableCell>
            <TableCell>Temp (F)</TableCell>
            <TableCell sx={displayObj}>Description</TableCell>
            <TableCell sx={displayObj}>Main</TableCell>
            <TableCell sx={displayObj}>Pressure</TableCell>
            <TableCell sx={displayObj}>Humidity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={weather.date}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {weather.date}
            </TableCell>
            <TableCell>{weather.temp}</TableCell>
            <TableCell sx={displayObj}>{weather.description}</TableCell>
            <TableCell sx={displayObj}>{weather.main}</TableCell>
            <TableCell sx={displayObj}>{weather.pressure}</TableCell>
            <TableCell sx={displayObj}>{weather.humidity}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeatherTable;
