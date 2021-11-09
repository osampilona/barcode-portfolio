import React from "react";
import { useTheme } from "../hooks/useTheme";
import "../styles/Categories.css";
import { Link } from "react-router-dom";

function Categories({ single, categoryTitle, name, lastName }) {
  const isSingle = single === true ? "one" : "white";
  const { mode } = useTheme();

  return (
    <>
      {categoryTitle ? (
        <Link className="white" to={`/${categoryTitle.toLowerCase()}`}>
          <div className={`${isSingle} ${mode}`}>
            <h1>
              <span>{name}</span>
              {lastName}
              {categoryTitle}
            </h1>
          </div>
        </Link>
      ) : (
        <Link className="one" to="/">
          <div className={`${isSingle} ${mode}`}>
            <h1>
              <span>{name}</span>
              {lastName}
              {categoryTitle}
            </h1>
          </div>
        </Link>
      )}
    </>
  );
}

export default Categories;
