import { Avatar, Box, Button, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { signOut } from "firebase/auth";
import * as React from "react";
import { CryptoState } from "../../CryptoContext";
import { auth } from "../../config/firebase";

export default function UserSidebar() {
  const { user } = CryptoState();
  const [state, setState] = React.useState({
    right: false,
  });
  console.log(user);
  console.log(user.photoURL);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logOut = () => {
    signOut(auth);
  };

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar
            onClick={toggleDrawer(anchor, true)}
            sx={{
              marginRight: "1rem",
              cursor: "pointer",
              background: " rgba(144,202,249,1) ",
              color: "#292B2F",
              width: 32,
              height: 32,
            }}
            src={user?.photoURL}
          />

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}>
            <Box
              sx={{
                width: 350,
                padding: 5,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}>
              <Avatar
                onClick={toggleDrawer(anchor, true)}
                sx={{
                  background: " rgba(144,202,249,1) ",
                  color: "#292B2F",
                  width: 100,
                  height: 100,
                }}
                src={user?.photoURL}
              />
              <Typography
                sx={{
                  fontSize: "1.3rem",
                }}>
                {user.displayName || user.email}
              </Typography>
              <Button
                sx={{
                  border: "1px solid rgba(144,202,249,1)",
                }}
                onClick={logOut}>
                Log out
              </Button>
              <Box
                sx={{
                  width: "100%",
                  backgroundColor: "grey",

                  padding: 10,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                  overflowY: "scroll",
                }}></Box>
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
