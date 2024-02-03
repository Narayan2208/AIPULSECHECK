import React from 'react'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import logo1 from "../assets/logo-left.29d686a3ec1469294cf2.png";
import logo2 from "../assets/download (1).png";

const Navbar = ({ children }) => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box className="navbarSecondBox">
          <img src={logo1} alt="logo"  />
          <p>AI Pulse Check</p>
          <img src={logo2} alt="logo"  />
        </Box>
      </Box>
      {children}
    </>
  );
};

export default Navbar