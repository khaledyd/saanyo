import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import sendMo from "../storedashboard/images/sendMo.png";
import { useState } from "react";
const MinitransectionsRecived = ({ orders }) => {
  const [more, setMore] = useState(false);
  const sales = orders.sales;


  const handlechange = () => {
    setMore(!more);
  };
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          md: "100%",
          lg: "100%",
          sm: "100%",
        },
        height: "max-content",
      }}
    >
      {sales.map((sale) => {
        return (
          <Box>
            <Box
              display={"flex"}
              sx={{
                alignItems: "center",
                width: "90%",
                justifyContent: "space-between",
                backgroundColor: "#F5F5F5",
                height: "max-content",
                paddingBottom: "10px",
                marginLeft: "5%",
                marginTop: "30px",
                borderRadius: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  display={"flex"}
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={sendMo}
                    alt="recive"
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#7743DB",
                      marginLeft: "10px",
                    }}
                  >
                    Order Id :{orders._id}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    marginLeft: "60px",
                    marginTop: "-7px",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                  }}
                ></Typography>
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#7743DB",
                    fontWeight: "bold",
                  }}
                ></Typography>
              </Box>
              <Box
                sx={{
                  marginRight: "10px",
                }}
              >
                <KeyboardArrowDownIcon
                  sx={{
                    color: "#7743DB",
                    fontWeight: "bold",
                    fontSize: "40px",
                  }}
                />
                <Typography
                  onClick={handlechange}
                  sx={{
                    marginTop: "-10px",
                    cursor: "pointer",
                  }}
                >
                  more
                </Typography>
              </Box>
            </Box>
            {more ? (
              <Box
                display={"flex"}
                sx={{
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  width: "90%",
                  backgroundColor: "#F5F5F5",
                  height: "max-content",
                  paddingBottom: "10px",
                  marginLeft: "5%",
                  marginTop: "5px",
                  borderRadius: "10px",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    paddingLeft: "20px",
                  }}
                >
                           <Typography>quantity : ${sale.amountPayed} </Typography>
                  <Typography>quantity : {sale.quantity} </Typography>
                  <Typography>Amount :${sale.total} </Typography>
                  <Typography>
                    Date: {new Date(sale.createAt).toDateString()}
                  </Typography>
                  <Typography>Name : {sale.buyernme} </Typography>
                  <Typography>Phone number : {sale.buyerPhoneNumber} </Typography>
                  <Typography>Phone number : {sale.buyerAddress} </Typography>

                
                </Box>
              </Box>
            ) : (
              ""
            )}
          </Box>
        );
      })}
      {/* */}
    </Box>
  );
};

export default MinitransectionsRecived;
