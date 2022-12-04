import { Box } from "@mui/material";
import React from "react";
import Storesidebar from "../components/storedashboard/Storesidebar";

import Mininav from "../components/alltransections/Mininav";
import Lastsales from "../components/storedashboard/Lastsales";

const Dashboard = () => {
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
        <Mininav />
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: "#F5F5F5",
            paddingTop: "1%",
          }}
        >
          <Lastsales />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
