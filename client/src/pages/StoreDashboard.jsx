import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import Storesidebar from "../components/storedashboard/Storesidebar";
import OrderLists from "../components/storedashboard/OrderLists";

import Storenav from "../components/storedashboard/Sorenav";
import Lastsales from "../components/storedashboard/Lastsales";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [orderClick, setOrderClick] = useState(true);
  const [cencel, setCencel] = useState(false);
  const [price, setPrice] = useState("");
  const [productTitle, setproductTitle] = useState("");
  const handlecencel = () => {
    setCencel(setIsOpen(false));
  };
  const handleOrder = () => [setIsOpen(!isOpen)];
  const handlecrateOrder = async (e) => {
    e.preventDefault();
    const userId = currentUser._id;
    console.log(userId);
    const data = {
      price,
      productTitle,
    };
    try {
      const res = await axios.post(`/users/createorder/${userId}`, data);
      setIsOpen(false);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const fechorder = async () => {
      const res = await axios.get(`/users/getorder/${currentUser._id}`);
      setOrders(res.data);
      console.log(res.data);
    };
    fechorder();
  }, [currentUser._id]);

  const handelOrderClick = () => {
    setOrderClick(!orderClick);
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <Storesidebar />
      {isOpen ? (
        <Box
          sx={{
            width: "60%",
            height: "500px",
            backgroundColor: "#FCFCFC",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            marginTop: "100px",
            marginLeft: "30px",
            marginRight: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignItemsStyle: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: " Poppins, sans-serif",
              marginTop: "50px",
            }}
          >
            Create order
          </Typography>
          <TextField
            id="outlined-basic"
            label="Product"
            type={"text"}
            variant="outlined"
            sx={{
              width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
              marginTop: "40px",
              borderRadius: "30px",
              textTransform: "unset !important",
            }}
            onChange={(e) => setproductTitle(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="price"
            type={"number"}
            variant="outlined"
            sx={{
              width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
              marginTop: "10px",
              borderRadius: "30px",
              textTransform: "unset !important",
            }}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Box
            sx={{
              marginTop: "40px",
            }}
          >
            <Button
              sx={{
                width: "max-content",
                padding: "10px 30px",
                backgroundColor: "#7743DB",
                color: "#FFFFFF",
              }}
              onClick={handlecrateOrder}
            >
              Create Order
            </Button>
            <Button
              sx={{
                width: "max-content",
                padding: "10px 30px",
                backgroundColor: "#fff",
                color: "#7743DB",
              }}
              onClick={handlecencel}
            >
              cencel
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Storenav handleOrder={handleOrder} orders={orders} />

          <Box
            sx={{
              width: "100%",
              height: "max-content",
              backgroundColor: "#F5F5F5",
              paddingTop: "1%",
            }}
          >
            <Lastsales />


          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;
