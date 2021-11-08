import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import "../styles/Barcode.css";

function Barcode({
  themeColor,
  // myBarcode,
  // longThinLine,
  // `long-thick `,
  // shortThinLine,
  // `short-thick ${mode}`,
}) {
  const [line, setLine] = useState("not-visible");
  const { mode, antimode } = useTheme();

  const lineShow = () => {
    if (useTheme === "all-together") {
      setLine("visible");
    } else {
      setLine("visible-dark");
    }

    if (useTheme === "all-together-dark") {
      setLine("visible-dark");
    } else {
      setLine("visible");
    }

    if (line === "visible" || line === "visible-dark") {
      setLine("not-visible");
    }
  };
  const reset = () => {
    setLine("not-visible");
  };

  return (
    <div
      className={"barcode " + mode}
      onMouseEnter={lineShow}
      onMouseLeave={reset}
    >
      <div className={line}></div>
      <p>---- ABOUT MARTINA ----</p>
      <div className="all-lines">
        <section className="long">
          <div className={`long-thin ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
          <div className={`long-thick ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
        </section>
        <div className="lines-and-numbers">
          <section className="short">
            <div className={`short-thick ${antimode}`}></div>
            <div className={`short-thin ${antimode}`}></div>
            <div className={`short-thick ${antimode}`}></div>
            <div className={`short-thin ${antimode}`}></div>
            <div className={`short-thin ${antimode}`}></div>
            <div className={`short-thick ${antimode}`}></div>
          </section>
          <div>----</div>
        </div>
        <section className="long">
          <div className={`long-thick ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
          <div className={`long-thick ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
        </section>
        <div className="lines-and-numbers">
          <section className="short">
            <div className={`short-thick ${antimode}`}></div>
            <div className={`short-thick ${antimode}`}></div>
            <div className={`short-thin ${antimode}`}></div>
            <div className={`short-thin ${antimode}`}></div>
            <div className={`short-thick ${antimode}`}></div>
            <div className={`short-thin ${antimode}`}></div>
          </section>
          <div>-08-</div>
        </div>
        <section className="long">
          <div className={`long-thin ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
          <div className={`long-thick ${antimode}`}></div>
          <div className={`long-thick ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
        </section>
        <div className="lines-and-numbers">
          <section className="short">
            <div className={`short-thin ${antimode}`}></div>
            <div className={`short-thick ${antimode}`}></div>
            <div className={`short-thick ${antimode}`}></div>
            <div className={`short-thin ${antimode}`}></div>
            <div className={`short-thin ${antimode}`}></div>
            <div className={`short-thick ${antimode}`}></div>
          </section>
          <div>-01-</div>
        </div>
        <section className="long">
          <div className={`long-thick ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
        </section>
        <div className="lines-and-numbers">
          <section className="short">
            <div className={`short-thick ${antimode}`}></div>
            <div className={`short-thin ${antimode}`}></div>
            <div className={`short-thin ${antimode}`}></div>
            <div className={`short-thick ${antimode}`}></div>
            <div className={`short-thick ${antimode}`}></div>
            <div className={`short-thin ${antimode}`}></div>
          </section>
          <div>-1992-</div>
        </div>
        <section className="long">
          <div className={`long-thin ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
          <div className={`long-thick ${antimode}`}></div>
          <div className={`long-thick ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
        </section>
        <div className="lines-and-numbers">
          <section className="short">
            <div className={`short-thin ${antimode}`}></div>
            <div className={`short-thin ${antimode}`}></div>
            <div className={`short-thick ${antimode}`}></div>
            <div className={`short-thick ${antimode}`}></div>
            <div className={`short-thin ${antimode}`}></div>
            <div className={`short-thick ${antimode}`}></div>
          </section>
          <div>----</div>
        </div>
        <section className="long">
          <div className={`long-thin ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
          <div className={`long-thick ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
          <div className={`long-thin ${antimode}`}></div>
        </section>
      </div>
    </div>
  );
}

export default Barcode;
