import { Container, Typography } from "@mui/material";
import React from "react";
const Banner = () => {
  return (
    <Container>
      <Typography
        sx={{
          fontSize: { xl: "100px", md: "80px", sm: "60px", xs: "32px" },
          background: `linear-gradient(to right, #ffffff, #bdbdbd)`,
          backgroundClip: "text",
          color: "transparent",
          fontWeight: "bold",
          paddingTop: 5,
          textAlign: "center"
        }}>
        TRACK AND TRADE
      </Typography>

      <Typography
        sx={{
          fontSize: { xl: "100px", md: "80px", sm: "60px", xs: "32px" },
          background: `linear-gradient(to right, #ffdd00, #a88100)`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontWeight: "bold",
          textAlign: "center"
        }}>
        CRYPTO CURRENCIES
      </Typography>
    </Container>
  );
};

export default Banner;
