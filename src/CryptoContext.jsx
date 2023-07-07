import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { CoinList } from "./config/api";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("BRL");
  const [symbol, setSymbol] = useState("R$");
  const [coins, SetCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success"
  });
  
  useEffect(() => {
    if (currency === "BRL") setSymbol("R$");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));

    SetCoins(data);
    setLoading(false);
  };

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol, coins, loading, fetchCoins, alert, setAlert }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};