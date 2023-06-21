import {
  Box,
  Container,
  LinearProgress,
  Pagination,
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

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinsTable = () => {
  const [coins, SetCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { currency, symbol } = CryptoState();

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
        coin.symbol.toLowerCase().includes(search)
    );
  };

  const handleLinkClick = (id) => (window.location.href = `/coins/${id}`);

  return (
    <Container
      sx={{
        marginTop: "10rem",
        height: "auto",
        textAlign: "center",
      }}>
      <Typography
        sx={{
          fontSize: { xl: "90px", md: "70px", sm: "50px", xs: "30px" },
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
          fontSize: { xl: "90px", md: "70px", sm: "50px", xs: "30px" },
          background: `linear-gradient(to right, #90CAF9, #E722E6)`,
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
        onChange={(e) => setSearch(e.target.value)}
        ></TextField>

      <TableContainer>
        {loading ? (
          <LinearProgress
            sx={{
              background: "linear-gradient(90deg, rgba(144,202,249,1) 50%, rgba(231,34,230,1) 30%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginTop: "1px",
            }}
          />
        ) : (
          <Table sx={{ marginTop: "3rem" }}>
            <TableHead
              sx={{
                background: "linear-gradient(90deg, rgba(144,202,249,1) 0%, rgba(231,34,230,1) 48%)",
           

              }}>
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
              {handleSearch().slice((page - 1) * 10, (page - 1) * 10 + 10).map((row) => {
                const profit = row.price_change_percentage_24h > 0;
                return (
                  <TableRow
                    key={row.name}
                    onClick={() => handleLinkClick(row.id)}
                    sx={{ cursor: "pointer",
                            "&:hover" : {
                              background: `linear-gradient(to right, #314657, #581058)`
                            }
                     }}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ display: "flex", justifyContent: "center" }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          textAlign: "center",
                          flexDirection: "row",
                          gap: "2rem",
                          marginRight: "2rem",
                        }}>
                        <img
                          src={row?.image}
                          alt={row.name}
                          height="50"
                          width="50"
                          sx={{ margin: "auto" }}
                        />
                        <Box>
                          <Typography
                            sx={{
                              textAlign: "left",
                              fontSize: "22px",
                              textTransform: "uppercase",
                            }}>
                            {row.symbol}
                          </Typography>
                          <Typography>{row.name}</Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                        fontSize: "18px",
                        textTransform: "uppercase",
                      }}>
                      {symbol} {numberWithCommas(row.current_price.toFixed(2))}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: "18px",
                        color: profit > 0 ? "#00ff22" : "#ff0000",
                        fontWeight: "bold",
                        textAlign: "center"
                      }}>
                        {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                    </TableCell>
                    <TableCell sx={{
                      textAlign: "center",
                      fontSize: "18px"
                    }}>
                      {symbol} {numberWithCommas(row.market_cap.toString().slice(0, -6))}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>

      <Pagination 
      sx={{
        padding: 5,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        color: "white",
        "& .MuiPaginationItem-root": {
          color: "#7DB0D9"
        }
      }}
      count={(handleSearch()?.length/10)}
      size="large"
      onChange={(_, value) => {
        setPage(value)
      
      }}
      />
    </Container>
  );
};

export default CoinsTable;
