import { Box, Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";
import { TrendingCoins } from "../../config/api";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;
    return (
      <Link to={`/coins/${coin.id}`}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            color: "white",
            textTransform: "uppercase",
          }}>
          <img src={coin?.image} alt={coin.name} height="80" />

          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
          }}>
            <Typography sx={{
              fontSize: "16px",
            
              fontWeight: "bold"
            }} >
              {coin?.symbol}
              </Typography>
              <Typography sx={{
              fontSize: "12px",
              color: profit > 0 ? "#00ff22" : "#ff0000",
              fontWeight: "bold"
            }}>
                &nbsp;
                {profit && "+"}
                {coin?.price_change_percentage_24h?.toFixed(2)}%
              </Typography>
          </Box>
       
          <Typography sx={{
            fontSize: "24px"
          }}>{symbol} {numberWithCommas(coin?.current_price.toFixed(2))}</Typography>
  
        </Box>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 2,
    },
    800: {
      items: 4,
    }
  };

  return (
    <Container
      sx={{
        marginTop: "5rem",
      }}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </Container>
  );
};

export default Carousel;
