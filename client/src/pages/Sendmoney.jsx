import React from "react";
import { borderColor, Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Nav from "../components/home/Nav";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import DoneIcon from "@mui/icons-material/Done";
import { axiosInstance } from "../config";

const Signup = () => {
  const { currentUser } = useSelector((state) => state.user);

  const senderId = currentUser._id;
  const locations = useLocation();

  const [seuccess, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [iderror, setiderror] = useState(false);

  const [amountsent, setamountsent] = useState(null);
  const [receiverNmae, setreceiverNmae] = useState();
  const [id, setid] = useState("");
  const [reciverAc, setreciverAc] = useState(id);
  const [userdata, setuserdata] = useState("");
  const [sender, setSender] = useState({});

  useEffect(() => {
    const fechorder = async () => {
      const reciverdata = await axiosInstance.get(`/users/find/${id}`, {
        withCredentials: true,
      });
      const fechuser = await axiosInstance.get(`/users/find/${id}`, {
        withCredentials: true,
      });
      setuserdata(fechuser.data._id);
      const current = await axiosInstance.get(
        `/users/find/${currentUser._id}`,
        {
          withCredentials: true,
        }
      );
      setSender(current.data);
    };
    fechorder();
  }, [id, currentUser._id]);

  const balances = currentUser.wallet.balance;

  const handlesubmit = async (e) => {
    e.preventDefault();
    const wallet = {
      sends: [
        {
          amountsent: Number(amountsent),
          receiverNmae: receiverNmae,
          id,
          reciverAc: reciverAc,
        },
      ],
    };

    if (sender.wallet.balance < amountsent) {
      setError(true);
    } else if (id !== userdata) {
      setiderror(true);
    } else {
      try {
        const res = await axiosInstance.put(`/users/sendMoney/${senderId}`, {
          id,
          wallet,
        });
        setSuccess(true);
     
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
              Send Money
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
                label="Reciver Account Number"
                type={"text"}
                variant="outlined"
                sx={{
                  width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                  marginTop: "10px",
                }}
                onChange={(e) => setid(e.target.value)}
              />
              {iderror && (
                <Typography
                  sx={{
                    width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                    color: "red",
                  }}
                >
                  account does not exist
                </Typography>
              )}
              <TextField
                id="outlined-basic"
                label="amount"
                type="number"
                variant="outlined"
                sx={{
                  width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                  marginTop: "10px",
                }}
                onChange={(e) => setamountsent(e.target.value)}
              />
              {error && (
                <Typography
                  sx={{
                    width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                    color: "red",
                  }}
                >
                  insufficient funds
                </Typography>
              )}

              <TextField
                id="outlined-basic"
                label="name of the reciver"
                type={"text"}
                variant="outlined"
                sx={{
                  width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                  marginTop: "10px",
                  color: "red",
                }}
                name="buyernme"
                onChange={(e) => setreceiverNmae(e.target.value)}
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
