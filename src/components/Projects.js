import React, { useState } from "react";
import ToggleIcon from "./ToggleIcon";
import "../styles/Projects.css";
import Navbar from "./Navbar";
import { useTheme } from "../hooks/useTheme";
import TopNavBar from "./TopNavBar";

const Projects = () => {
  const [hovering, setHovering] = useState(false);
  const [hovering2, setHovering2] = useState(false);
  const [hovering3, setHovering3] = useState(false);
  const [hovering4, setHovering4] = useState(false);
  const [hovering5, setHovering5] = useState(false);
  const { antimode } = useTheme();

  const useHover = () => {
    if (hovering === false) {
      setHovering(true);
    } else {
      setHovering(false);
    }
  };
  const useHover2 = () => {
    if (hovering2 === false) {
      setHovering2(true);
    } else {
      setHovering2(false);
    }
  };
  const useHover3 = () => {
    if (hovering3 === false) {
      setHovering3(true);
    } else {
      setHovering3(false);
    }
  };
  const useHover4 = () => {
    if (hovering4 === false) {
      setHovering4(true);
    } else {
      setHovering4(false);
    }
  };
  const useHover5 = () => {
    if (hovering5 === false) {
      setHovering5(true);
    } else {
      setHovering5(false);
    }
  };

  const reset = () => {
    setHovering(false);
    setHovering2(false);
    setHovering3(false);
    setHovering4(false);
    setHovering5(false);
  };

  // console.log(hovering);

  return (
    <>
      <div className="grid-container">
        <TopNavBar />
        <Navbar />
        <div className="main-grid">
          <div
            className={`project-1 ${antimode}`}
            onMouseEnter={useHover}
            onMouseLeave={reset}
          >
            {hovering ? "This is my 1st project" : null}
          </div>
          <div
            className={`project-2 ${antimode}`}
            onMouseEnter={useHover2}
            onMouseLeave={reset}
          >
            {hovering2 ? "This is my 2nd project" : null}
          </div>
          <div
            className={`project-3 ${antimode}`}
            onMouseEnter={useHover3}
            onMouseLeave={reset}
          >
            {hovering3 ? "This is my 3rd project" : null}
          </div>
          <div
            className={`project-4 ${antimode}`}
            onMouseEnter={useHover4}
            onMouseLeave={reset}
          >
            {hovering4 ? "This is my 4th project" : null}
          </div>
          <div
            className={`project-5 ${antimode}`}
            onMouseEnter={useHover5}
            onMouseLeave={reset}
          >
            {hovering5 ? "This is my 5th project" : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
