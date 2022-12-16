import React from "react";
import { borderColor, Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import Nav from "../components/home/Nav";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../Redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassowrd] = useState("");
  const [code, setCode] = useState();
  const [change, setChange] = useState(false);
  const [newone, setOneone] = useState(false);
  const [user, setUser] = useState({});

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/SendOtb", { email });
      setChange(true);
    } catch (err) {
      console.log(err);
      dispatch(loginFailure(err));
    }
  };

  const handleupdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/verify", {
        email,

        code,
      });

      setUser(res.data);
      setOneone(true);

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const redirectToAbout = () => {
    navigate(`/Updatepassword/${useriD}`, {
      state: {
        userdata: user,
      },
    });
  };

  const useriD = user._id;
  const datas = user;
  console.log(datas);
  console.log(useriD);
  const chanepassword = async (e) => {
    e.preventDefault();
    if (password) {
      try {
        const res = await axios.put(`/users/${useriD}`, {
          Id: useriD,
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
            {newone ? (
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
                  label="Password"
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
                  label="confrim password"
                  type={"password"}
                  variant="outlined"
                  sx={{
                    width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                    marginTop: "10px",
                    borderRadius: "30px",
                    textTransform: "unset !important",
                  }}
                  onChange={(e) => setconfirmpassowrd(e.target.value)}
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
                    {" "}
                    Reset Password
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
                      Log in
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ) : (
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
                    Reset Password
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
                      Log in
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}
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
                    width: "60%",
                    marginTop: "10px",

                    marginLeft: "-70px",
                    backgroundColor: "#7743DB",
                    color: "#fff",
                  }}
                >
                  Reset Password
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
                    Log in
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Login;
