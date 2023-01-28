import React from "react";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import Nav from "../components/home/Nav";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../Redux/userSlice";
import {axiosInstance} from "../config"


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    const data = {
      email,
      password,
    };
    try {
      const res = await axiosInstance.post("/auth/signin/", data);

      navigate("/");
      dispatch(loginSuccess(res.data));
    } catch (err) {

      dispatch(loginFailure(err));
      setError(true);
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
            Log in
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
            <TextField
              id="outlined-basic"
              type={"password"}
              label="password"
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
                onClick={handlesubmit}
                sx={{
                  width: "60%",
                  marginTop: "10px",

                  marginLeft: "-70px",
                  backgroundColor: "#7743DB",
                  color: "#fff",
                }}
              >
                Log in
              </Button>

              <Box
                justifyContent={"flex-start"}
                sx={{
                  marginLeft: "-70px",
                }}
              >
                {error && (
                  <Typography
                    sx={{
                      color: "red",
                      marginTop: "5px",
                    }}
                  >
                    wrong credentials
                  </Typography>
                )}

                <Typography
                  sx={{
                    color: "#3F3D56",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#3C4263",
                      color: "#fff",
                      width: "max-content",
                      padding: "1px 20px",
                      marginTop: "10px",
                    },
                  }}
                  onClick={() => navigate("/forgetpassword")}
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

export default Login;
