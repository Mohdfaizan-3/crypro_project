import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

const RootLayout = () => {
  return (
    <div className="root">
      <div>
        <MainNavigation />
      </div>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
