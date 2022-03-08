import React, { useState, useEffect } from "react";
import SamalLogo from "../../assets/images/Landing/IMG_3697.WebP";
import "./navbarmobile.css";
import Aos from "aos";
import "aos/dist/aos.css";
const NavBarMobile = ({ setOpenToogle, english }) => {
  const [csoon, setCsoon] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <nav className="nav-mobile-container" data-aos="zoom-out-left">
      <div className="nav-mobile-header">
        <img
          className="mobile-samal-logo"
          src={`${SamalLogo}`}
          alt="samal agro Logo"
        />
        <p className="mobile-close-btn" onClick={() => setOpenToogle(false)}>
          X
        </p>
      </div>
      <div className="nav-mobile">
        <ul className="nav-mobile-ul">
          <li
            className="nav-mobile-item"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <a className="nav-mobile-link" href="#products">
              {english ? "Products" : "Productos"}
            </a>
          </li>
          <li
            className="nav-mobile-item"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000"
          >
            <a className="nav-mobile-link" href="#propose">
              {english ? "Value prop" : "Propuesta de valor"}
            </a>
          </li>
          <li
            className="nav-mobile-item"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1500"
          >
            <a className="nav-mobile-link" href="#exportation">
              {english ? "Export" : "Exportación"}
            </a>
          </li>
          <li
            className="nav-mobile-item"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="2000"
          >
            <a className="nav-mobile-link" href="#contact">
              {english ? "Contact" : "Contacto"}{" "}
            </a>
          </li>{" "}
          <li
            className="nav-mobile-item"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="2500"
          >
            <a
              className="nav-mobile-link"
              href="#2"
              onClick={() => setCsoon(true)}
            >
              {english ? "Clients" : "Clientes"}
            </a>
            {csoon && english ? (
              <span
                className="nav-mobile-feature"
                onClick={() => setCsoon(false)}
              >
                Coming Soon
              </span>
            ) : null}
            {csoon && !english ? (
              <span
                className="nav-mobile-feature"
                onClick={() => setCsoon(false)}
              >
                Proximamente
              </span>
            ) : null}
          </li>
        </ul>
      </div>
      <div className="nav-mobile-footer">
        <div className="nav-mobile-icons">
          <a
            className="anchor-nav-mobile"
            href="https://www.facebook.com/samalagro/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="bi nav-mobile-icon bi-facebook"></i>
          </a>
          <a
            className="anchor-nav-mobile"
            href="https://www.instagram.com/samalagro/?hl=es-la"
            rel="noreferrer"
            target="_blank"
          >
            <i className="bi nav-mobile-icon bi-instagram"></i>
          </a>
          <a
            className="anchor-nav-mobile"
            href="https://api.whatsapp.com/send?phone=543533503323&app=facebook&entry_point=page_cta&fbclid=IwAR2WWIYyNeHclXhpR0hmkKN1AHzofODxoXg4eWqqxk7OWLOPgBpIcJGaU_4"
            rel="noreferrer"
            target="_blank"
          >
            <i className="bi nav-mobile-icon bi-whatsapp"></i>
          </a>
        </div>

        {english ? (
          <div className="nav-mobile-copyright">
            <strong>
              <small>
                &copy; 2022 SamalAgro.
                <p>All rights reserved.</p>
              </small>
            </strong>{" "}
          </div>
        ) : (
          <div className="nav-mobile-copyright">
            <strong>
              <small>
                &copy; 2022 SamalAgro. <p>Todos los derechos reservados.</p>
              </small>
            </strong>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBarMobile;
