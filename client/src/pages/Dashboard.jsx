import { Box, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../components/dashboard/Sidebar";

import DashboardNav from "../components/dashboard/DashboardNav";
import Transections from "../components/dashboard/Transections";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Transectionsc from "../components/dashboard/Transectionsc";
import { axiosInstance } from "../config";

import Allnav from "./Allnav";


import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/userSlice";

import MinitransectionsRecived from "../components/dashboard/MinitransectionsRecived";
import MinitransectionsTransfered from "../components/dashboard/MinitransectionsTransfered";
const Dashboard = () => {
  const dipatch = useDispatch();

  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(null);

  const [userdata, setuserdata] = useState([]);

  const [sends, setsends] = useState([]);
  const [receives, setreceives] = useState([]);
  const [reciveTogle, setreciveTogle] = useState(false);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fechdata = async () => {
      const res = await axiosInstance.get(`users/find/${currentUser._id}`, {
        withCredentials: true,
      });
      setuserdata(res.data.wallet.balance);

      setsends(res.data.wallet.sends);
      setreceives(res.data.wallet.receives);
 
    };
    fechdata();
  }, [currentUser._id]);
  const handlesidebar = () => {
    setSidebar(!sidebar);
  };

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
      <Allnav handlesidebar={handlesidebar} sidebar={sidebar} />
      <Box
        display={"flex"}
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "block", sm: "none", lg: "block" },
            width: "25%",
          }}
        >
          <Sidebar />
        </Box>

        {/*     {sidebar ? (
          <Sidebar
            open={Boolean(sidebar)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          />
        ) : (
          ""
        )}*/}
        <Box
          sx={{
            width: "100%",
          }}
        >
          {sidebar ? (
            <Box>
              <Box
                sx={{
                  width: "100%",
                  height: "330px",
                  backgroundColor: "#3C4263",
                  zIndex: "9999",
                  position: "absolute",
                  marginTop: "-30px",
                  padding: "50px 0px",
                  borderRadius: "10px",
                  display: {
                    lg: "none",
                    sm: "block",
                    md: "none",
                    xs: "block",
                  },
                }}
              >
                <Box
                  sx={{
                    marginLeft: "30px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="./images/home.png"
                      alt="home"
                      style={{
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate("/")}
                    />
                    <Typography
                      sx={{
                        marginLeft: "10px",
                        color: "#fff",
                        fontSize: "18px",

                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Home
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "20px",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/settings")}
                  >
                    <img
                      src="./images/settings.png"
                      alt="settings"
                      style={{
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                      }}
                    />
                    <Typography
                      sx={{
                        marginLeft: "10px",
                        color: "#fff",
                        fontSize: "18px",
                        cursor: "pointer",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Settings
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  >
                    <img
                      src="./images/store.png"
                      alt="store"
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                    <Typography
                      sx={{
                        marginLeft: "10px",
                        color: "#fff",
                        fontSize: "18px",

                        fontFamily: "Poppins, sans-serif",
                      }}
                      onClick={() => navigate("/StoreDashboard")}
                    >
                      Store
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  >
                    <img
                      src="./images/logout.png"
                      alt="logout"
                      style={{
                        width: "60px",
                        height: "40px",
                      }}
                    />
                    <Typography
                      sx={{
                        marginLeft: "10px",
                        color: "#fff",
                        fontSize: "18px",

                        fontFamily: "Poppins, sans-serif",
                      }}
                      onClick={() => dipatch(logout())}
                    >
                      Log out
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{}}>
                <DashboardNav userdata={userdata} sidebar={sidebar} />
              </Box>
            </Box>
          ) : (
            <Box>
              <DashboardNav userdata={userdata} sidebar={sidebar} />
            </Box>
          )}

          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                lg: "100%",
                md: "100%",
              },
              height: "100vh",
              backgroundColor: "#F5F5F5",
              marginTop: "50px",
            }}
          >
            <Box
              sx={{
                height: "7%",
                backgroundColor: "#F5F5F5",
                width: "100%",
              }}
              display="flex"
            >
              {" "}
              {reciveTogle ? (
                <Box
                  sx={{
                    width: {
                      lg: "20%",
                      md: "20%",
                      xs: "50%",
                      sm: "50%",
                    },
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
                    width: {
                      lg: "20%",
                      md: "20%",
                      xs: "50%",
                      sm: "50%",
                    },
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
                    width: {
                      lg: "20%",
                      md: "20%",
                      xs: "50%",
                      sm: "50%",
                    },
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
                    width: {
                      lg: "20%",
                      md: "20%",
                      xs: "50%",
                      sm: "50%",
                    },
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
            {
              reciveTogle ? (
                sidebar ? (
                  <Box>
                    {receives.map((r) => {
                      return <MinitransectionsRecived receives={r} />;
                    })}
                  </Box>
                ) : (
                  <Box>
                    {receives.map((r) => {
                      return (
                        <Box>
                          <Box
                            sx={{
                              display: {
                                xs: "none",
                                md: "block",
                                sm: "none",
                                lg: "block",
                              },
                            }}
                          >
                            <Transectionsc receives={r} />
                          </Box>
                          <Box
                            sx={{
                              display: {
                                xs: "block",
                                md: "none",
                                sm: "block",
                                lg: "none",
                              },
                            }}
                          >
                            <MinitransectionsRecived receives={r} />
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                )
              ) : //
              sidebar ? (
                <Box>
                  {sends.map((r) => {
                    return <MinitransectionsTransfered sends={r} />;
                  })}
                </Box>
              ) : (
                <Box>
                  {sends.map((r) => {
                    return (
                      <Box>
                        <Box
                          sx={{
                            display: {
                              xs: "none",
                              md: "block",
                              sm: "none",
                              lg: "block",
                            },
                          }}
                        >
                          <Transections key={r._id} sends={r} />
                        </Box>
                        <Box
                          sx={{
                            display: {
                              xs: "block",
                              md: "none",
                              sm: "block",
                              lg: "none",
                            },
                          }}
                        >
                          <MinitransectionsTransfered key={r._id} sends={r} />
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              )
              //
            }
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
