import { Box, Table, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import Sidebar from "../components/dashboard/Sidebar";

import DashboardNav from "../components/dashboard/DashboardNav";
import Transections from "../components/dashboard/Transections";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

const Dashboard = () => {
  const [sends, setsends] = useState([]);
  const [receives, setreceives] = useState([]);

  const { currentUser } = useSelector((state) => state.user);
const all = sends && receives
  useEffect(() => {
    const fechdata = async () => {
      const res = await axios.get(`users/find/${currentUser._id}`);
      setsends(res.data.wallet.sends);
      setreceives(res.data.wallet.receives);
      console.log(res.data.wallet.sends);
    };
    fechdata();
  }, [currentUser._id]);
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
                  latest transections
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
          {sends.map((s) => {
            return <Transections />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
