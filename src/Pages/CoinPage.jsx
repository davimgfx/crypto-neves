import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { SingleCoin } from "../config/api";
import { Box } from "@mui/material";

const CoinPage = () => {
  const { id } = useParams();
  const [ coin, setCoin ] = useState();
  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  useEffect(() => {
    fetchCoin()
  }, [])
  
  return (
   
  );
};

export default CoinPage;
