import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

import TableRow from "@mui/material/TableRow";

import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BasicTable({ orders }) {
  const navigate = useNavigate();


  const allsales = orders.sales;

  const newarray = allsales;
  let final = [];
  for (let i = 0; i < newarray.length; i++) {
    const newone = newarray[i].total;
    final.push(newone);
  }

  console.log(final);
  const initialValue = 0;
  const finalarray = final.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  const redirectToAbout = () => {
    navigate(`/Singlesale/${orders._id}`, {
      state: {
        orderRevenue: finalarray,
      },
    });
  };
  console.log(finalarray);
  return (
    <Box
      sx={{
        width: "90%",
        backgroundColor: "#fff",
        marginLeft: "1%",

        paddingLeft: "5%",
        height: "max-content",
      }}
    >
      <TableContainer
        component={Box}
        sx={{
          width: "90%",
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
                number of sales
              </TableCell>
              <TableCell
                sx={{
                  alignSelf: "center",

                  fontFamily: "Poppins, sans-serif",
                  color: "#3C4263",
                  fontWeight: "bold",
                }}
              >
                Revenue
              </TableCell>
              <TableCell
                sx={{
                  alignSelf: "center",

                  fontFamily: "Poppins, sans-serif",
                  color: "#3C4263",
                  fontWeight: "bold",
                }}
              >
                Date created
              </TableCell>
              <TableCell
                sx={{
                  alignSelf: "center",

                  fontFamily: "Poppins, sans-serif",
                  color: "#3C4263",
                  fontWeight: "bold",
                }}
              >
                coppy Link
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography
                  sx={{
                    transition: "width 500ms, height 500ms",
                    marginLeft: "40px",
                    color: "#7743DB",
                    fontSize: "16px",
                    "&:hover": {
                      backgroundColor: "#3C4263",
                      color: "#fff",
                      padding:"10px 5px"
                    },
                    cursor: "pointer",
                  }}
                  onClick={redirectToAbout}
                >
                  {orders._id}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  color: "#7743DB",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                {orders.sales.length}
              </TableCell>
              <TableCell
                sx={{
                  color: "#7743DB",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                $ {finalarray}
              </TableCell>
              <TableCell
                sx={{
                  color: "#7743DB",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                {new Date(orders.createdAt).toDateString()}
              </TableCell>
              <TableCell
                sx={{
                  color: "#7743DB",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                <Button
                  sx={{
                    backgroundColor: "#7743db",
                    color: "#ffF",
                    "&:hover": {
                      backgroundColor: "#3C4263",
                      color: "#fff",
                    },
                  }}
                  onClick={() => navigate(`/Purchase/${orders._id}`)}
                >
                  Link
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
