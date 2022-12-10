import {
  Box,
  Button,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Storesidebar from "../components/storedashboard/Storesidebar";
import OrderLists from "../components/orders/OrderLists";

import Storenav from "../components/storedashboard/Sorenav";
import Lastsales from "../components/storedashboard/Lastsales";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fechorder = async () => {
      const res = await axios.get(`/users/getorder/${currentUser._id}`);
      setOrders(res.data);
      console.log(res.data);
    };
    fechorder();
  }, [currentUser._id]);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <Storesidebar />

      <Box
        sx={{
          width: "100%",
        }}
      >
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
          {orders.map((o) => {
            return <OrderLists orders={o} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
