import React from "react";

const Grid = ({ coin }) => {
  return (
    <div className="grid-coin">
      <div className="grid-flex">
        <img src={coin.image} className="coin-img" />
        <div className="coin-name">
          <p className="coin-symbol">{coin.symbol.toUpperCase()}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Grid;
