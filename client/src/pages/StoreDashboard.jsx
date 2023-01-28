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
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/userSlice";

import Storenav from "../components/storedashboard/Sorenav";
import Lastsales from "../components/storedashboard/Lastsales";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../components/storedashboard/Sidebar";
import Allnav from "./Allnav";
import Storedata from "../components/storedashboard/Storedata";
import { axiosInstance } from "../config";

const Dashboard = () => {
  const dipatch = useDispatch();

  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [orderClick, setOrderClick] = useState(true);
  const [cencel, setCencel] = useState(false);
  const [price, setPrice] = useState("");
  const [productTitle, setproductTitle] = useState("");
  const [user, seuser] = useState();
  const sales = orders.sales;

  const handlecencel = () => {
    setCencel(setIsOpen(false));
  };
  const handleOrder = () => [setIsOpen(!isOpen)];

  const handlecrateOrder = async (e) => {
    e.preventDefault();
    const userId = currentUser._id;

    const orderdata = {
      price,
      productTitle,
    };
    try {
      const res = await axiosInstance.post(`/users/createorder/${userId}`, orderdata);
      setIsOpen(false);

    } catch (err) {
 
    }
  };
  useEffect(() => {
    const fechorder = async () => {
      const res = await axiosInstance.get(
        `/users/getorder/${currentUser._id}`,
        {
          withCredentials: true,
        }
      );
      const ress = await axiosInstance.get(`/users/find/${currentUser._id}`, {
        withCredentials: true,
      });
      seuser(ress.data.sellerBlance);
      setOrders(res.data);
   
    };
    fechorder();
  }, [currentUser._id]);
  const handlesidebar = () => {
    setSidebar(!sidebar);
  };
  const sale = orders.sales;

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Allnav handlesidebar={handlesidebar} sidebar={sidebar} />

      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "30%",
            display: {
              lg: "block",
              sm: "none",
              xs: "none",
              md: "block",
            },
          }}
        >
          <Sidebar />
        </Box>

        {isOpen ? (
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "70%",
                lg: "70%",
              },
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
              padding: "20px 30px",
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
              width: {
                xs: "100%",
                sm: "100%",
                md: "80%",
                lg: "80%",
              },
            }}
          >
            {" "}
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
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <Storenav
                    handleOrder={handleOrder}
                    orders={orders}
                    user={user}
                    sidebar={sidebar}
                  />
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Storenav
                  handleOrder={handleOrder}
                  orders={orders}
                  user={user}
                  sidebar={sidebar}
                />
              </Box>
            )}
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
                      latest sales
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: {
                        lg: "block",
                        sm: "none",
                        xs: "none",
                        md: "block",
                      },
                    }}
                  >
                    {orders.map((o) => {
                      return <Lastsales orders={o} />;
                    })}
                  </Box>
                  <Box
                    sx={{
                      display: {
                        lg: "none",
                        sm: "block",
                        xs: "block",
                        md: "none",
                      },
                    }}
                  >
                    {orders.map((or) => {
                      return <Storedata key={or.sales._id} orders={or} />;
                    })}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
      <Box />
    </Box>
  );
};

export default Dashboard;
