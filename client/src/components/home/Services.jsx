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
        width: "100%",
        marginBottom:"100px"
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
          justifyContent: "space-between",
          marginTop: "100px",
        }}
      >
        <Box
          sx={{
            width: "33%",
            marginLeft: "30px",
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
              width: "50%",
              color: "#3F3D56",
              fontSize: "13px",
              marginTop: "7px",
            }}
          >
            Add the product details And create the product Url all the
            transactions Of that order you canManage with that single url
          </Typography>
        </Box>
        <Box
          sx={{
            width: "33%",
          }}
        >
          <Box>
            <img
              src="./images/send.png"
              alt="send"
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
              width: "50%",
              color: "#3F3D56",
              fontSize: "13px",
              marginTop: "7px",
            }}
          >
            With simple steps send a money With saanyors and receive money From
            them{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "33%",
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
              width: "50%",
              color: "#3F3D56",
              fontSize: "13px",
              marginTop: "7px",
            }}
          >
            Your payment getaway with your Local money system just buy with
            Saanyo , your payment gateway Partner
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
