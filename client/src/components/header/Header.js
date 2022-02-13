import React from "react";
import AboutEs from "../about/AboutEs";
import NavBar from "../navbar/NavBar";
import video from "../../assets/videos/Samal_fragmento.mp4";
import "./header.css";
import AboutEn from "../about/AboutEn";

const Header = ({ handleLanguage, english }) => {
  return (
    <div id="header" className="header-container">
      <div className="header-body">
        <NavBar handleLanguage={handleLanguage} english={english} />
        {english ? <AboutEn /> : <AboutEs />}
      </div>

      <video className="videoTag" src={video} autoPlay loop muted></video>
    </div>
  );
};

export default Header;
