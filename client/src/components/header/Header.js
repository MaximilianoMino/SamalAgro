import React from "react";
import About from "../about/About";
import NavBar from "../navbar/NavBar";
import "./header.css";

const Header = ({ handleLanguage, english }) => {
  return (
    <div className="p-5 header-container">
      <NavBar handleLanguage={handleLanguage} english={english} />
      <About />
    </div>
  );
};

export default Header;
