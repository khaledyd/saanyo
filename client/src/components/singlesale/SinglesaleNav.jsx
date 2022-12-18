import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import InventoryIcon from "@mui/icons-material/Inventory";
import TitleIcon from "@mui/icons-material/Title";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import { useLocation } from "react-router-dom";

const Nav = ({ order, orderbalance }) => {


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "95%",
        marginLeft: "5%",
      }}
    >
      <Box>
        <Box
          sx={{
            width: {
              lg: "max-content",
              sm: "300px",
              xs: "300px",
              md: "max-content",
            },
            padding: "30px 30px",
            height: "150px",
            backgroundColor: "#3C4263",
            marginRight: "30px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: {
              xs: "flex-start",
              sm: "flex-start",
              md: "center",
              lg: "center",
            },
            borderRadius: "10px",
            flexDirection: {
              lg: "row",
              sm: "column",
              xs: "column",
              md: "row",
            },
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
                marginRight: "30px",
              }}
            >
              {order._id}
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
                marginRight: "30px",
              }}
            >
              {order.productTitle}
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
              ${order.price}
            </Typography>
          </Box>
        </Box>
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
        </Box>
        <Box
          sx={{
            marginTop: "10px",
            marginBottom: "30px",
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
            ${orderbalance}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
