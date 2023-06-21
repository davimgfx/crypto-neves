import { Box, Container, Typography } from "@mui/material";
import React from "react";
import icon1 from "../../imgs/icon1.png";
import icon2 from "../../imgs/icon2.png";
import Carousel from "./Carousel";
const Banner = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "3rem" }}>
        <img src={icon1} height={95} className="animation-card" />
        <Typography
          sx={{
            fontSize: { xl: "90px", md: "80px", sm: "60px", xs: "32px" },
            background: `linear-gradient(to right, #ffffff, #bdbdbd)`,
            backgroundClip: "text",
            color: "transparent",
            fontWeight: "bold",
            paddingTop: 5,
            textAlign: "center",
          }}>
          TRACK AND TRADE
        </Typography>
        <img
          src={icon2}
          height={95}
          className="animation-card"
        />
      </Box>
      <Typography
        sx={{
          fontSize: { xl: "100px", md: "80px", sm: "60px", xs: "32px" },
          background: `linear-gradient(to right, #90CAF9, #E722E6)`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontWeight: "bold",
          textAlign: "center",
        }}>
        CRYPTO CURRENCIES
      </Typography>
      <Carousel />
    </Container>
  );
};

export default Banner;
