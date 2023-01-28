import { Box, Table, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import {axiosInstance} from "../config"
import OrderLists from "../components/orders/OrderLists";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Allnav from "./Allnav";
import Sidebar from "../components/dashboard/Sidebar";
import OrdersData from "../components/orders/OrdersData";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    const fechorder = async () => {
      const res = await axiosInstance.get(`/users/getorder/${currentUser._id}` , {
        withCredentials: true,
      });
      setOrders(res.data);
    };
    fechorder();
  }, [currentUser._id]);


  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Allnav />

      <Box
        sx={{
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
            },
          }}
        >
          <Sidebar />
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "max-content",
            backgroundColor: "#F5F5F5",
            paddingTop: "1%",
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
          <Box>
            <Box
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  lg: "none",
                  md: "none",
                },
              }}
            >
              {orders.map((o) => {
                return <OrdersData orders={o} />;
              })}
            </Box>

            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  lg: "block",
                  md: "block",
                },
              }}
            >
              {orders.map((o) => {
                return <OrderLists orders={o} />;
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
