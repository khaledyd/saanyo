import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PaymentIcon from "@mui/icons-material/Payment";
import ReplyIcon from "@mui/icons-material/Reply";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
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
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "42px",
              color: "#3C4263",
            }}
          >
            Overview
          </Typography>
          <Box>
            <Button
              onClick={() => navigate("/Sendmoney")}
              sx={{
                width: "max-content",
                padding: "10px 30px",
                backgroundColor: "#7743DB",
                borderRadius: "10px",
                color: "white",
                textTransform: "unset !important",
                marginRight: "10px",
              }}
            >
              <PaymentIcon
                sx={{
                  marginRight: "10px",
                  color: "#fff",
                }}
              />
              Send Money
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
              Share Id
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "30px",
          }}
        >
          <Typography
            sx={{
              fontSize: "13px",

              color: "#3C4263",
              latterSpacing: "1.5px",
            }}
          >
            Today's Blance
          </Typography>
          <Typography
            sx={{
              fontSize: "40px",

              color: "#3C4263",
              latterSpacing: "1.5px",
            }}
          >
            10,000
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
