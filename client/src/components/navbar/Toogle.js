import React, { useState } from "react";
import ToogleIcon from "../../assets/Iconos/burguer-toogle.png";
import "./navbar.css";
import NavBarMobile from "./NavBarMobile";

const Toogle = ({ english, SamalLogo, handleLanguage }) => {
  const [openToogle, setOpenToogle] = useState(false);

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
    <div className="burguer-toogle">
      <div className="">
        <img className="samal-logo" src={`${SamalLogo}`} alt="SamalLogo" />
      </div>
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
          alt="burguer-toogle"
          onClick={handleToogle}
        />
      </div>
      {openToogle ? (
        <NavBarMobile setOpenToogle={setOpenToogle} english={english} />
      ) : null}
    </div>
  );
};

export default Toogle;
