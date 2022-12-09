import {
  Box,
  Button,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import Sidebar from "../components/dashboard/Sidebar";

import DashboardNav from "../components/dashboard/DashboardNav";
import Transections from "../components/dashboard/Transections";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Transectionsc from "../components/dashboard/Transectionsc";

import axios from "axios";

const Dashboard = () => {
  const [userdata, setuserdata] = useState([]);

  const [sends, setsends] = useState([]);
  const [receives, setreceives] = useState([]);
  const [reciveTogle, setreciveTogle] = useState(true);

  const { currentUser } = useSelector((state) => state.user);
  const all = sends && receives;
  useEffect(() => {
    const fechdata = async () => {
      const res = await axios.get(`users/find/${currentUser._id}`);
      setuserdata(res.data.wallet.balance);

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
        <DashboardNav userdata={userdata} />

        <Box
          sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: "#F5F5F5",
            marginTop:"50px"
          }}
        >
          <Box
            sx={{
              height: "7%",
              backgroundColor: "#F5F5F5",
            }}
            display="flex"
          >
            {" "}
            {reciveTogle ? (
              <Box
                sx={{
                  width: "20%",
                  height: "100%",
                  backgroundColor: "#3C4263",
                  color: "#fff",
                  borderBottom: "3px solid #7743DB",
                  borderRadius: "0px",
                  "&:hover": {
                    backgroundColor: "#3C4263",
                  },
                }}
                onClick={() => setreciveTogle(true)}
              >
                <Typography
                  sx={{
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                >
                  money Recived
                </Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  width: "20%",
                  height: "100%",
                  backgroundColor: "#F5F5F5",
                  color: "#7743DB",

                  borderRadius: "0px",
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  "&:visited": {
                    backgroundColor: "#fff",
                  },
                }}
                onClick={() => setreciveTogle(true)}
              >
                <Typography
                  sx={{
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                >
                  money Recived
                </Typography>
              </Box>
            )}
            {reciveTogle ? (
              <Box
                sx={{
                  width: "20%",
                  height: "100%",
                  backgroundColor: "#F5F5F5",
                  color: "#7743DB",

                  borderRadius: "0px",
                  marginLeft: "20px",

                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                  "&:visited": {},
                }}
                onClick={() => setreciveTogle(false)}
              >
                <Typography
                  sx={{
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                >
                  Money Transfered
                </Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  width: "20%",
                  height: "100%",
                  backgroundColor: "#3C4263",
                  color: "#fff",

                  borderRadius: "0px",
                  marginLeft: "20px",
                  borderBottom: "3px solid #7743DB",
                  "&:hover": {
                    backgroundColor: "#3C4263",
                  },
                  "&:visited": {
                    borderBottom: "3px solid #7743DB",
                  },
                }}
                onClick={() => setreciveTogle(false)}
              >
                <Typography
                  sx={{
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                >
                  Money Transfered
                </Typography>
              </Box>
            )}
          </Box>
          {reciveTogle ? (
            <Box>
              {receives.map((r) => {
                return <Transectionsc receives={r} />;
              })}
            </Box>
          ) : (
            //

            <Box>
              {sends.map((s) => {
                return <Transections sends={s} />;
              })}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
