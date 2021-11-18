import React from "react";
import "../styles/TopNavBar.css";
import ToggleIcon from "./ToggleIcon";
import { Link } from "react-router-dom";

const TopNavBar = () => {
  return (
    <div className="top-navbar">
      <ToggleIcon />
      <Link to="/about">
        <img src="/gallery/barcode.png" alt=""></img>
      </Link>
    </div>
  );
};

export default TopNavBar;
