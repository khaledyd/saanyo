import { Box } from "@mui/material";
import React from "react";
import Storesidebar from "../components/storedashboard/Storesidebar";

import SinglesaleNav from "../components/singlesale/SinglesaleNav";
import Singlesaledata from "../components/singlesale/Singlesaledata";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [order, setOrder] = useState({});
  const location = useLocation();
  console.log(location)
  const path = location.pathname.split("/")[2];
  const orderbalance = location.state.orderRevenue
  console.log(orderbalance)

  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const fechorder = async () => {
      const res = await axios.get(`/users/getorderbyid/${path}`);

      console.log(res.data);

      setOrder(res.data);
    };
    fechorder();
  }, [path]);

  const salesdata = order.sales;

  console.log(salesdata);

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
        <SinglesaleNav order={order} salesdata={salesdata} orderbalance={orderbalance} />
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: "#F5F5F5",
            paddingTop: "1%",
          }}
        >
          <Singlesaledata salesdata={salesdata} />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
