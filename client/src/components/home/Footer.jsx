import { Button, Typography } from "@mui/material";
import { Box, padding } from "@mui/system";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "200px",
          backgroundColor: "#3C4263",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #fff",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "30px",
            width: "35%",
            paddingLeft: "20px",
            paddingTop: "20px",
            fontFamily: "Noticia Text, serif",
          }}
        >
          {" "}
          Simple steps may lead you To your greatest experience
        </Typography>
        <Box
          sx={{
            marginTop: "20px",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#fff",
              width: "100px",
              fontSize: "17px",
              marginRight: "30px",
              textTransform: "unset !important",
            }}
          >
            Log in
          </Button>
          <Button
            sx={{
              backgroundColor: "#7743DB",
              width: "100px",
              fontSize: "17px",
              marginRight: "30px",
              color: "#FFF",
              textTransform: "unset !important",
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "250px",
          backgroundColor: "#3C4263",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "40%",
            paddingLeft: "30px",
          }}
        >
          <img
            src="./images/whitelogo.png"
            alt="foterlogo"
            style={{
              width: "70px",
              height: "70px",
              color: "#fff",
              marginTop: "20px",
            }}
          />
          <Typography
            sx={{
              width: "40%",
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              color: "#fff",
            }}
          >
            The fastest payment gateway For mobile money systems
          </Typography>
          <Box
            sx={{
              marginTop: "30px",
              color: "#FFF",
            }}
          >
            <FacebookIcon
              sx={{
                marginRight: "10px",
              }}
            />
            <TwitterIcon
              sx={{
                marginRight: "10px",
              }}
            />
            <LinkedInIcon />
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "20px",
            color: "#fff",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <Typography>Home</Typography>
          <Typography>What we offer</Typography>
          <Typography>The core services</Typography>
        </Box>
        <Box
          sx={{
            marginTop: "20px",
            color: "#fff",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <Typography>Careers</Typography>
          <Typography>Use cases</Typography>
          <Typography>Press</Typography>
          <Typography>Blogs</Typography>
        </Box>
        <Box
          sx={{
            marginTop: "20px",
            color: "#fff",
            fontFamily: "Poppins, sans-serif",
            marginRight: "20px",
          }}
        >
          <Typography>Contact us</Typography>
          <Typography>Help</Typography>
          <Typography>Sanyo wallet</Typography>
          <Typography>Apps</Typography>
          <Typography>Third party apps</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "50px",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            marginRight: "30px",
            color:"#3C4263"
          }}
        >
          Terms |
        </Typography>
        <Typography
          sx={{
            marginRight: "30px",
          }}
        >
          Privaciy |
        </Typography>
        <Typography
          sx={{
            marginRight: "30px",
          }}
        >
          copyWrite |
        </Typography>
        <Typography>© 2022 Sanyo All Rights Reserved</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
