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
       <div className="navbar-lang">
            <p
            onClick={(e) => handleLanguage("es", e)}
            >
            <span
            className={
            !english ? "active-lang" : ""
            }
            >
            ESP
            </span>
            </p>
            <p
            onClick={(e) => handleLanguage("en", e)}
            >
            <span
            className={
            english ? "active-lang" : ""
            }
            >
            ENG
            </span>
            </p>
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
