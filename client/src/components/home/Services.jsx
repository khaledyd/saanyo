import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Services = () => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      sx={{
        marginTop: "100px",
        width: {
          lg: "100%",
          md: "100%",
          xs: "100%",
          sm: "100%",
        },
        marginBottom: "100px",
        height: "max-content",
      }}
    >
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#3F3D56",
            fontSize: "49px",
            fontWeight: "bold",
          }}
        >
          Services
        </Typography>
      </Box>
      <Box
        display={"flex"}
        sx={{
          width: "100%",
          height: "max-content",
          justifyContent: {
            lg: "space-between",
            md: "space-between",
            sm: "center",
            xs: "center",
          },
          alignItems: {
            lg: "center",
            sm: "center",
            xs: "center",
            md: "center",
          },
          marginTop: "100px",
          flexDirection: {
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
        }}
      >
        <Box
          sx={{
            width: {
              lg: "33%",
              md: "33%",
              sm: "60%",
              xs: "60%",
            },

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "max-content",
          }}
        >
          <Box>
            <img
              src="./images/create.png"
              alt="create"
              style={{
                width: "100px",
                height: "100px",
              }}
            />
          </Box>
          <Typography
            sx={{
              color: "#3F3D56",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
              marginTop: "7px",
            }}
          >
            Create Order
          </Typography>
          <Typography
            sx={{
              width: {
                lg: "50%",
                md: "50%",
                sm: "60%",
                xs: "60%",
              },
              color: "#3F3D56",
              fontSize: "20px",
              marginTop: "7px",
              height: "max-content",
            }}
          >
            Add the product details and create the product URL for all the You
            can manage all transactions for that order through one URL.
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              lg: "33%",
              md: "33%",
              sm: "60%",
              xs: "60%",
            },
            marginTop: {
              lg: "0px",
              md: "0px",
              sm: "30px",
              xs: "30px",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <img
              src="./images/send.png"
              alt="buy"
              style={{
                width: "100px",
                height: "100px",
              }}
            />
          </Box>
          <Typography
            sx={{
              color: "#3F3D56",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
              marginTop: "7px",
            }}
          >
            Send money
          </Typography>
          <Typography
            sx={{
              width: {
                lg: "50%",
                md: "50%",
                sm: "60%",
                xs: "60%",
              },
              color: "#3F3D56",
              fontSize: "20px",
              marginTop: "7px",
              height: "max-content",
            }}
          >
            Send money to Saanyors and receive money from them in a few simple
            steps. A fast way to experience
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              lg: "33%",
              md: "33%",
              sm: "60%",
              xs: "60%",
            },
            marginTop: {
              lg: "0px",
              md: "0px",
              sm: "30px",
              xs: "30px",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <img
              src="./images/buy.png"
              alt="buy"
              style={{
                width: "100px",
                height: "100px",
              }}
            />
          </Box>
          <Typography
            sx={{
              color: "#3F3D56",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
              marginTop: "7px",
            }}
          >
            Buy with it
          </Typography>
          <Typography
            sx={{
              width: {
                lg: "50%",
                md: "50%",
                sm: "60%",
                xs: "60%",
              },
              color: "#3F3D56",
              fontSize: "20px",
              marginTop: "7px",
              height: "max-content",
            }}
          >
            Your payment will be processed using the local money system. Buy
            with Saanyo, your payment gateway partner.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
