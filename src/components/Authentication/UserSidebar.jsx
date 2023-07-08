import { Avatar, Box } from "@mui/material";
import { CryptoState } from "../../CryptoContext";
import Drawer from "@mui/material/Drawer";
import * as React from "react";

export default function UserSidebar() {
  const { user } = CryptoState();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="profile_photo"
              onClick={toggleDrawer(anchor, true)}
            />
          ) : (
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
            />
          )}

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}>
            <Box sx={{
              width: 350,
              padding: 25,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}>

            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
