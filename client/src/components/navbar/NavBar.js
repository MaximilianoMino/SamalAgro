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
          SamalLogo="https://res.cloudinary.com/dpwdm3ip1/image/upload/q_auto:eco,f_auto/v1686603529/home/landing/web/IMG_3697_mwgpxj.png"
          handleLanguage={handleLanguage}
        />
      ) : (
        <nav className="navbar-container" data-aos="zoom-in">
          <div className="samal-logo-container">
            <img
              className="samal-logo"
              src="https://res.cloudinary.com/dpwdm3ip1/image/upload/q_auto:eco,f_auto/v1686603529/home/landing/web/IMG_3697_mwgpxj.png"
              alt="samal agro Logo"
            />
          </div>
          <div className="nav-middle">

            <ul>
              <li>
                <span className="nav-middle-item" style={{borderBottom: "#c6261e 2px solid", paddingBottom: ".3em"}}>
                    { english ? "We are Samal" : "Somos Samal" }
                </span>
              </li>

              <li>
                <a 
                className="nav-middle-item"
                href="#products">
                   { english ?  "Products" :  "Productos" }
                </a>
              </li>

              <li>
                <a 
                className="nav-middle-item"
                href="#propose">
                    { english ?  "Value prop ": "Propuesta de valor" }
                </a>
              </li>

              <li>
                <a 
                className="nav-middle-item"
                href="#exportation">
                   { english ?  "Exportation" :  "Exportación" }
                </a>
              </li>

              <li >
                <a 
                className="nav-middle-item"
                href="#contact">
                   { english ?  "Contact" :  "Contacto" }
                </a>
              </li>

            </ul>
          </div>
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
  
                <div
                  className="login-container"
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
                  <p className={`${csoon ? "not-visibled" : "login-container-clients"}`}>
                    {english ? "Clients" : "Clientes"}
                  </p>{" "}
                  {csoon ? (
                    <span className="nav-feature">{english ? "Coming Soon" : "Proximamente"}</span>
                  ) : null}
                </div>
            
        </nav>
      )}
    </div>
  );
};

export default NavBar;
