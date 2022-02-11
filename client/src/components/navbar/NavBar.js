import React from "react";
import "./navbar.css";
import SamalLogo from "../../assets/images/Landing/IMG_3697.PNG";
const NavBar = ({ handleLanguage, english }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent mb-5">
      <div className="">
        <img className="mt-3 samal-logo" src={`${SamalLogo}`} alt="SamalLogo" />
      </div>
      <div className="justify-content-around navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-danger" href="2">
              {english ? (
                <strong className="border-bottom border-danger pb-2">
                  We are Samal
                </strong>
              ) : (
                <strong className="border-bottom border-danger pb-2">
                  Somos Samal
                </strong>
              )}
            </a>
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
                Value proposal
              </a>
            ) : (
              <a className="nav-link" href="#propose">
                Propuesta de valor
              </a>
            )}
          </li>
          <li class="nav-item">
            {english ? (
              <a className="nav-link" href="#exports">
                Exportation
              </a>
            ) : (
              <a className="nav-link" href="#exports">
                Exportación
              </a>
            )}
          </li>
          <li class="nav-item">
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
              <strong
                className={
                  !english ? "border-bottom text-danger border-danger" : ""
                }
              >
                ESP
              </strong>
            </a>
          </li>
          <li class="nav-item">
            <a
              className="nav-link"
              onClick={(e) => handleLanguage("en", e)}
              href="1"
            >
              <strong
                className={
                  english ? "border-bottom border-danger text-danger" : ""
                }
              >
                EN
              </strong>
            </a>
          </li>
          <li class="nav-item">
            {english ? (
              <a className="nav-link" href="2">
                Clients
              </a>
            ) : (
              <a className="nav-link" href="2">
                Clientes
              </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
