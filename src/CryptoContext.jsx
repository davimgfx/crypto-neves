import { doc, onSnapshot } from "@firebase/firestore";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { CoinList } from "./config/api";
import { auth, db } from "./config/firebase";
const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("BRL");
  const [symbol, setSymbol] = useState("R$");
  const [coins, SetCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    if (user) {
      const coinRef = doc(db, "watchlist", user.uid);
      var unsubscribe = onSnapshot(coinRef, (coin) => {
        if (coin.exists()) {
          setWatchlist(coin.data().coins);
        } else {
          console.log("No items in Watchlist");
        }
      });
      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

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
    <Crypto.Provider
      value={{
        currency,
        setCurrency,
        symbol,
        coins,
        loading,
        fetchCoins,
        alert,
        setAlert,
        user,
        watchlist,
        setWatchlist,
      }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
