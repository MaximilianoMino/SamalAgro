import React, { useState } from "react";
import "./navbar.css";
import SamalLogo from "../../assets/images/Landing/IMG_3697.PNG";
import ClientIcon from "../../assets/Iconos/clientes.png";

const NavBar = ({ handleLanguage, english }) => {
  const [csoon, setCsoon] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg bg-transparent mb-5">
      <div className="">
        <img className="mt-3 samal-logo" src={`${SamalLogo}`} alt="SamalLogo" />
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
                />
              </span>
              <a
                className="nav-link"
                href="2"
                data-toggle="tooltip tooltip-danger"
                data-placement="right"
                title="Tooltip on top"
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
                />
              </span>
              <a
                className="nav-link"
                href="2"
                data-toggle="tooltip"
                data-placement="top"
                title="Tooltip on top"
              >
                Clientes
              </a>
              {csoon ? <span class="nav-feature">Proximamente</span> : null}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
