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

  const senderId = currentUser._id;
  const locations = useLocation();

  const path = locations.pathname.split("/")[2];

  const [seuccess, setSuccess] = useState(false);

  const [amountsent, setamountsent] = useState(null);
  const [receiverNmae, setreceiverNmae] = useState();
  const [id, setid] = useState("");
  const [reciverAc, setreciverAc] = useState(id);

  useEffect(() => {
    const fechorder = async () => {
      const reciverdata = await axios.get(`/users/find/${id}`);
      console.log(reciverdata);
    };
    fechorder();
  }, [id]);

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
    const fechuser = await axios.get(`/users/find/${id}`);
    if (fechuser) {
      try {
        const res = await axios.put(`/users/sendMoney/${senderId}`, {
          id,
          wallet,
        });
        setSuccess(true);
        console.log(res.data.wallet.sends);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("did not receive");
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
              
              <TextField
                id="outlined-basic"
                label="name of the reciver"
                type={"text"}
                variant="outlined"
                sx={{
                  width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                  marginTop: "10px",
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
      )}
    </Box>
  );
};

export default Signup;
