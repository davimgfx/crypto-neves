import {useState} from 'react'
import {Box, TextField, Button} from "@mui/material"
import CryptoState from "../CryptoContext"
const SignIn = ({handleClose}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmedPassword, setConfirmedPassword] = useState("")

  const { setAlert } = CryptoState()

  const handleSubmit = () => {
    if( password !== confirmedPassword){
      setAlert({
          open: true,
          message: "Passwords do not match",
          type: "error"
      })
      return;

  }

  return (
    <Box p={3} sx={{ display:"flex", flexDirection: "column", gap: "20px"}}>
        <TextField type="email" label="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} sx={{
          width: 400
        }}/>
         <TextField type="password" label="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} sx={{
          width: 400,
          
        }}/>
        <TextField type="password" label="Confirm Password" value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)} sx={{
          width: 400
        }}/>
         <Button
        onClick = {handleSubmit}
        sx={{
          width: "auto",
          height: 40,
          marginX: "auto",
          border: "1px solid #90CAF9",
          fontSize: "1.3rem",
        }}>
        Create your Account
      </Button>
    </Box>
  )
}
}
export default SignIn