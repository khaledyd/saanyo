import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import sendMo from "../storedashboard/images/sendMo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MinitransectionsRecived = ({ orders }) => {
  const navigate = useNavigate();
  const [more, setMore] = useState(false);

  const handlechange = () => {
    setMore(!more);
  };

  const allsales = orders.sales;

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
  const redirectToAbout = () => {
    navigate(`/Singlesale/${orders._id}`, {
      state: {
        orderRevenue: orderrevenue,
      },
    });
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
      <Box>
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
            }}
          >
            <Box
              display={"flex"}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={redirectToAbout}
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
                sx={{
                  color: "#7743DB",
                  marginLeft: "10px",
                  fontSize: "15px",
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
              <Typography>number of sales :{orders.sales.length} </Typography>
              <Typography>Order Revenue : ${orderrevenue} </Typography>

              <Typography>
                DATE : {new Date(orders.createdAt).toDateString()}
              </Typography>
              <Typography>Name : </Typography>
              <Button
                sx={{
                  width: "max-content",
                  padding: "10px 30px",
                  backgroundColor: "#7743db",
                  color: "#fff",
                }}
                onClick={() => navigate(`/Purchase/${orders._id}`)}
              >
                Order Link
              </Button>
            </Box>
          </Box>
        ) : (
          ""
        )}
      </Box>

      {/* */}
    </Box>
  );
};

export default MinitransectionsRecived;
