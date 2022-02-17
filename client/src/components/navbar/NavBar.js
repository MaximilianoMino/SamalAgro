import React, { useEffect, useState } from "react";
import "./navbar.css";
import SamalLogo from "../../assets/images/Landing/IMG_3697.PNG";
import ClientIcon from "../../assets/Iconos/clientes.png";
import Toogle from "./Toogle";

const NavBar = ({ handleLanguage, english }) => {
  const [csoon, setCsoon] = useState(false);
  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 600 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 600px)");
    mediaQuery.addEventListener("change", setMQuery);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeEventListener("change", setMQuery);
  }, []);

  return (
    <div>
      {mQuery && !mQuery.matches ? (
        <Toogle
          english={english}
          SamalLogo={SamalLogo}
          handleLanguage={handleLanguage}
        />
      ) : (
        <nav className="navbar navbar-expand-lg bg-transparent mb-4">
          <div className="">
            <img
              className="mt-3 samal-logo"
              src={`${SamalLogo}`}
              alt="SamalLogo"
              loading="lazy"
            />
          </div>
          <div className="justify-content-around navbar-light">
            <ul className="navbar-nav">
              <li className="">
                {english ? (
                  <span className="border-bottom bold-word nav-link border-danger pb-2">
                    We are Samal
                  </span>
                ) : (
                  <span className="border-bottom bold-word nav-link border-danger pb-2">
                    Somos Samal
                  </span>
                )}
              </li>
              <li className="nav-item">
                {english ? (
                  <a className="nav-link" href="#products">
                    Products
                  </a>
                ) : (
                  <a className="nav-link" href="#products">
                    Productos
                  </a>
                )}
              </li>
              <li class="nav-item">
                {english ? (
                  <a className="nav-link" href="#propose">
                    Value prop
                  </a>
                ) : (
                  <a className="nav-link" href="#propose">
                    Propuesta de valor
                  </a>
                )}
              </li>
              <li class="nav-item">
                {english ? (
                  <a className="nav-link" href="#exportation">
                    Exportation
                  </a>
                ) : (
                  <a className="nav-link" href="#exportation">
                    Exportación
                  </a>
                )}
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
          <div className="navbar-light ms-5">
            <ul className="navbar-nav">
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
              <li class="nav-item">
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

              {english ? (
                <li class="nav-item d-flex">
                  <span
                    onMouseOver={() => setCsoon(true)}
                    onMouseLeave={() => setCsoon(false)}
                  >
                    <img
                      className="client-icon"
                      src={`${ClientIcon}`}
                      alt="icon client"
                      loading="lazy"
                    />
                  </span>
                  <a
                    className={`nav-link ${csoon ? "invisible" : null}`}
                    href="2"
                  >
                    Clients
                  </a>{" "}
                  {csoon ? <span class="nav-feature">Coming Soon</span> : null}
                </li>
              ) : (
                <li class="nav-item d-flex">
                  <span
                    onMouseOver={() => setCsoon(true)}
                    onMouseLeave={() => setCsoon(false)}
                  >
                    <img
                      className="client-icon"
                      src={`${ClientIcon}`}
                      alt="icon client"
                      loading="lazy"
                    />
                  </span>
                  <a
                    className={`nav-link ${csoon ? "invisible" : null}`}
                    href="2"
                  >
                    Clientes
                  </a>
                  {csoon ? <span class="nav-feature">Proximamente</span> : null}
                </li>
              )}
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavBar;
