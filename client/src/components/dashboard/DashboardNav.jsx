import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PaymentIcon from "@mui/icons-material/Payment";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import StoreIcon from "@mui/icons-material/Store";

const Nav = ({ userdata, sidebar }) => {

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
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
                sm: "row",
                lg: "row",
              },
            }}
          >
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
                "&:hover": {
                  backgroundColor: "#3C4263",
                  color: "#fff",
                },
                cursor: "pointer",
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
                marginTop: {
                  xs: "10px",
                  sm: "0px",
                  lg: "0px",
                  md: "0px",
                },
                "&:hover": {
                backgroundColor: "#3C4263",
                color: "#fff",
              },
              }}
              onClick={() => navigate("/StoreDashboard")}
            >
              <StoreIcon
                sx={{
                  marginRight: "10px",
                  color: "#7743DB",
                }}
              />
              about the stores
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
            ${userdata}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
