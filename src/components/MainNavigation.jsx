import { Link } from "react-router-dom";
import Button from "./Button";
import TemporaryDrawer from "./Drawer/Drawer";
const MainNavigation = () => {
  return (
    <div>
      <header>
        <div className="navbar">
          <div>
            <h1>CryptoTracker</h1>
          </div>

          <div className="links">
            <Link to="/" className="link">
              home
            </Link>
            <Link to="/compare" className="link">
              compare
            </Link>
            <Link to="/watchlist" className="link">
              watchlist
            </Link>
            <Link to="/dashboard" className="link">
              <Button outlined={false} text={"dashboard"} />
            </Link>
          </div>
          <div className="mobile-drawer">
            <TemporaryDrawer />
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainNavigation;
