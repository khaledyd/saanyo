import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PaymentIcon from "@mui/icons-material/Payment";
import ReplyIcon from "@mui/icons-material/Reply";
import InventoryIcon from "@mui/icons-material/Inventory";
import TitleIcon from "@mui/icons-material/Title";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const Nav = () => {
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
          <Box
            sx={{
              width: "70%",
              height: "150px",
              backgroundColor: "#3C4263",
              marginRight: "20px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <Box
              display={"flex"}
              sx={{
                color: "#fff",
                alignItems: "center",
              }}
            >
              {" "}
              <Box
                sx={{
                  width: "max-content",
                  padding: "5px 10px",
                  backgroundColor: "#fff",
                  borderRadius: "3px",
                  color: "#7743DB",
                }}
              >
                {" "}
                <InventoryIcon />
              </Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginLeft: "10px",
                }}
              >
                Id: 12111232
              </Typography>
            </Box>
            <Box
              display={"flex"}
              sx={{
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "max-content",
                  padding: "5px 10px",
                  backgroundColor: "#fff",
                  borderRadius: "3px",
                  color: "#7743DB",
                }}
              >
                {" "}
                <TitleIcon />
              </Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginLeft: "10px",
                  color: "#fff",
                }}
              >
                Title: cake
              </Typography>
            </Box>
            <Box
              display={"flex"}
              sx={{
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "max-content",
                  padding: "5px 10px",
                  backgroundColor: "#fff",
                  borderRadius: "3px",
                  color: "#7743DB",
                }}
              >
                {" "}
                <LocalOfferIcon />
              </Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginLeft: "10px",
                  color: "#fff",
                }}
              >
                Price: $100
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "10px",
            marginBottom:"30px"
          }}
        >
          <Typography
            sx={{
              fontSize: "13px",

              color: "#3C4263",
              latterSpacing: "1.5px",
            }}
          >
            total Revenue from this order
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
