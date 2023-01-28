import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

import TableRow from "@mui/material/TableRow";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function BasicTable({ receives }) {
 


  return (
    <Box
      sx={{
        width: "90%",
        backgroundColor: "#fff",
        marginLeft: "1%",

        paddingLeft: "5%",
      }}
    >
      <TableContainer
        component={Box}
        sx={{
          width: "100%",
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
                <img
                  src="./images/recive.png"
                  alt="transfer.png"
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                />{" "}
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
                Date
              </TableCell>
              <TableCell
                sx={{
                  alignSelf: "center",

                  fontFamily: "Poppins, sans-serif",
                  color: "#3C4263",
                  fontWeight: "bold",
                }}
              >
                Account
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
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    marginLeft: "40px",
                    color: "#7743DB",
                    fontWeight: "bold",
                    fontSize: "25px",
                    width: "20%",
                  }}
                >
                  ${receives.amountRecived}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  color: "#7743DB",
                  fontWeight: "bold",
                  fontSize: "15px",
                  width: "20%",
                }}
              >
                {new Date(receives.createAt).toDateString()}
              </TableCell>
              <TableCell
                sx={{
                  color: "#7743DB",
                  fontWeight: "bold",
                  fontSize: "15px",
                  width: "30%",
                }}
              >
                {receives.SenderuserId}
              </TableCell>
              <TableCell
                sx={{
                  color: "#7743DB",
                  fontWeight: "bold",
                  fontSize: "15px",
                  width: "30%",
                }}
              >
                {receives.senderNmae}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
