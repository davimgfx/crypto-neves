import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  const handleLinkClick = (coin) => {
    window.location.href = `/coins/${coin}`;
  };
  return (
    <Box
      sx={{
        marginTop: 15,
        borderTop: "1px solid",
      }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5rem",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          marginX: "auto",
        }}>
        <Box>
          <Typography
            sx={{
              marginTop: "2rem",
              fontSize: "22px",
              background: `linear-gradient(to right, #90CAF9, #51728d)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
            }}>
            CryptoNeves
          </Typography>
          <Typography sx={{ marginTop: "1rem", fontSize: "14px" }}>
            Crypto Neves: Your Comprehensive Resource for Crypto Market Insights
            and Trading Opportunities Unlock the Potential of Cryptocurrencies
            with Crypto Neves
          </Typography>
          <Typography sx={{ marginTop: "2rem", fontSize: "18px" }}>
            Privacy Policy | © 2023 Crypto Neves
          </Typography>
        </Box>
        <Box >
          <Typography
            sx={{
              marginTop: "1rem",
              fontSize: "22px",
              fontWeight: "bold",
            }}>
            Famous Coins
          </Typography>

          <Typography
            sx={{ marginTop: "1rem", fontSize: "18px", cursor: "pointer" }}
            onClick={() => handleLinkClick("bitcoin")}>
            Bitcoin
          </Typography>
          <Typography
            sx={{ marginTop: "1rem", fontSize: "18px", cursor: "pointer" }}
            onClick={() => handleLinkClick("dogecoin")}>
            DogCoin
          </Typography>
          <Typography
            sx={{ marginTop: "1rem", fontSize: "18px", cursor: "pointer" }}
            onClick={() => handleLinkClick("ethereum")}>
            Ethereum
          </Typography>
          <Typography
            sx={{ marginTop: "1rem", fontSize: "18px", cursor: "pointer" }}
            onClick={() => handleLinkClick("tether")}>
            Tether
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              marginTop: "2rem",
              fontSize: "22px",
              fontWeight: "bold",
            }}>
            Working Hours
          </Typography>
          <Typography sx={{ marginTop: "1rem", fontSize: "18px" }}>
            Monday - Friday
          </Typography>
          <Typography sx={{ marginTop: "1rem", fontSize: "14px" }}>
            00:00AM - 00:00PM
          </Typography>
          <Typography sx={{ marginTop: "1rem", fontSize: "18px" }}>
            Saturday - Sunday
          </Typography>
          <Typography sx={{ marginTop: "1rem", fontSize: "14px" }}>
            00:00AM - 00:00PM
          </Typography>
        </Box>
        <Box >
          <Typography
            sx={{
              marginTop: "2rem",
              fontSize: "22px",
              fontWeight: "bold",
            }}>
            More Infos
          </Typography>
          <Typography sx={{ marginTop: "1rem", fontSize: "18px" }}>
            Blogs
          </Typography>
          <Typography sx={{ marginTop: "1rem", fontSize: "18px" }}>
            About Us
          </Typography>
          <Typography sx={{ marginTop: "1rem", fontSize: "18px" }}>
            Why US
          </Typography>
        </Box>
      </Container>
      <Container
        sx={{
          marginTop: 3,
          borderTop: "1px solid",
        }}>
        <Box
          sx={{
            marginY: 1,
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
          }}>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: "1rem",
            }}>
            <LinkedIn fontSize="large" sx={{ cursor: "pointer" }}></LinkedIn>
            <Instagram fontSize="large" sx={{ cursor: "pointer" }}></Instagram>
            <Twitter fontSize="large" sx={{ cursor: "pointer" }}></Twitter>
            <Facebook fontSize="large" sx={{ cursor: "pointer" }}></Facebook>
            <YouTube fontSize="large" sx={{ cursor: "pointer" }}></YouTube>
          </Box>
          <Typography sx={{ fontSize: "16px" }}>
            All rights are reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
