import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useState } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const MinitransectionsRecived = ({ salesdata }) => {
  const [more, setMore] = useState(false);

  const handlechange = () => {
    setMore(!more);
  };

  const allsales = "Hi";

  const newarray = allsales;
  let final = [];
  for (let i = 0; i < newarray.length; i++) {
    const newone = newarray[i].total;
    final.push(newone);
  }


  const initialValue = 0;
  const orderrevenue = final.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

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
      {salesdata &&
        salesdata.map((m) => {
          return (
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Box
                display={"flex"}
                sx={{
                  alignItems: "center",
                  width: "95%",
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
                    width: "33%",
                  }}
                >
                  <Box
                    display={"flex"}
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <AttachMoneyIcon />
                    <Typography
                      sx={{
                        color: "#7743DB",
                        marginLeft: "10px",
                        fontSize: "15px",
                      }}
                    >
                      amount: ${m.amountPayed}
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
                    sx={{
                      color: "#7743DB",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                  >
                    {" "}
                    quantity : {m.quantity}
                  </Typography>
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
                    <Typography>Total : ${m.total} </Typography>
                    <Typography>Name : {m.buyernme} </Typography>
                    <Typography>
                      phone Number : {m.buyerPhoneNumber}{" "}
                    </Typography>
                    <Typography>Address : {m.buyerAddress} </Typography>

                    <Typography>
                      DATE : {new Date(m.createdAt).toDateString()}
                    </Typography>
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
