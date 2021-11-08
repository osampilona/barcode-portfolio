import React from "react";
import "../styles/Main.css";
import { useTheme } from "../hooks/useTheme";
import ToggleIcon from "./ToggleIcon";

const Navbar = () => {
  const { mode, antimode } = useTheme();
  return (
    <nav className={`${mode} navbar`}>
      <div className="hamburger">
        <div className={`${antimode} line`}></div>
        <div className={`${antimode} line`}></div>
        <div className={`${antimode} line`}></div>
      </div>
      <ToggleIcon />
    </nav>
  );
};

export default Navbar;
