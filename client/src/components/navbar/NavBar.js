import React, { useEffect, useState } from "react";
import "./navbar.css";
import ClientIcon from "../../assets/Iconos/clientes.WebP";
import Toogle from "./Toogle";
import Aos from "aos";
import "aos/dist/aos.css";
const NavBar = ({ handleLanguage, english }) => {
  const [csoon, setCsoon] = useState(false);
  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 1100 ? true : false,
  });

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
    let mediaQuery = window.matchMedia("(min-width: 1100px)");
    mediaQuery.addEventListener("change", setMQuery);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeEventListener("change", setMQuery);
  }, []);

  return (
    <div>
      {mQuery && !mQuery.matches ? (
        <Toogle
          english={english}
          SamalLogo="https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603529/home/landing/web/IMG_3697_mwgpxj.png"
          handleLanguage={handleLanguage}
        />
      ) : (
        <nav className="navbar-container" data-aos="zoom-in">
          <div className="samal-logo-container">
            <img
              className="samal-logo"
              src="https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603529/home/landing/web/IMG_3697_mwgpxj.png"
              alt="samal agro Logo"
            />
          </div>
          <div className="nav-middle">

            <ul>
              <li className="nav-item">
                <span className="border-bottom bold-word nav-link border-danger ">
                    { english ? "We are Samal" : "Somos Samal" }
                </span>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#products">
                   { english ?  "Products" :  "Productos" }
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#propose">
                    { english ?  "Value prop ": "Propuesta de valor" }
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#exportation">
                   { english ?  "Exportation" :  "Exportación" }
                </a>
              </li>

              <li className="nav-item">
                {english ? (
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                ) : (
                  <a className="nav-link" href="#contact">
                    Contacto
                  </a>
                )}
              </li>

            </ul>
          </div>
          <div className="navbar-lang">
            <ul className="">
              <li className="nav-item">
                <a
                  className="nav-link"
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
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={(e) => handleLanguage("en", e)}
                  href="1"
                >
                  <span
                    className={
                      english ? "border-bottom border-danger bold-word" : ""
                    }
                  >
                    ENG
                  </span>
                </a>
              </li>

              
                <div
                  className="nav-item login-container"
                  onMouseOver={() => setCsoon(true)}
                  onMouseLeave={() => setCsoon(false)}
                >
                  <span>
                    <img
                      className="client-icon"
                      src={`${ClientIcon}`}
                      alt="icon client"
                      loading="lazy"
                    />
                  </span>
                  <p className={`nav-link ${csoon ? "invisible" : null}`}>
                    {english ? "Clients" : "Clientes"}
                  </p>{" "}
                  {csoon ? (
                    <span className="nav-feature">{english ? "Coming Soon" : "Proximamente"}</span>
                  ) : null}
                </div>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavBar;
