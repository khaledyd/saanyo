import React from "react";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      sx={{
        width: "100%",
        marginTop: "30px",
      }}
    >
      <Box
        sx={{
          width: "20%",
        }}
      >
        <img
          src="./images/logo.png"
          alt="logo"
          style={{
            width: "100px",
            height: "100px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        />
      </Box>
      <Box
        display={"flex"}
        sx={{
          width: "60%",
          color: "#3F3D56",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <Typography
          sx={{
            padding: "10px 20px",
          }}
        >
          Producrs
        </Typography>
        <Typography
          sx={{
            padding: "10px 20px",
          }}
        >
          About us
        </Typography>
        <Typography
          sx={{
            padding: "10px 20px",
          }}
        >
          Help
        </Typography>
        <Typography
          sx={{
            padding: "10px 20px",
          }}
        >
          Features
        </Typography>
      </Box>
      <Box
        sx={{
          width: "20%",
        }}
      >
        {currentUser ? (
          <Button
            sx={{
              backgroundColor: "#F7F7F7",
              color: "#7743DB",
              width: "100px",
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
              marginRight: "20px",
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
