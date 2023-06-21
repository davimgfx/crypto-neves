import { Box, Container, LinearProgress, Typography } from "@mui/material";
import axios from "axios";
import Parser from "html-react-parser";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { SingleCoin } from "../config/api";
import { CoinInfo } from "../components"

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, []);

  const newDescription = Parser(
    String(coin?.description.en.split(". ")[0]) + "."
  );

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (!coin)
    return (
      <Box sx={{ height: "100vh" }}>
        <LinearProgress
          sx={{
            background:
              "linear-gradient(90deg, rgba(144,202,249,1) 50%, rgba(231,34,230,1) 30%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginTop: "7rem",
          }}
        />
      </Box>
    );

  return (
    <Container
      sx={{
        marginTop: "12rem",
        display: "flex"
      }}>
      <Box
        sx={{
          paddingX: "2rem",
          width: "40rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRight: "2px solid white",
        }}>
        <img src={coin?.image.large} height={150} />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "32px",
            marginY: "1rem",
            background: `linear-gradient(to right, #90CAF9, #E722E6)`,
            backgroundClip: "text",
            color: "transparent",
            fontWeight: "bold",
          }}>
          {coin?.name}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "16px",
            textDecoration: "none",
          }}>
          {newDescription}
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            fontSize: "24px",
            textDecoration: "none",
            marginY: "1rem",
            background: `linear-gradient(to right, #90CAF9, #E722E6)`,
            backgroundClip: "text",
            color: "transparent",
            fontWeight: "bold",
          }}>
          Rank: #{coin?.coingecko_rank}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
          }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "24px",
              textDecoration: "none",
            }}>
            Current Price <br />
            {symbol} 
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "24px",
              textDecoration: "none",
            }}>
            Market Price <br /> {symbol}{" "}
            {numberWithCommas(
              coin?.market_data.market_cap[currency.toLowerCase()]
                .toString()
                .slice(0, -6)
            )}
          </Typography>
        </Box>
      </Box> 
      <CoinInfo />
    </Container>
  );
};

export default CoinPage;
