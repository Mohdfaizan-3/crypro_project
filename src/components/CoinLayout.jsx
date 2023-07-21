import React from "react";
import { Outlet } from "react-router-dom";
import { CoinNavigation } from "./CoinNavigation";

export const CoinLayout = () => {
  return (
    <div>
      <CoinNavigation />
      <Outlet />
    </div>
  );
};
