import axios from "axios";
import React, { useEffect, useState } from "react";
import Tabs from "../components/Tabs";
const Dashboard = () => {
 
   const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    ).then((response)=>{
     console.log(response)
     setCoins(response.data);
    }).catch((error)=>{

    });
  }, []);
  return (
    <div>
      <Tabs coins={coins}/>
    </div>
  );
};

export default Dashboard;
