import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

import TableRow from "@mui/material/TableRow";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function BasicTable({ salesdata }) {
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
          width: "100%",
          height: "max-content",
        }}
      >
        <Table>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  width: "5%",
                }}
              >
                <Typography
                  sx={{
                    alignSelf: "center",
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
                  width: "5%",
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
                  width: "11%",
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
                  width: "23%",
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
                  width: "23%",
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
                  width: "23%",
                }}
              >
                Address
              </TableCell>
            </TableRow>
            {salesdata &&
              salesdata.map((s) => {
                return (
                  <TableRow>
                    <TableCell>
                      <Typography
                        sx={{
                          color: "#7743DB",
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >
                        ${s.amountPayed}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#7743DB",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      {s.quantity}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#7743DB",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      ${s.total}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#7743DB",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      {s.buyernme}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#7743DB",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      {s.buyerPhoneNumber}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#7743DB",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      {s.buyerAddress}
                    </TableCell>
                  </TableRow>
                );
              })}
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
