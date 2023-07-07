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
import AuthModal from "../Authentication/AuthModal";

const Header = () => {
  //Theme
  const themeLogo = createTheme({
    typography: {
      title: {
        flex: 1,
        fontSize: 22,
        fontWeight: "bold",
        cursor: "pointer",
        fontFamily: "Heebo",
      },
    },
  });

  // Link logo
  const handleLinkClick = () => {
    window.location.href = "/";
  };

  // Change type of coin
  const { currency, setCurrency } = CryptoState();

  return (
    <AppBar
      position="fixed"

      >
      <Container>
        <Toolbar>
          <Typography
            theme={themeLogo}
            variant="title"
            onClick={handleLinkClick}
            sx={{
              background: "linear-gradient(90deg, rgba(144,202,249,1) 0%, rgba(231,34,230,1) 48%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}>
            Crypto Neves
          </Typography>
          <AuthModal />
          <Select
            variant="outlined"
            style={{
              width: 100,
              height: 40,
              marginRight: 15,
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
