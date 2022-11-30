import { Box, Button, Typography } from "@mui/material";
import React from "react";

const HeroTwo = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "400px",
        backgroundColor: "#F5F5F5",
        marginBottom:"100px"
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
          width: "10%",
          backgroundColor: "#7743DB",
          color: "white",
          textTransform: "unset !important",
          marginLeft: "20px",
        }}
      >
        Get started
      </Button>
    </Box>
  );
};

export default HeroTwo;
