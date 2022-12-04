import { Box } from "@mui/material";
import React from "react";
import Storesidebar from "../components/storedashboard/Storesidebar";

import SinglesaleNav from "../components/singlesale/SinglesaleNav";
import Singlesaledata from "../components/singlesale/Singlesaledata";

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
        <SinglesaleNav />
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: "#F5F5F5",
            paddingTop:"1%"
          }}
        >
          <Singlesaledata />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
