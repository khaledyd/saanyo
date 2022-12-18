import { Button} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";


const Nav = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "90%",
        marginLeft:"10%"

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
      
    </Box>
  );
};

export default Nav;
