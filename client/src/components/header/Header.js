import { useEffect, useState } from "react";

import AboutEs from "../about/AboutEs";
import NavBar from "../navbar/NavBar";
import video from "../../assets/videos/Samal_fragmento_7.mp4";
import imgBg from "../../assets/images/Landing/5.jpg";
import "./header.css";
import AboutEn from "../about/AboutEn";

const Header = ({ handleLanguage, english }) => {
  const [onLoad, setOnLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOnLoad(true);
    }, 2000);
  }, []);

  return (
    <div id="header" className="header-container">
      {onLoad ? (
        <div>
          <div className="header-body">
            <NavBar handleLanguage={handleLanguage} english={english} />
            {english ? <AboutEn /> : <AboutEs />}
          </div>
          <div></div>
        </div>
      ) : null}
      <img src={imgBg} alt="Samal agro man seeding" className="imgBg" />
      <video className="videoTag" src={video} autoPlay loop muted></video>
    </div>
  );
};

export default Header;
