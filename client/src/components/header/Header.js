import { useEffect, useState } from "react";

import AboutEs from "../about/AboutEs";
import NavBar from "../navbar/NavBar";
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
      <img
        src="https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603532/home/landing/web/5_grdhj1.jpg"
        alt="Samal agro man seeding"
        className="imgBg"
        loading="lazy"
      />
      <video className="videoTag" src="https://res.cloudinary.com/dpwdm3ip1/video/upload/v1686603760/home/landing/web/Samal_Agor_Inst-_2_euzk0a.mp4" autoPlay loop muted></video>
    </div>
  );
};

export default Header;
