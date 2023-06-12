import React, { useEffect, useState } from "react";
import ToogleIcon from "../../assets/Iconos/burguer-toogle.WebP";
import "./navbar.css";
import NavBarMobile from "./NavBarMobile";
import Aos from "aos";
import "aos/dist/aos.css";
const Toogle = ({ english, SamalLogo, handleLanguage }) => {
  const [openToogle, setOpenToogle] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  const handleToogle = (e) => {
    try {
      if (!openToogle) {
        setOpenToogle(true);
      } else {
        setOpenToogle(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="burguer-toogle" data-aos="zoom-in">
        <img
          className="samal-logo"
          src={`${SamalLogo}`}
          alt="SamalLogo"
          loading="lazy"
        />
      <div className="lang-container">
        <ul className="navbar-nav">
          <li
            className="lang"
            onClick={(e) => handleLanguage("es", e)}
            href="1"
          >
            <span
              className={
                !english ? "border-bottom bold-word  border-danger" : ""
              }
            >
              ESP
            </span>
          </li>
          <li
            className="lang"
            onClick={(e) => handleLanguage("en", e)}
            href="1"
          >
            <span
              className={english ? "border-bottom border-danger bold-word" : ""}
            >
              ENG
            </span>
          </li>
        </ul>{" "}
      </div>
      <div>
        <img
          src={`${ToogleIcon}`}
          className="burguer-toogle-img"
          alt="samal agro burguer-toogle"
          onClick={handleToogle}
          loading="lazy"
        />
      </div>
      {openToogle ? (
        <NavBarMobile setOpenToogle={setOpenToogle} english={english} />
      ) : null}
    </div>
  );
};

export default Toogle;
