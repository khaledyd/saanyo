import { Box } from "@mui/material";
import React from "react";
import Storesidebar from "../components/storedashboard/Storesidebar";

import SinglesaleNav from "../components/singlesale/SinglesaleNav";
import Singlesaledata from "../components/singlesale/Singlesaledata";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Allnav from "./Allnav";
import axios from "axios";

import SingleData from "../components/singlesale/SingleData";

const Dashboard = () => {
  const [order, setOrder] = useState({});

  const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/")[2];
  const orderbalance = location.state.orderRevenue;
  console.log(orderbalance);


  useEffect(() => {
    const fechorder = async () => {
      const res = await axios.get(`/users/getorderbyid/${path}`);

      console.log(res.data);

      setOrder(res.data);
    };
    fechorder();
  }, [path]);
  console.log(order);

  const salesdata = order.sales;

  return (
    <Box
      sx={{
        display: "flex",
        width: {
          xs: "100%",
          md: "100%",
          lg: "100%",
          sm: "100%",
        },
        flexDirection: "column",
      }}
    >
      <Allnav />

      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
          },
        }}
      >
        <SinglesaleNav
          order={order}
          salesdata={salesdata}
          orderbalance={orderbalance}
        />
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: "#F5F5F5",
            paddingTop: "1%",
            display: {
              xs: "none",
              sm: "none",
              lg: "block",
              md: "block",
            },
          }}
        >
          <Singlesaledata salesdata={salesdata} />
        </Box>
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              lg: "100%",
              md: "100%",
            },
            display:{
              xs:"block",
              sm:"block",
              md:"none",
              lg:"none",
            }
          }}
        >
          <SingleData salesdata={salesdata} />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
