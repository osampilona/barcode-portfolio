import React from "react";
import { Link } from "react-router-dom";
import "../styles/HamLinks.css";
import { useTheme } from "../hooks/useTheme";

const HamLinks = () => {
  const { mode } = useTheme();
  return (
    <nav className={`${mode} hamburger-list`}>
      <ul>
        <li className={mode}>
          <Link to="/" className={mode}>
            Home
          </Link>
        </li>
        <li className={mode}>
          <Link to="/about" className={mode}>
            About
          </Link>
        </li>
        <li className={mode}>
          <Link to="/projects" className={mode}>
            Projects
          </Link>
        </li>
        <li className={mode}>
          <Link to="/gallery" className={mode}>
            Gallery
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HamLinks;
