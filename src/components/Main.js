import React from "react";
import "../styles/Main.css";
import Barcode from "./Barcode";
import ToggleIcon from "./ToggleIcon";
import Navbar from "./Navbar";

function Main() {
  return (
    <div className="all-together">
      <div className="icon">
        <ToggleIcon />
      </div>
      <Navbar />
      <Barcode />
    </div>
  );
}

export default Main;
