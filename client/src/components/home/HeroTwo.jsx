import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const HeroTwo = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        height: "max-content",
        backgroundColor: "#F5F5F5",
        marginBottom:"100px",
        paddingBottom:"40px"
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            width: "50%",
            lineHeight: "50px",
            marginBottom: "20px",
            marginLeft: "20px",
            paddingTop: "50px",
          }}
        >
          Simple{" "}
          <strong
            style={{
              color: "#7643DB",
              fontWeight: "bold",
              fontSize: "40px",
            }}
          >
            steps
          </strong>{" "}
          may lead you To your greatest{" "}
          <strong
            style={{
              color: "#7643DB",
              fontWeight: "bold",
              fontSize: "40px",
            }}
          >
            experience
          </strong>{" "}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "17px",

            fontFamily: "Poppins, sans-serif",
            width: "25%",
            marginBottom: "20px",
            marginLeft: "20px",
          }}
        >
          Create order and track the balance of Your order , send your friends
          money With fewer clicks the ever{" "}
        </Typography>
      </Box>
      <Button
        sx={{
          width: "max-content",
          backgroundColor: "#7743DB",
          color: "white",
          textTransform: "unset !important",
          marginLeft: "20px",
          "&:hover": {
                backgroundColor: "#3C4263",
                color: "#fff",
              },

        }}
        onClick={() => navigate("/dashboard")}

      >
        Get started
      </Button>
    </Box>
  );
};

export default HeroTwo;
