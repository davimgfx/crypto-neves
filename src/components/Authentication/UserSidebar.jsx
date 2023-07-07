import React from 'react'
import { CryptoState } from '../../CryptoContext';
import { Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const UserSidebar = () => {
 const { user } = CryptoState();
 console.log(user)
  return (
    <Box  sx={{
        marginRight: "1rem",
        marginY: "auto"
      }}>
        {user?.photoURL ? (<img src={user.photoURL}/>) : (<AccountCircleIcon width="90"/>)}
    </Box>
  )
}

export default UserSidebar