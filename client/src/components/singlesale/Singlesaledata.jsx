import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function BasicTable() {
  return (
    <Box
      sx={{
        width: "90%",
        backgroundColor: "#fff",
        marginLeft: "1%",
        paddingTop: "5%",
        paddingLeft: "5%",
        height: "100%",
      }}
    >
      <TableContainer
        component={Box}
        sx={{
          width: "70%",
          height: "max-content",
        }}
      >
        <Table>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  display: "flex",
                }}
              >
                <Typography
                  sx={{
                    alignSelf: "center",
                    marginLeft: "10px",
                    fontFamily: "Poppins, sans-serif",
                    color: "#3C4263",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Amount
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  alignSelf: "center",

                  fontFamily: "Poppins, sans-serif",
                  color: "#3C4263",
                  fontWeight: "bold",
                }}
              >
                Quantity
              </TableCell>
              <TableCell
                sx={{
                  alignSelf: "center",

                  fontFamily: "Poppins, sans-serif",
                  color: "#3C4263",
                  fontWeight: "bold",
                }}
              >
                Total
              </TableCell>
              <TableCell
                sx={{
                  alignSelf: "center",

                  fontFamily: "Poppins, sans-serif",
                  color: "#3C4263",
                  fontWeight: "bold",
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  alignSelf: "center",

                  fontFamily: "Poppins, sans-serif",
                  color: "#3C4263",
                  fontWeight: "bold",
                }}
              >
                Phone Number
              </TableCell>
              <TableCell
                sx={{
                  alignSelf: "center",

                  fontFamily: "Poppins, sans-serif",
                  color: "#3C4263",
                  fontWeight: "bold",
                }}
              >
                Address
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
               
                    color: "#7743DB",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  $20.15
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  color: "#7743DB",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                20
              </TableCell>
              <TableCell
                sx={{
                  color: "#7743DB",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                400
              </TableCell>
              <TableCell
                sx={{
                  color: "#7743DB",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Khalid dahir
              </TableCell>
              <TableCell
                sx={{
                  color: "#7743DB",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
           9055280389514
              </TableCell>
              <TableCell
                sx={{
                  color: "#7743DB",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
             kaan 1 sk ankara
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableBody>
            <TableRow></TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
