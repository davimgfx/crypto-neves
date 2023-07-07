import { Box, Button, TextField, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {auth} from "../../config/firebase"

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email && password === "") {
      alert("Empty Field/s");
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      alert("Login Success");
      console.log(result);
    } catch(error){
      alert(error)
    }
    handleClose();
  };

  return (
    <Box p={3} sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <TextField
        type="email"
        label="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          width: 400,
        }}
      />
      <TextField
        type="password"
        label="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{
          width: 400,
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          alignItems: "center",
        }}>
        <Button
          onClick={handleSubmit}
          sx={{
            width: "auto",
            height: 40,
            border: "1px solid #90CAF9",
            fontSize: "1.3rem",
          }}>
          Login
        </Button>
        <Typography>or</Typography>
        <Button
          onClick={handleClose}
          sx={{
            width: "auto",
            height: 40,

            border: "1px solid #90CAF9",
            fontSize: "1.3rem",
          }}>
          Login with google
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
