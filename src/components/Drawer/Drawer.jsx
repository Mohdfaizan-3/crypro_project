import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="hamburger-icon" />
      </Button>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-links">
          <a href="/" className="drawer-link">
            home
          </a>
          <a href="/" className="drawer-link">
            compare
          </a>
          <a href="/" className="drawer-link">
            watchlist
          </a>
          <a href="/" className="drawer-link">
            dashboard
          </a>
        </div>
      </Drawer>
    </div>
  );
}
