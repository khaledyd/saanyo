import React from "react";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import logo from ".././storedashboard/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Nav = () => {
  const [menu, setMenu] = useState(true);
  const [submenu, setsubmenu] = useState(true);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Box
      display={"flex"}
      sx={{
        width: "100%",
        marginBottom: "10px",
        marginTop: "20px",

        justifyContent: {
          lg: "space-between",
          md: "space-between",
          sm: "space-between",
          xs: "space-between",
        },
        alignItems: {
          lg: "start",
          md: "start",
          sm: "start",
          xs: "start",
        },
      }}
    >
      <Box
        display={"flex"}
        sx={{
          width: "80%",
          alignItems: {
            lg: "start",
            md: "start",
            sm: "start",
            xs: "start",
          },
          flexDirection: {
            lg: " row",
            md: "row",
            sm: "column",
            xs: "column",
          },
        }}
      >
        <Box
          sx={{
            width: "20%",
            marginLeft: "20px",
            alignItems: {
              lg: "start",
              md: "start",
              sm: "start",
              xs: "start",
            },
          }}
          display={"flex"}
        >
          <MenuIcon
            onClick={() => setMenu(!menu)}
            sx={{
              fontSize: "40px",
              display: {
                lg: "none",
                md: "none",
                sm: "block",
                xs: "block",
              },
              cursor: "pointer",
            }}
          />

          <img
            src={logo}
            alt="logo"
            style={{
              width: "80px",
              height: "80px",
              cursor: "pointer",
              alignSelf: "center",
            }}
            onClick={() => navigate("/")}
          />
        </Box>
        {menu ? (
          <Box
            display={"flex"}
            sx={{
              width: "60%",
              color: "#3F3D56",
              fontFamily: "Poppins, sans-serif",
              flexDirection: {
                lg: " row",
                md: "row",
                sm: "column",
                xs: "column",
              },
       
              
            }}
          >
            <Typography
              sx={{
                padding: "10px 20px",
                fontSize:"20px"
              }}
            >
              Producrs
            </Typography>
            <Typography
              sx={{
                padding: "10px 20px",
                fontSize:"20px"
              }}
            >
              About us
            </Typography>
            <Typography
              sx={{
                padding: "10px 20px",
                fontSize:"20px"
              }}
            >
              Help
            </Typography>
            <Typography
              sx={{
                padding: "10px 20px",
                fontSize:"20px"
              }}
            >
              Features
            </Typography>
          </Box>
        ) : (
          ""
        )}
      </Box>

      <Box
        sx={{
          width: { md: "20%", sm: "35%" },
          display: "flex",
          alignItems: "center",
          marginRight: "20px",
          flexDirection: {
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
        }}
      >
        {currentUser ? (
          <Button
            sx={{
              backgroundColor: "#F7F7F7",
              color: "#7743DB",
              width: "100x",
              marginRight: "20px",
            }}
            onClick={() => navigate("/dashboard")}
          >
            {currentUser.displayName}
          </Button>
        ) : (
          <Button
            sx={{
              backgroundColor: "#F7F7F7",
              color: "#7743DB",
              width: "100px",
              marginRight: { lg: "20px", md: "20px", sm: "0px", xs: "0px" },
            }}
            onClick={() => navigate("/login")}
          >
            Log in
          </Button>
        )}
        {currentUser ? (
          <Button
            sx={{
              backgroundColor: "#7743DB",
              color: "#fff",
              width: "100px",
              marginTop: { lg: "0px", md: "0px", sm: "10px", xs: "10px" },
            }}
          >
            <NotificationsIcon />
          </Button>
        ) : (
          <Button
            sx={{
              backgroundColor: "#7743DB",
              color: "#fff",
              width: "100px",
              marginTop: { lg: "0px", md: "0px", sm: "10px", xs: "10px" },
            }}
            onClick={() => navigate("/signup")}
          >
            Sign up
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Nav;
