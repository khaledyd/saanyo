import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../components/dashboard/Sidebar";

import DashboardNav from "../components/dashboard/DashboardNav";
import Transections from "../components/dashboard/Transections";

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <Sidebar />
      <Box
        sx={{
          width: "100%",
        }}
      >
        <DashboardNav />
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: "#F5F5F5",
            paddingTop:"1%"
          }}
        >
          <Transections />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
