import React from "react";
import {  Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Nav from "../components/home/Nav";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Signup = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  const [displayName, setdisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (password) {
      try {
        const res = await axios.put(`/users/${currentUser._id}`, {
          userId: currentUser._id,
          email: email,
          password: password,
          displayName: displayName,
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Error");
    }
  };

  return (
    <Box>
      <Nav />

      <Box
        sx={{
          marginTop: "1%",
          width: "100%",
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
            padding: "100px 60px",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#7743DB",
              marginBottom: "20px",
            }}
          >
            Update Account
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
              label="Fullname"
              type={"email"}
              variant="outlined"
              sx={{
                width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                marginTop: "10px",
              }}
              onChange={(e) => setdisplayName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              type={"email"}
              variant="outlined"
              sx={{
                width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                marginTop: "10px",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              type={"password"}
              variant="outlined"
              sx={{
                width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                marginTop: "10px",
              }}
              onChange={(e) => setPassword(e.target.value)}
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
                update info
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
    </Box>
  );
};

export default Signup;
