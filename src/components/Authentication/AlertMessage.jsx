import { Alert, Snackbar } from "@mui/material";
import React from "react";
import CryptoState from "../../CryptoContext";
import MuiAlert from '@mui/material/Alert';

const AlertMessage = () => {
  const { alert, setAlert } = CryptoState();
 
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert({ open: false });
  };

  const { open, type, message } = alert;
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <MuiAlert onClose={handleClose} severity={type} elevation={10}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default AlertMessage;
