import {useState } from "react";
import {Box, TextField, Button, Snackbar,  Stack, Alert } from "@mui/material"
import CryptoState from "../../CryptoContext"

export default function AlertMessage() {
    const {alert, setAlert} = CryptoState()
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setAlert({open: false});
    };

    const { open, type, message } = alert
      
    return (
     
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type} elevation={10}>
          {message}
        </Alert>
      </Snackbar>
      
        
    );
  }
  