import { doc, setDoc } from "@firebase/firestore";
import {
  Box,
  Button,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
import axios from "axios";
import Parser from "html-react-parser";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { SingleCoin } from "../config/api";
import { db } from "../config/firebase";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol, user, watchlist, setWatchlist } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  const newDescription = Parser(
    String(coin?.description.en.split(". ")[0]) +
      ". " +
      String(coin?.description.en.split(". ")[1]) +
      "."
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
            marginTop: "6.5rem",
          }}
        />
      </Box>
    );

  const inWatchList = watchlist.includes(coin?.id);

  const addToWatchList = async () => {
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(
        coinRef,
        { coins: watchlist ? [...watchlist, coin?.id] : [coin?.id] },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const removeToWatchList = async () => {
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(
        coinRef,
        { coins: watchlist.filter((watch) => watch !== coin?.id)},
        { merge: true }
      );
      console.log(watchlist);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      sx={{
        marginTop: "12rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
            maxWidth: "40rem",
            textDecorationColor: "none",
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
        {user && (
          <Button
            sx={{
              background:
                "linear-gradient(90deg, rgba(144,202,249,1) 0%, rgba(231,34,230,1) 48%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontSize: "1.3rem",
              marginTop: "2rem",
              border: "1px solid rgba(144,202,249,1)",
              fontWeight: "bold",
            }}
            onClick={ inWatchList ? removeToWatchList : addToWatchList}>
            {inWatchList ? "Remove from your list" : "Add to your list"}
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default CoinPage;
