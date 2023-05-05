import React from "react";
import "../styles/Footer.css";
import { useTheme } from "../hooks/useTheme";

function Footer() {
  const { mode } = useTheme();

  return (
    <section className={`footer ${mode}`}>
      <h1>Martina Miljak</h1>
      <h3>martinamiljak92@gmail.com</h3>
      <p>Thank you for visiting</p>
    </section>
  );
}

export default Footer;
