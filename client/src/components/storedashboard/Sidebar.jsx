import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/userSlice";
import { useDispatch } from "react-redux";


const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        height: "max-content",
      }}
    >
      <Box
        sx={{
          marginLeft: "30px",
          marginTop: "70px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer"
            
          }}
          onClick={() => navigate("/")}
        >
          <img
            src="./images/home.png"
            alt="home"
            style={{
              width: "40px",
              height: "40px",
            }}
          />
          <Typography
            sx={{
              marginLeft: "10px",
              color: "#3C4263",
              fontSize: "18px",

              fontFamily: "Poppins, sans-serif",
            }}
          >
            Home
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            cursor:"pointer"
          }}
          onClick={() => navigate("/dashboard")}

        >
          <img
            src="./images/transec.png"
            alt="home"
            style={{
              width: "40px",
              height: "40px",
            }}
          />
          <Typography
            sx={{
              marginLeft: "10px",
              color: "#3C4263",
              fontSize: "18px",

              fontFamily: "Poppins, sans-serif",
            }}
          >
            Transections
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
          onClick={() => navigate("/settings")}
        >
          <img
            src="./images/settings.png"
            alt="settings"
            style={{
              width: "40px",
              height: "40px",
              cursor: "pointer",
            }}
          />
          <Typography
            sx={{
              marginLeft: "10px",
              color: "#3C4263",
              fontSize: "18px",
              cursor: "pointer",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Settings
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <img
            src="./images/help.png"
            alt="help"
            style={{
              width: "40px",
              height: "40px",
            }}
          />
          <Typography
            sx={{
              marginLeft: "10px",
              color: "#3C4263",
              fontSize: "18px",

              fontFamily: "Poppins, sans-serif",
            }}
          >
            Help
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "50px",
          marginLeft: "5%",
          width: "90%",
          height: "150px",
          backgroundColor: "#3C4263",
          borderRadius: "20px",
        }}
      >
        <Typography
          sx={{
            width: "70%",
            fontSize: "12px",
            padding: "20px 20px",
            fontFamily: "Poppins, sans-serif",
            color: "#fff",
            letterSpacing: "1.5px",
          }}
        >
          Check the updates And latest products being Released
        </Typography>
        <Button
          sx={{
            backgroundColor: "#fff",
            color: "#3C4263",
            fontSize: "14px",
            marginLeft: "40px",
            width: "max-content",
            padding: "5px 20px",
            borderRadius: "10px",
          }}
        >
          Updates
        </Button>
      </Box>
      <Box
        sx={{
          marginTop: "50px",
          marginLeft: "5%",
          display: "flex",
          alignItems: "center",
          cursor: "pointer"
        }}
        onClick={() => dispatch(logout())}
      >
        <img src="./images/logout.png" alt="logout" />
        <Typography
          sx={{
            marginLeft: "10px",
            color: "#3C4263",
            fontSize: "18px",

            fontFamily: "Poppins, sans-serif",
          }}
        >
          {" "}
          Logout
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
