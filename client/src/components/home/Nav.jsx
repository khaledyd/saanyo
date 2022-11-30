import React from "react";
import { Box, Button, CardMedia, Typography } from "@mui/material";

const Nav = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      sx={{
        width: "100%",
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
          }}
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
        <Button
          sx={{
            backgroundColor: "#F7F7F7",
            color: "#7743DB",
            width: "100px",
            marginRight: "20px",
          }}
        >
          Log in
        </Button>
        <Button
          sx={{
            backgroundColor: "#7743DB",
            color: "#fff",
            width: "100px",
          }}
        >
          Log in
        </Button>
      </Box>
    </Box>
  );
};

export default Nav;
