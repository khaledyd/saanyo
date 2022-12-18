import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Hero = () => {

  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          lg: "100%",
          md: "100%",
        },
        height: "max-content",
        backgroundColor: "#F7F7F7",
        display: "flex",
        flexDirection: {
          lg: "row",
          md: "row",
          sm: "column-reverse",
          xs: "column-reverse",
        },
        alignItems: "center",
        paddingBottom: "30px",
      }}
    >
      <Box
        display={"flex"}
        sx={{
          width: {
            lg: "50%",
            md: "50%",
            sm: "100%",
            xs: "100%",
          },
          height: "100%",
          display: "flex",
          alignItem: {
            sm: "center",
            xs: "center",
          },
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: "40px",
              md: "40px",
              sm: "30px",
              xs: "30px",
            },
            lineHeight: "50px",
            width: {
              lg: "90%",
              md: "90%",
              sm: "50%",
              xs: "50%",
            },
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
            little
          </strong>{" "}
          effort but highly effective 
          <strong
            style={{
              color: "#7743DB",
            }}
          > experiences
          </strong>
          !!!
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",

            width: {
              lg: "56%",
              md: "56%",
              xs: "30%",
              sm: "30%",
            },
            paddingTop: "40px",
            fontFamily: "Poppins, sans-serif",
            color: "#3F3D56",
            padding: "20px 30px",
          }}
        >
          Pay with Saanyo and taste{" "}
          <strong
            style={{
              color: "#7743DB",
            }}
          >
            the difference. The greatest experience
          </strong>{" "}
          is the one you haven't tried yet !
        </Typography>
        <Button
          sx={{
            width: "30%",
            backgroundColor: "#7743DB",
            color: "#fff",
            marginTop: "10px",
            fontFamily: "Poppins, sans-serif",
            textTransform: "unset !important",
            marginLeft: "30px",
            "&:hover": {
              backgroundColor: "#3C4263",
              color: "#fff",
            },
          }}
          onClick={() => navigate("/dashboard")}
        >
          get started
        </Button>
      </Box>
      <Box
        sx={{
          width: {
            lg: "50%",
            md: "50%",
            sm: "100%",
            xs: "100%",
          },
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: {
            sm: "40px",
            xs: "40px",
          },
        }}
      >
        <img
          src="./images/hero.png"
          alt="hero"
          style={{
            width: "100%",
            height: "100%",
            alignSelf: "center",
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
