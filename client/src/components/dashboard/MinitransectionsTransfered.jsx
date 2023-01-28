import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import sendMo from "../storedashboard/images/sendMo.png";
import { useState } from "react";
const MinitransectionsRecived = ({ sends }) => {
  const [more, setMore] = useState(false);

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
              {sends.receiverNmae}
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
            {new Date(sends.createAt).toDateString()}
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
            - ${sends.amountsent}
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
            <Typography>Amount : ${sends.amountsent}</Typography>
            <Typography>
              Date : {new Date(sends.createAt).toDateString()}{" "}
            </Typography>
            <Typography>Name : {sends.receiverNmae}</Typography>
            <Typography>Acc no :{sends.reciverAc} </Typography>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default MinitransectionsRecived;
