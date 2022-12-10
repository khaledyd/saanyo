import React from "react";
import { borderColor, Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Nav from "../components/home/Nav";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import DoneIcon from "@mui/icons-material/Done";

const Signup = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate()

  const buyerId = currentUser._id;
  const locations = useLocation();

  const path = locations.pathname.split("/")[2];

  const [order, setOrder] = useState([]);
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

  const sellerid = order.userId;
  useEffect(() => {
    const fechorder = async () => {
      const res = await axios.get(`/users/getorderbyid/${path}`);
      const sellerdata = await axios.get(`/users/find/${res.data.userId}`);
      console.log(currentUser);

      setOrder(res.data);
    };
    fechorder();
  }, [path]);
  const handleChange = (e) => {
    setSales((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

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

    try {
      const res = await axios.put(
        "/users/buysomethingnow/" + path,

        {
          sellerid,
          buyerId,
          sales,
        }
      );
      setSuccess(true);
      setSales(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
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
              width: "50%",
              marginLeft: { lg: "20%", md: "20", sm: "15%", xs: "15%" },
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
                  width: "70%",
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

              <Box
                sx={{
                  width: "50%",
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
                >
                  <Typography
                    sx={{
                      color: "#7743DB",
                    }}
                    onClick={()=> navigate("/dashboard")}
                  >
                    Cencel
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Signup;
