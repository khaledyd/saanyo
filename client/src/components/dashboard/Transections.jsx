import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

import TableRow from "@mui/material/TableRow";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function BasicTable({ sends }) {
  


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
                  src="./images/transfer.png"
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
                    width:"20%"
                  }}
                >
                  ${sends.amountsent}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  color: "#7743DB",
                  fontWeight: "bold",
                  fontSize: "15px",
                  width:"20%"
                }}
              >
                {new Date(sends.createAt).toDateString()}
              </TableCell>
              <TableCell
                sx={{
                  color: "#7743DB",
                  fontWeight: "bold",
                  fontSize: "15px",
                  width:"30%"
                }}
              >
                {sends.reciverAc}
              </TableCell>
              <TableCell
                sx={{
                  color: "#7743DB",
                  fontWeight: "bold",
                  fontSize: "15px",
                  width:"30%"
                }}
              >
                {sends.receiverNmae}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
