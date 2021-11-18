import React from "react";
import modeIcon from "../assets/mode-icon.svg";
import { useTheme } from "../hooks/useTheme";
import "../styles/ModeToggle.css";
import Barcode from "./Barcode";

const ToggleIcon = () => {
  const { changeMode, changeAntimode, mode, antimode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "light" ? "dark" : "light");
    changeAntimode(antimode === "anti-dark" ? "anti-light" : "anti-dark");
  };

  return (
    <>
      <div className={`mode-toggle ${mode}`}>
        <img
          onClick={toggleMode}
          src={modeIcon}
          alt="dark/light toggle icon"
          style={{
            filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
          }}
        />
      </div>
    </>
  );
};

export default ToggleIcon;
