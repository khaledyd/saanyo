import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Recive from "../storedashboard/images/srecive.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const MinitransectionsRecived = ({ receives }) => {
  const [more, setMore] = useState(false);
  const handlechange = () => {
    setMore(!more);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "max-content",
      }}
    >
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
              src={Recive}
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
              {receives.senderNmae}
            </Typography>
          </Box>
          <Typography
            sx={{
              marginLeft: "60px",
              marginTop: "-7px",
              fontFamily: "Poppins, sans-serif",
              fontSize: "12px",
            }}
          >
            {new Date(receives.createAt).toDateString()}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: "#7743DB",
              fontWeight: "bold",
            }}
          >
            ${receives.amountRecived}
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
            sx={{
              marginTop: "-10px",
              cursor: "pointer",
            }}
            onClick={handlechange}
          >
            more
          </Typography>
        </Box>
      </Box>
      {/* */}

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
            <Typography>Amount :${receives.amountRecived} </Typography>
            <Typography>
              Date : {new Date(receives.createAt).toDateString()}{" "}
            </Typography>
            <Typography>Name : {receives.senderNmae}</Typography>
            <Typography>Acc no : {receives.SenderuserId} </Typography>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default MinitransectionsRecived;
