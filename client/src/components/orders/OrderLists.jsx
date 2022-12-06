import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BasicTable({ orders }) {
  const navigate = useNavigate();
  const copylink = ()=>{
const url = "http://localhost:3000/orders" + orders._id
  }
  return (
    <Box
      sx={{
        width: "90%",
        backgroundColor: "#fff",
        marginLeft: "1%",
        paddingTop: "5%",
        paddingLeft: "5%",
        height: "max-content",
      }}
    >
      <TableContainer
        component={Box}
        sx={{
          width: "75%",
          height: "max-content",
        }}
      >
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead
            sx={{
              backgroundColor: "#3C4263",
            }}
          >
            <TableRow
              sx={{
                width: "100%",
                backgroundColor: "#3C4263",
              }}
            >
              <TableCell
                sx={{
                  backgroundColor: "#3C4263",
                  fontSize: "20px",
                  color: "#FFFFFF",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                list of the Orders
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>

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
                    marginLeft: "40px",
                    color: "#7743DB",
                    fontSize: "16px",
                  }}
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
                $ {orders.price}
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
                <Button sx={{
                  backgroundColor: "#7743db",
                  color: "#ffF",
                  
                  

                }}
                onClick={()=> navigate(`/Purchase/${orders._id}`)}
                >Link</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
