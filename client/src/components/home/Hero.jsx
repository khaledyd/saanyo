import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Hero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "500px",
        backgroundColor: "#F7F7F7",
        display: "flex",
      }}
    >
      <Box
        display={"flex"}
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",

          flexDirection: "column",

        }}
      >
        <Typography
          sx={{
            fontSize: "53px",
            lineHeight: "60px",
            width: "90%",
            fontFamily: "Noticia Text, serif",
            color: "#3F3D56",
            padding: "20px 30px",
            fontWeight: "bold",
          }}
        >
          With the{" "}
          <strong
            style={{
              color: "#7743DB",
            }}
          >
            minimum
          </strong>{" "}
          effort but the highly effective{" "}
          <strong
            style={{
              color: "#7743DB",
            }}
          >
            experiences
          </strong>
          !!!
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",

            width: "56%",
            paddingTop: "40px",
            fontFamily: "Poppins, sans-serif",
            color: "#3F3D56",
            padding: "20px 30px"
          }}
        >
          Pay with Sanyo and taste{" "}
          <strong
            style={{
              color: "#7743DB",
            }}
          >
            the difference the greatest experience
          </strong>{" "}
          Is the thing you never tested yet !!
        </Typography>
        <Button  sx={{
            width:"30%",
            backgroundColor:"#7743DB",
            color:"#fff",
            marginTop:"10px",
            fontFamily: "Poppins, sans-serif",
            textTransform: "unset !important",
            marginLeft: "30px",
    
        }}>get started</Button>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        
        }}
      >
        <img
          src="./images/hero.png"
          alt="hero"
          style={{
            width: "100%",
            height: "100%",
        
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
