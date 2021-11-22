import React, { useState } from "react";
import "../styles/Main.css";
import { useTheme } from "../hooks/useTheme";
import ToggleIcon from "./ToggleIcon";
import HamLinks from "./HamLinks";

const Navbar = () => {
  const { mode, antimode } = useTheme();
  const [open, setOpen] = useState(false);

  const hamburgerMenu = () => {
    if (open === false) {
      setOpen(true);
    } else setOpen(false);
  };

  return (
    <nav className={`${mode} navbar`}>
      <div className="hamburger" onClick={() => hamburgerMenu()}>
        {console.log(open)}
        {open ? <HamLinks /> : null}
        <div className={`${antimode} line`}></div>
        <div className={`${antimode} line`}></div>
        <div className={`${antimode} line`}></div>
      </div>
      <ToggleIcon />
    </nav>
  );
};

export default Navbar;
