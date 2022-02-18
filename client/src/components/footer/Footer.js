import React from "react";
import "./footer.css";
import SamalFooter from "../../assets/images/Landing/samalfooter.png";
import FacebookIcon from "../../assets/Iconos/facebook-icon.png";

const Footer = ({ english }) => {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <a href="#header">
          <img
            src={`${SamalFooter}`}
            className="footer-logo"
            alt="Samal agro Footer"
            loading="lazy"
          />
        </a>
      </div>
      <div className="footer-text">
        {english ? (
          <strong>
            <small>&copy; 2022 SamalAgro. All rights reserved .</small>
          </strong>
        ) : (
          <strong>
            <small>&copy; 2022 SamalAgro. Todos los derechos reservados.</small>
          </strong>
        )}
      </div>
      <div className="footer-icons-container">
        <a
          className="anchor-footer"
          href="https://www.instagram.com/samalagro/?hl=es-la"
          rel="noreferrer"
          target="_blank"
        >
          <i class="bi footer-icon bi-instagram"></i>
        </a>{" "}
        <a
          className="anchor-footer"
          href="https://www.facebook.com/samalagro/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={`${FacebookIcon}`}
            alt="samal agro icon facebook"
            className="facebook-icon"
          />
        </a>
        <a
          className="anchor-footer"
          href="https://api.whatsapp.com/send?phone=543533503323&app=facebook&entry_point=page_cta&fbclid=IwAR2WWIYyNeHclXhpR0hmkKN1AHzofODxoXg4eWqqxk7OWLOPgBpIcJGaU_4"
          rel="noreferrer"
          target="_blank"
        >
          <i class="bi footer-icon bi-whatsapp"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
