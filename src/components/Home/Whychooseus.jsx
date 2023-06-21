import {
  Bolt,
  DesignServices,
  Discount,
  Quiz,
  SatelliteAlt,
  Wallet,
} from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "../../imgs/whychooseus.png";

const Whychooseus = () => {
  return (
    <Container
      sx={{
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2rem",
      }}>
      <Box sx={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <Typography
          sx={{
            fontSize: { xl: "90px", md: "70px", sm: "50px", xs: "22px" },
            background: `linear-gradient(to right, #ffffff, #bdbdbd)`,
            backgroundClip: "text",
            color: "transparent",
            fontWeight: "bold",
            textAlign: "center",
          }}>
          Why Choose
        </Typography>
        <Typography
          sx={{
            fontSize: { xl: "90px", md: "70px", sm: "50px", xs: "22px" },
            background: `linear-gradient(to right, #90CAF9, #E722E6)`,
            backgroundClip: "text",
            color: "transparent",
            fontWeight: "bold",
            textAlign: "center",
          }}>
          US
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xl: "row", xs: "column" },
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Box>
          <Box
            width={"300px"}
            height={"150px"}
            sx={{
              border: "1px solid white",
              margin: "2rem",
            }}>
            <Wallet
              sx={{
                color: "white",
                fontSize: 75,
                padding: "1.5rem",
                background: "linear-gradient(to right, #80b4df, #df25df)",
                borderRadius: "5rem",
              }}></Wallet>
          </Box>
          <Box
            width={"300px"}
            height={"150px"}
            sx={{
              border: "1px solid white",
              margin: "2rem",
            }}>
            <DesignServices
              sx={{
                color: "white",
                fontSize: 75,
                padding: "1.5rem",
                background: "linear-gradient(to right, #80b4df, #df25df)",
                borderRadius: "5rem",
              }}></DesignServices>
          </Box>
          <Box
            width={"300px"}
            height={"150px"}
            sx={{
              border: "1px solid white",
              margin: "2rem",
            }}>
            <Bolt
              sx={{
                color: "white",
                fontSize: 75,
                padding: "1.5rem",
                background: "linear-gradient(to right, #80b4df, #df25df)",
                borderRadius: "5rem",
              }}></Bolt>
          </Box>
        </Box>
        <Box item xs={4}>
          <img src={img1} alt="" className="image-whychoose" />
        </Box>
        <Box>
          <Box
            width={"300px"}
            height={"150px"}
            sx={{
              border: "1px solid white",
              margin: "2rem",
            }}>
            <SatelliteAlt
              sx={{
                color: "white",
                fontSize: 75,
                padding: "1.5rem",
                background: "linear-gradient(to right, #80b4df, #df25df)",
                borderRadius: "5rem",
              }}></SatelliteAlt>
          </Box>
          <Box
            width={"300px"}
            height={"150px"}
            sx={{
              border: "1px solid white",
              margin: "2rem",
            }}>
            <Discount
              sx={{
                color: "white",
                fontSize: 75,
                padding: "1.5rem",
                background: "linear-gradient(to right, #80b4df, #df25df)",
                borderRadius: "5rem",
              }}></Discount>
          </Box>
          <Box
            width={"300px"}
            height={"150px"}
            sx={{
              border: "1px solid white",
              margin: "2rem",
            }}>
            <Quiz
              sx={{
                color: "white",
                fontSize: 75,
                padding: "1.5rem",
                background: "linear-gradient(to right, #80b4df, #df25df)",
                borderRadius: "5rem",
              }}></Quiz>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Whychooseus;
