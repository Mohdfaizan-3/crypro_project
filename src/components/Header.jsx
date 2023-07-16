import React from "react";
import Button from "./Button";
import TemporaryDrawer from "./Drawer/Drawer";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <h1>CryptoTracker</h1>
        </div>

        <div className="links">
          <a href="/" className="link">
            home
          </a>
          <a href="/" className="link">
            compare
          </a>
          <a href="/" className="link">
            watchlist
          </a>
          <a href="/" className="link">
            <Button outlined={false} text={"dashboard"} />
          </a>
        </div>
        <div className="mobile-drawer">
          <TemporaryDrawer />
        </div>
      </div>
    </>
  );
};

export default Header;
