import {useState} from 'react'
import {Box, TextField, Button, Typography} from "@mui/material"

const Login = ({handleClose}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {}

  return (
    <Box p={3} sx={{ display:"flex", flexDirection: "column", gap: "20px"}}>
    <TextField type="email" label="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} sx={{
      width: 400
    }}/>
     <TextField type="password" label="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} sx={{
      width: 400,
      
    }}/>
  
  <Box>   
    <Button
    onClick={handleClose}
    sx={{
      width: "auto",
      height: 40,
      marginX: "auto",
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
      marginX: "auto",
      border: "1px solid #90CAF9",
      fontSize: "1.3rem",
    }}>
    Login with google
    </Button>
    </Box>
</Box>
  )
}

export default Login