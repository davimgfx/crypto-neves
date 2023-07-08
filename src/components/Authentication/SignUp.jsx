import { Box, Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../config/firebase";

const SignUp = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  //const { setAlert} = CryptoState();

  const handleSubmit = async () => {
    if (password && confirmedPassword && email === "") {
      alert("Empty field/s");
    } else if (password !== confirmedPassword) {
      alert("Passwords do not match");
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("Sign Up Success");
      handleClose();
    } catch (error) {
      alert(error);
    }
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
        required
      />

      <TextField
        type="password"
        label="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{
          width: 400,
        }}
        required
      />
      <TextField
        type="password"
        label="Confirm Password"
        value={confirmedPassword}
        onChange={(e) => setConfirmedPassword(e.target.value)}
        sx={{
          width: 400,
        }}
        required
      />
      <Button
        onClick={handleSubmit}
        sx={{
          width: "auto",
          height: 50,
          marginX: "auto",
          border: "1px solid #90CAF9",
          fontSize: "1.3rem",
        }}>
        Create your Account
      </Button>
    </Box>
  );
};

export default SignUp;
