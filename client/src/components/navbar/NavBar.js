import React from "react";
import "./navbar.css";
const NavBar = ({ handleLanguage, english }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="samal-logo">
        <a href="2">SAMAL AGRO</a>
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
              <strong className={!english ? "border-bottom border-dark" : ""}>
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
              <strong className={english ? "border-bottom border-dark" : ""}>
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
