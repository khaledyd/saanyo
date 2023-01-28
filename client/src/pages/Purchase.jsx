import React from "react";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

import Nav from "../components/home/Nav";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import DoneIcon from "@mui/icons-material/Done";
import { axiosInstance } from "../config";

const Signup = () => {
  const { currentUser } = useSelector((state) => state.user);

  const buyerId = currentUser._id;
  const locations = useLocation();

  const path = locations.pathname.split("/")[2];
  const [balance, setbalance] = useState("");
  const [error, setError] = useState(null);

  const [order, setOrder] = useState([]);
  const [price ,setPrice] = useState()
  const [sales, setSales] = useState([
    {
      quantity: 1,
      buyernme: "",
    },
  ]);
  const [seuccess, setSuccess] = useState(false);
  const [quantity, setquantity] = useState();
  
  const [buyernme, setbuyernme] = useState("");
  const [buyerPhoneNumber, setbuyerPhoneNumber] = useState();
  const [buyerAddress, setbuyerAddress] = useState("");
  const [total, setTotal] = useState(0);
  const [orderdata, setOrderdata] = useState();
  const totals = orderdata * quantity;


  const sellerid = order.userId;
  useEffect(() => {
    const fechorder = async () => {
      const res = await axiosInstance.get(`/users/getorderbyid/${path}`, {
        withCredentials: true,

      });
      setPrice(res.data)
      setOrderdata(res.data.price);
      const sellerdata = await axiosInstance.get(
        `/users/find/${res.data.userId}`
      );
      const buyerdata = await axiosInstance.get(
        `/users/find/${currentUser._id}`,
        {
          withCredentials: true,
        }
      );
      setbalance(buyerdata.data.wallet.balance);

      setOrder(res.data);
    };
    fechorder();
  }, [path, currentUser._id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sales = [
      {
        quantity,
        buyernme,
        buyerPhoneNumber,
        buyerAddress,
      },
    ];

    if (totals > balance) {
      setError(true);
    } else {
      try {
        const res = await axiosInstance.put(
          "/users/buysomethingnow/" + path,

          {
            sellerid,
            buyerId,
            sales,
          }
        );
        setSuccess(true);
        setSales(res.data);
      } catch (err) {
 
      }
    }
  };

  return (
    <Box>
      <Nav />
      {seuccess ? (
        <Box
          sx={{
            width: "30%",
            height: "200px",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0px 30px",
            flexDirection: "column",
            marginTop: "100px",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            alignSelf: "center",
            marginLeft: "30%",
          }}
        >
          <Box
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#7743DB",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
            }}
          >
            {" "}
            <DoneIcon />
          </Box>

          <Typography
            sx={{
              fontSize: "15px",
              fontFamily: "Poppins, sans-serif",
              marginTop: "20px",
            }}
          >
            Thank you for your order. Your order is being processed{" "}
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            marginTop: "1%",
          }}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            sx={{
              width: {
                xs: "90%",
                sm: "90%",
                md: "50%",
                lg: "50%",
              },
              marginLeft: { lg: "20%", md: "20%", sm: "5%", xs: "5%" },
              backgroundColor: "#FCFCFC",
              padding: "30px 60px",
              boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#7743DB",
              }}
            >
              Complete Order
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "70%",
                    lg: "70%",
                  },
                  marginTop: "11px",
                  marginButtom: "20px",
                }}
              >
                {" "}
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  <strong>OrderId : </strong>
                  {order._id}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {" "}
                  <strong>Price : </strong>${order.price}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {" "}
                  <strong>Total : </strong> ${quantity * order.price}
                </Typography>
              </Box>

              <TextField
                id="outlined-basic"
                label="Quantity"
                type={"number"}
                variant="outlined"
                sx={{
                  width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                  marginTop: "10px",
                }}
                name="quantity"
                onChange={(e) => setquantity(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="fullName"
                type={"text"}
                variant="outlined"
                sx={{
                  width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                  marginTop: "10px",
                }}
                name="buyernme"
                onChange={(e) => setbuyernme(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="phone Number"
                type={"number"}
                variant="outlined"
                sx={{
                  width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                  marginTop: "10px",
                }}
                name="buyernme"
                onChange={(e) => setbuyerPhoneNumber(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Address"
                type={"text"}
                variant="outlined"
                sx={{
                  width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                  marginTop: "10px",
                }}
                name="buyernme"
                onChange={(e) => setbuyerAddress(e.target.value)}
              />
              {error && (
                <Typography
                  sx={{
                    width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                    color: "red",
                  }}
                >
                  {" "}
                  insufficient funds
                </Typography>
              )}

              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    marginTop: "10px",
                    backgroundColor: "#7743DB",
                  }}
                  onClick={handleSubmit}
                >
                  Complete Order
                </Button>

                <Box
                  justifyContent={"flex-start"}
                  sx={{
                    marginLeft: "-70px",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Signup;
