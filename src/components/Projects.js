import React, { useState } from "react";
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
            {hovering ? (
              <a
                className={`project-1 ${antimode}`}
                href="https://vigilant-williams-d3cf74.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Hotel</h3>
              </a>
            ) : null}
          </div>
          <div
            className={`project-2 ${antimode}`}
            onMouseEnter={useHover2}
            onMouseLeave={reset}
          >
            {hovering2 ? (
              <a
                className={`project-1 ${antimode}`}
                href="https://zen-noether-7821f8.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Finance</h3>
              </a>
            ) : null}
          </div>
          <div
            className={`project-3 ${antimode}`}
            onMouseEnter={useHover3}
            onMouseLeave={reset}
          >
            {hovering3 ? (
              <a
                className={`project-1 ${antimode}`}
                href="https://vibrant-yonath-0d9281.netlify.app/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <h3>Local Portal</h3>
              </a>
            ) : null}
          </div>
          <div
            className={`project-4 ${antimode}`}
            onMouseEnter={useHover4}
            onMouseLeave={reset}
          >
            {hovering4 ? (
              <a
                className={`project-1 ${antimode}`}
                href="https://optimistic-lichterman-4db04d.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                yTalent
              </a>
            ) : null}
          </div>
          <div
            className={`project-5 ${antimode}`}
            onMouseEnter={useHover5}
            onMouseLeave={reset}
          >
            {hovering5 ? (
              <a
                className={`project-1 ${antimode}`}
                href="https://pedantic-leakey-0f6081.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
