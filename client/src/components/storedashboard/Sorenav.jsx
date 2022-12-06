import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PaymentIcon from "@mui/icons-material/Payment";
import ReplyIcon from "@mui/icons-material/Reply";
import { useState } from "react";

const Nav = ({ handleOrder, orders }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "90%",
        marginLeft: "10%",
      }}
    >
      <Box
        sx={{
          marginLeft: "80%",
          display: "flex",
          marginTop: "20px",
        }}
      >
        <img
          src="./images/notifications.png"
          alt="Notification"
          style={{
            marginRight: "10px",
          }}
        />
        <Button
          sx={{
            width: "max-content",
            padding: "5px 30px",
            backgroundColor: "#7743DB",
            borderRadius: "20px",
            color: "white",
            textTransform: "unset !important",
          }}
        >
          Khalid dahir
        </Button>
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Box
            sx={{
              width: "40%",
              height: "130px",
              backgroundColor: "#3C4263",
              borderRadius: "20px",
              padding: "30px 30px",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",

                color: "#FFF",
                marginBottom: "10px",
                fontFamily: "Poppins, sans-serif",
                letterSpacing: "2px",
              }}
            >
              Revenue Overview
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  marginRight: "50px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#FFF",
                    marginBottom: "10px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Today's balance
                </Typography>
                <Typography
                  sx={{
                    fontSize: "25px",
                    color: "#FFF",
                    marginBottom: "10px",
                    fontFamily: "Poppins, sans-serif",
                    marginLeft: "20px",
                  }}
                >
                  150
                </Typography>
              </Box>
              <Box
                sx={{
                  marginRight: "50px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#FFF",
                    marginBottom: "10px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  last month's balance
                </Typography>
                <Typography
                  sx={{
                    fontSize: "25px",
                    color: "#FFF",
                    marginBottom: "10px",
                    fontFamily: "Poppins, sans-serif",
                    marginLeft: "20px",
                  }}
                >
                  150
                </Typography>
              </Box>
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#FFF",
                    marginBottom: "10px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Total balance
                </Typography>
                <Typography
                  sx={{
                    fontSize: "25px",
                    color: "#FFF",
                    marginBottom: "10px",
                    fontFamily: "Poppins, sans-serif",
                    marginLeft: "20px",
                  }}
                >
                  150
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                width: "max-content",
                padding: "10px 30px",
                backgroundColor: "#7743DB",
                borderRadius: "10px",
                color: "white",
                textTransform: "unset !important",
                marginRight: "10px",
              }}
              onClick={handleOrder}
            >
              <PaymentIcon
                sx={{
                  marginRight: "10px",
                  color: "#fff",
                }}
              />
              Create Order
            </Button>

            <Button
              sx={{
                width: "max-content",
                padding: "10px 30px",
                backgroundColor: "#F5F5F5",
                borderRadius: "10px",
                color: "#3C4263",
                textTransform: "unset !important",
                marginRight: "10px",
                border: "1px solid ##3C4263",
              }}
            >
              <ReplyIcon
                sx={{
                  marginRight: "10px",
                  color: "#7743DB",
                }}
              />
              Orders
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
