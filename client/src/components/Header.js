import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  const toggleMode = e => {
    //console.log("Button Pressed");
    e.preventDefault();
    setDarkMode(!darkMode);
    //console.log("dark-mode: ", darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Womens World Cup Google Searches from June - July 2019</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};
export default Header;
