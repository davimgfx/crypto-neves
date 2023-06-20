import {
  Container,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CryptoState } from "../../CryptoContext";
import { CoinList } from "../../config/api";

const CoinsTable = () => {
  const [coins, SetCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const { currency } = CryptoState();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));

    SetCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCae().includes(search)
    );
  };

  const handleLinkClick = (id) => (window.location.href = `/coins/${id}`);
  
  return (
    <Container
      sx={{
        marginTop: "10rem",
        height: "100vh",
        textAlign: "center",
      }}>
      <Typography
        sx={{
          fontSize: { xl: "90px", md: "70px", sm: "50px", xs: "22px" },
          background: `linear-gradient(to right, #ffffff, #bdbdbd)`,
          backgroundClip: "text",
          color: "transparent",
          fontWeight: "bold",
          textAlign: "center",
        }}>
        Cryptocurrency Prices
      </Typography>
      <Typography
        sx={{
          fontSize: { xl: "90px", md: "70px", sm: "50px", xs: "22px" },
          background: `linear-gradient(to right, #ff00aa, #a800a0)`,
          backgroundClip: "text",
          color: "transparent",
          fontWeight: "bold",
          textAlign: "center",
        }}>
        by Market Cap
      </Typography>
      <TextField
        sx={{
          width: "100%",
          textAlign: "center",
          marginTop: "10px",
        }}
        label="Search For a Crypto Currency..."
        variant="outlined"
        onChange={(e) => setSearch(e.target.value)}></TextField>

      <TableContainer>
        {loading ? (
          <LinearProgress
            sx={{
              background: "linear-gradient(to right, #ff00aa, #a800a0)",
              marginTop: "1px",
            }}
          />
        ) : (
          <Table sx={{ marginTop: "3rem" }}>
            <TableHead>
              <TableRow>
                {["Coins", "Price", "24h Change", "Market Cap"].map((head) => (
                  <TableCell
                    key={head}
                    align="center"
                    sx={{ fontSize: "18px" }}>
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {handleSearch().map((row) => {
                const profit = row.price_change_percentage_24h > 0;
                return (
                  <TableRow
                    key={row.name}
                    onClick={handleLinkClick(row.id)}></TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </Container>
  );
};

export default CoinsTable;
