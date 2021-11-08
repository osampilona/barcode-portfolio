import React from "react";
import Categories from "./Categories";
import "../styles/Sidebar.css";

function Sidebar({ categoryNumb }) {
  let categoryArray = Array.from(Array(categoryNumb).keys());
  const titles = ["Projects", "Gallery"];

  return (
    <div className="sidebar">
      {categoryArray.map((id) => {
        if (categoryNumb === 1) {
          return (
            <Categories
              key={id}
              name="Martina"
              lastName="Brzica"
              single={true}
            />
          );
        }
        return <Categories key={id} categoryTitle={titles[id]} />;
      })}
    </div>
  );
}

export default Sidebar;
