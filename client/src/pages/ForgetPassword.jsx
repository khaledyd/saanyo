import React from "react";
import { borderColor, Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import Nav from "../components/home/Nav";
import {axiosInstance} from "../config"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { loginFailure, loginStart, loginSuccess } from "../Redux/userSlice";
import { useDispatch } from "react-redux";


const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [code, setCode] = useState();
  const [change, setChange] = useState(false);
  const [newone, setOneone] = useState(false);
  const [user, setUser] = useState({});
  

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/SendOtb", { email });
      setChange(true);
    } catch (err) {
  
      dispatch(loginFailure(err));
 
    }
  };

  const handleupdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/verify", {
        
        email,

        code,
      });
      setUser(res.data);
      dispatch(loginSuccess(res.data));
      setOneone(true);
      navigate("/Updatepassword");


    } catch (err) {

      setError(true);
    }
  };

  const useriD = user._id;
  const datas = user;

  const chanepassword = async (e) => {
    e.preventDefault();
    if (password) {
      try {
        const res = await axiosInstance.put(`/users/${useriD}`, {
          withCredentials: true,
          Id: useriD,
          password: password,
        });
  
      } catch (err) {
   
      }
    } else {
 
    }
  };
  return (
    <Box>
      <Nav />

      <Box
        sx={{
          marginTop: "3%",
          width: "100%",
        }}
      >
        {change ? (
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
                marginBottom: "30px",
              }}
            >
              Forget Password
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
                label="Email"
                value={email}
                type={"email"}
                disabled
                variant="outlined"
                sx={{
                  width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                  marginTop: "10px",
                  borderRadius: "30px",
                  textTransform: "unset !important",
                  display: "none",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Code"
                type={"number"}
                variant="outlined"
                sx={{
                  width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                  marginTop: "10px",
                  borderRadius: "30px",
                  textTransform: "unset !important",
                }}
                onChange={(e) => setCode(e.target.value)}
              />
              {error && (
                <Typography
                  sx={{
                    width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                    color: "red",
                  }}
                >
                  Wrong code
                </Typography>
              )}

              <Box
                sx={{
                  width: "50%",
                }}
              >
                <Button
                  onClick={handleupdate}
                  sx={{
                    width: "60%",
                    marginTop: "10px",

                    marginLeft: "-70px",
                    backgroundColor: "#7743DB",
                    color: "#fff",
                  }}
                >
                  {" "}
                  Enter The code
                </Button>
              </Box>
            </Box>
          </Box>
        ) : (
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
                marginBottom: "30px",
              }}
            >
              Forget Password
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
                label="Email"
                type={"email"}
                variant="outlined"
                sx={{
                  width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                  marginTop: "10px",
                  borderRadius: "30px",
                  textTransform: "unset !important",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Box
                sx={{
                  width: "50%",
                }}
              >
                <Button
                  onClick={handlesubmit}
                  sx={{
                    width: "max- content",
                    marginTop: "10px",

                    marginLeft: "-70px",
                    backgroundColor: "#7743DB",
                    color: "#fff",
                  }}
                >
                  Reset Password
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Login;
