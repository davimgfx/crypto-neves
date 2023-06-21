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
        marginTop: "5rem"
      }}>
      <Typography
        sx={{
          fontSize: { xl: "90px", md: "70px", sm: "50px", xs: "30px" },
          background: `linear-gradient(to right, #90CAF9, #E722E6)`,
          backgroundClip: "text",
          color: "transparent",
          fontWeight: "bold",
          textAlign: "center",
        }}>
        Why Choose Us
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}>
          <Box
            width={"350px"}
            height={"150px"}
            sx={{
            
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              padding: "1rem",
            }}>
            <Wallet
              sx={{
                color: "white",
                fontSize: 75,
                padding: "1.5rem",
                background: "linear-gradient(to right, #80b4df, #df25df)",
                borderRadius: "5rem",
              }}></Wallet>
            <Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "white",
                  fontWeight: "bold",
                }}>
                Connect Your Wallet
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#dadada",
                  fontWeight: "bold",
                }}>
                Use Trust Wallet, Metamask or to connect to the app.
              </Typography>
            </Box>
          </Box>
          <Box
            width={"350px"}
            height={"150px"}
            sx={{
             
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              padding: "1rem",
            }}>
            <DesignServices
              sx={{
                color: "white",
                fontSize: 75,
                padding: "1.5rem",
                background: "linear-gradient(to right, #80b4df, #df25df)",
                borderRadius: "5rem",
              }}></DesignServices>
            <Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "white",
                  fontWeight: "bold",
                }}>
                Select Your Quantity
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#dadada",
                  fontWeight: "bold",
                }}>
                Use Trust Wallet, Metamask or to connect to the app.
              </Typography>
            </Box>
          </Box>
          <Box
            width={"350px"}
            height={"150px"}
            sx={{
             
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              padding: "1rem",
            }}>
            <Bolt
              sx={{
                color: "white",
                fontSize: 75,
                padding: "1.5rem",
                background: "linear-gradient(to right, #80b4df, #df25df)",
                borderRadius: "5rem",
              }}></Bolt>
            <Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "white",
                  fontWeight: "bold",
                }}>
                Speed Market
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#dadada",
                  fontWeight: "bold",
                }}>
                Our team help you to don't waste time. Fast transitions
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{
          display: {sm: "flex", xs: "none" }
        }}>
          <img src={img1} alt="" className="image-whychoose" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}>
          <Box
            width={"350px"}
            height={"150px"}
            sx={{
            
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              padding: "1rem",
            }}>
            <Wallet
              sx={{
                color: "white",
                fontSize: 75,
                padding: "1.5rem",
                background: "linear-gradient(to right, #80b4df, #df25df)",
                borderRadius: "5rem",
              }}></Wallet>
            <Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "white",
                  fontWeight: "bold",
                }}>
                Connect Your Wallet
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#dadada",
                  fontWeight: "bold",
                }}>
                Use Trust Wallet, Metamask or to connect to the app.
              </Typography>
            </Box>
          </Box>
          <Box
            width={"350px"}
            height={"150px"}
            sx={{
              
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              padding: "1rem",
            }}>
            <Discount
              sx={{
                color: "white",
                fontSize: 75,
                padding: "1.5rem",
                background: "linear-gradient(to right, #80b4df, #df25df)",
                borderRadius: "5rem",
              }}></Discount>
            <Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "white",
                  fontWeight: "bold",
                }}>
                Receive Extra Discounts
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#dadada",
                  fontWeight: "bold",
                }}>
                We give a lot a of discount information for you.
              </Typography>
            </Box>
          </Box>
          <Box
            width={"350px"}
            height={"150px"}
            sx={{
             
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              padding: "1rem",
            }}>
            <Quiz
              sx={{
                color: "white",
                fontSize: 75,
                padding: "1.5rem",
                background: "linear-gradient(to right, #80b4df, #df25df)",
                borderRadius: "5rem",
              }}></Quiz>
            <Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "white",
                  fontWeight: "bold",
                }}>
                Support 24 hours
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#dadada",
                  fontWeight: "bold",
                }}>
                Feel free to ask any question at any time.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Whychooseus;
