import React from "react";
import Footer from "./Footer";
import "../styles/About.css";
import { useTheme } from "../hooks/useTheme";
import Navbar from "./Navbar";
import ToggleIcon from "./ToggleIcon";

const About = () => {
  const { mode } = useTheme();

  return (
    <div className={`container ${mode}`}>
      <div className="icon">
        <ToggleIcon />
      </div>
      <Navbar />
      <div className={`text ${mode}`}>
        <h5>Hi from about</h5>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, cum
          optio! Nesciunt, aut neque ab repudiandae quos similique corrupti
          iure, fugit modi eius animi? Et necessitatibus expedita dolore veniam
          sunt.
        </p>
      </div>
      <div className={`text ${mode}`}>
        <h5>Hi from about</h5>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, cum
          optio! Nesciunt, aut neque ab repudiandae quos similique corrupti
          iure, fugit modi eius animi? Et necessitatibus expedita dolore veniam
          sunt.
        </p>
      </div>
      <div className={`text ${mode}`}>
        <h5>Hi from about</h5>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, cum
          optio! Nesciunt, aut neque ab repudiandae quos similique corrupti
          iure, fugit modi eius animi? Et necessitatibus expedita dolore veniam
          sunt.
        </p>
      </div>
      <div className={`text ${mode}`}>
        <h5>Hi from about</h5>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, cum
          optio! Nesciunt, aut neque ab repudiandae quos similique corrupti
          iure, fugit modi eius animi? Et necessitatibus expedita dolore veniam
          sunt.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
