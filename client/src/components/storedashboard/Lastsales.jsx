import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

import TableRow from "@mui/material/TableRow";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function BasicTable({ orders }) {
  const salesdata = orders.sales;
  console.log(salesdata.length);

  return (
    <Box
      sx={{
        width: "90%",
        backgroundColor: "#fff",
        marginLeft: "1%",
        paddingTop: "1%",
        paddingLeft: "5%",
        height: "max-content",
      }}
    >
      <TableContainer
        component={Box}
        sx={{
          width: "100%",
          height: "max-content",
        }}
      >
        <Table
          sx={{
            width: "100%",
          }}
        >
          {salesdata.map((sale) => {
            return (
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
                      Order Id
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
                    price
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
                </TableRow>
                <TableRow
                  sx={{
                    width: "100%",
                  }}
                >
                  <TableCell
                    sx={{
                      width: "30%",
                    }}
                  >
                    <Typography
                      sx={{
                        alignSelf: "center",
                        marginLeft: "40px",
                        fontFamily: "Poppins, sans-serif",
                        color: "#3C4263",
                      }}
                    >
                      {" "}
                      {orders._id}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      alignSelf: "center",

                      fontFamily: "Poppins, sans-serif",
                      color: "#3C4263",

                      width: "30%",
                    }}
                  >
                    {sale.buyernme}
                  </TableCell>
                  <TableCell
                    sx={{
                      alignSelf: "center",

                      fontFamily: "Poppins, sans-serif",
                      color: "#3C4263",

                      width: "20%",
                    }}
                  >
                    ${sale.total}
                  </TableCell>
                  <TableCell
                    sx={{
                      alignSelf: "center",

                      fontFamily: "Poppins, sans-serif",
                      color: "#3C4263",

                      width: "20%",
                    }}
                  >
                    {new Date(sale.createAt).toDateString()}
                  </TableCell>
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
      </TableContainer>
    </Box>
  );
}
