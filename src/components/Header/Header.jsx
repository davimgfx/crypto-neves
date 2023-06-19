import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import { CryptoState } from "../../CryptoContext";

const Header = () => {
  //Theme
  const themeLogo = createTheme({
    typography: {
      title: {
        flex: 1,
        color: "#e5ff00",
        fontSize: 22,
        fontWeight: "bold",
        cursor: "pointer",
        fontFamily: "Heebo",
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
    },
  });

  // Link logo
  const handleLinkClick = () => {
    console.log("Link clicado!");
    window.location.href = "/";
  };

  // Change type of coin
  const { currency, setCurrency } = CryptoState();

  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography
            theme={themeLogo}
            variant="title"
            onClick={handleLinkClick}
            >
            Crypto Neves
          </Typography>

          <Select
            variant="outlined"
            style={{
              width: 100,
              height: 40,
              marginRigt: 15,
              fontSize: 16,
            }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}>
            <MenuItem
              value={"USD"}
              style={{
                fontSize: 16,
              }}>
              USD
            </MenuItem>
            <MenuItem
              value={"BRL"}
              style={{
                fontSize: 16,
              }}>
              BRL
            </MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
