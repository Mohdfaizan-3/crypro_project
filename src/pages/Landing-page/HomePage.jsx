import { motion } from "framer-motion";
import React from "react";
import Button from "../../components/Button";
import gradient from "../../image/gradientpng.png";
import phone from "../../image/phone.png";

const HomePage = () => {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          className="heading-track-crypto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="heading-real-time"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Real Time
        </motion.h1>
        <p className="info">
          Track crypto through a public API in real time. Visit dashboard to do
          so.
        </p>
        <motion.div
          className="flex-btn"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Button text={"dashboard"} />
          <Button text={"share"} outlined={true} />
        </motion.div>
      </div>
      <div className="right-component">
        <motion.img
          src={phone}
          alt="phone pic"
          className="phone"
          initial={{ opacity: 1, y: -30 }}
          animate={{ opacity: 1, y: 30 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
        <img src={gradient} alt="gradient pic" className="gradient" />
      </div>
    </div>
  );
};

export default HomePage;
