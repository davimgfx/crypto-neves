import { Tab, Tabs, Typography, Backdrop, Box, Button, Fade, Modal } from "@mui/material";
import {useState} from "react";
import Login from "./Login";
import SignIn from "./SignIn";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "1.2rem",
  bgcolor: "background.paper",
  boxShadow: 24,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginX: "auto",
  flexDirection: "column",
  gap: "2rem",

};

export default function AuthModal() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          width: 85,
          height: 40,
          marginRight: "1rem",
          border: "1px solid #90CAF9",
          fontSize: "1.3rem",
        }}>
        Login
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={open}>
          <Box sx={style}>
            <Tabs          
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              value={value}
              sx={{
                width: "auto",
                marginX: "auto"
              }}
              onChange={handleChange}>
              <Tab value={0} label="Login" sx={{
                width: 200,
                fontSize: "1.3rem"
              }} />
              <Tab value={1} label="Sign Up" sx={{
                width: 200,
                fontSize: "1.3rem"
              }}/>
            </Tabs>
            { value === 0 && <Login handleClose={handleClose}/>}
            { value === 1 && <SignIn handleClose={handleClose}/>}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
