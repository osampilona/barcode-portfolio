import React from "react";
import { useTheme } from "../hooks/useTheme";
import "../styles/Categories.css";

function Categories({ single, categoryTitle, name, lastName }) {
  const isSingle = single === true ? "one" : "white";
  const { mode } = useTheme();

  return (
    <div className={`${isSingle} ${mode}`}>
      <h1>
        <span>{name}</span>
        {lastName}
        {categoryTitle}
      </h1>
    </div>
  );
}

export default Categories;
