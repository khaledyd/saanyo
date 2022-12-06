import React from "react";
import { borderColor, Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Nav from "../components/home/Nav";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Signup = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  const buyerId = currentUser._id;
  const locations = useLocation();

  console.log(currentUser._id);

  const path = locations.pathname.split("/")[2];

  const [order, setOrder] = useState([]);
  const [quantity, setquantity] = useState("");
  
const quantitys = null
const tatls = quantitys * order.price
  const [sales, setSales] = useState([
    {
      quantity:  null,
      total:  tatls
    },
  ]);
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/users/purchase/${path}`, {
        buyerId,
        sales,
      });
      setOrder(res.data);
      console.log(order);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fechorder = async () => {
      const res = await axios.get(`/users/getorderbyid/${path}`);

      setOrder(res.data);

      console.log(res.data);
    };
    fechorder();
  }, [path]);
  const handleChange = (e) => {
    setSales((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <Box>
      <Nav />

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
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              type={"number"}
              variant="outlined"
              sx={{
                width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                marginTop: "10px",
              }}

              name="total"
              onChange={handleChange}
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
                onClick={handlesubmit}
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
                >
                  Cencel
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
