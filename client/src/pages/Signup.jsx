import React from "react";
import {  Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Nav from "../components/home/Nav";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [displayName, setdisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      confirmPassword,
      displayName,
    };
    try {
      const res = await axios.post("/auth/signup", data);
      console.log(res.data);
      navigate("/login");
    } catch (err) {
      console.log(err);
      setError(true)
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
            variant="h3"
            sx={{
              color: "#7743DB",
            }}
          >
            Sign Up
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
            <TextField
              id="outlined-basic"
              type={"password"}
              label="confirm password"
              variant="outlined"
              sx={{
                width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                marginTop: "10px",
              }}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Box
              sx={{
                width: "50%",
              }}
            >
              {error && (
                <Typography
                  sx={{
                    marginTop: "5px",
                    color: "red",
                  }}
                >
                  password and confirm password must be same
                </Typography>
              )}
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  marginTop: "10px",
                  backgroundColor: "#7743DB",
                }}
                onClick={handlesubmit}
              >
                sign up
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
                  Sing up
                </Typography>
                <Typography
                  sx={{
                    color: "#7743DB",
                  }}
                >
                  Forget password
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
