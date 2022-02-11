import React from "react";
import About from "../about/About";
import NavBar from "../navbar/NavBar";
import video from "../../assets/videos/Samal_fragmento.mp4";
import "./header.css";

const Header = ({ handleLanguage, english }) => {
  return (
    <div className="header-container">
      <div className="header-body">
        <NavBar handleLanguage={handleLanguage} english={english} />
        <About />
      </div>

      <video className="videoTag" width="100%" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Header;
