import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PaymentIcon from "@mui/icons-material/Payment";
import ReplyIcon from "@mui/icons-material/Reply";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Nav = ({ handleOrder, orders, user }) => {
  const navigate = useNavigate();
  const allorders = orders;
  let totalsales = [];
  for (let i = 0; i < allorders.length; i++) {
    const newone = allorders[i].sales.length;
    totalsales.push(newone);
  }

  const initialValue = 0;
  const finalsales = totalsales.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "90%",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "50px",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
            },
            marginLeft: "50px",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                lg: "50%",
                md: "50%",
              },
              height: "max-content",
              backgroundColor: "#3C4263",
              borderRadius: "20px",
              padding: "30px 30px",
              marginRight: "20px",
              marginLeft: "20px",
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
                  Store Balance
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
                  ${user}
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
                  total Orders
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
                  {orders.length}
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
                  Total sales
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
                  {finalsales}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "25px",
                    color: "#FFF",
                    marginBottom: "10px",
                    fontFamily: "Poppins, sans-serif",
                    marginLeft: "20px",
                  }}
                ></Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: {
                xs: "10px",
                sm: "10px",
                lg: "0px",
                md: "0px",
              },
            }}
          >
            <Button
              sx={{
                width: "max-content",
                padding: "10px 30px",
                backgroundColor: "#7743DB",
                borderRadius: "10px",
                color: "white",
                textTransform: "unset !important",
                marginRight: "10px",
                marginTop: {
                  xs: "10px",
                  sm: "10px",
                  lg: "0px",
                  md: "0px",
                },
                "&:hover": {
                backgroundColor: "#3C4263",
                color: "#fff",
              },
              }}
              onClick={handleOrder}
            >
              <PaymentIcon
                sx={{
                  marginRight: "10px",
                  color: "#fff",
                }}
              />
              Ctreate Order
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
                  sm: "10px",
                  lg: "0px",
                  md: "0px",
                },
                "&:hover": {
                backgroundColor: "#3C4263",
                color: "#fff",
              },
              }}
              onClick={() => navigate("/orders")}
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
