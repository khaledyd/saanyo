import React from "react";
import { borderColor, Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import Nav from "../components/home/Nav";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../Redux/userSlice";
import { useLocation } from "react-router-dom";

const Login = () => {
  const locations = useLocation();
  console.log(locations);
  const useriD = locations.state.userdata._id;
  console.log(useriD);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [confirmPassword, setConfrimpasword] = useState("");
  const [password, setPassword] = useState("");

  const chanepassword = async (e) => {
    e.preventDefault();
    if (password) {
      try {
        const res = await axios.put(`/users/${useriD}`, {
          password: password,
        });
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("passwrod and confiirm password must be same");
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
            variant="h4"
            sx={{
              color: "#7743DB",
              marginBottom: "40px",
            }}
          >
            change password
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
              label="password"
              type={"password"}
              variant="outlined"
              sx={{
                width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                marginTop: "10px",
                borderRadius: "30px",
                textTransform: "unset !important",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              type={"password"}
              label="confrim password"
              variant="outlined"
              sx={{
                width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                marginTop: "10px",
              }}
              onChange={(e) => setConfrimpasword(e.target.value)}
            />
            <Box
              sx={{
                width: "50%",
              }}
            >
              <Button
                onClick={chanepassword}
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
                <Typography
                  sx={{
                    color: "##3F3D56",
                  }}
                >
                  Sing up
                </Typography>
                <Typography
                  sx={{
                    color: "#3F3D56",
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

export default Login;
