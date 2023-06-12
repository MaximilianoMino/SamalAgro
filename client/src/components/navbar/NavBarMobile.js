import React, { useState, useEffect } from "react";
import "./navbarmobile.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { AiOutlineClose } from 'react-icons/ai';

const social_media = [
    {
        icon: "bi-facebook",
        go_to: "https://www.facebook.com/samalagro/"
    },
    {
        icon: "bi-instagram",
        go_to: "https://www.instagram.com/samalagro/?hl=es-la",
    },
    {
        icon: "bi-whatsapp", 
        go_to: "https://api.whatsapp.com/send?phone=543533503323&app=facebook&entry_point=page_cta&fbclid=IwAR2WWIYyNeHclXhpR0hmkKN1AHzofODxoXg4eWqqxk7OWLOPgBpIcJGaU_4"
    }
]


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
          src="https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603529/home/landing/web/IMG_3697_mwgpxj.png"
          alt="samal agro Logo"
        />
        <AiOutlineClose className="mobile-close-btn" onClick={() => setOpenToogle(false)}/>
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
          </li>
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
            {csoon && 
              <span
                className="nav-mobile-feature"
                onClick={() => setCsoon(false)}
              >
               { english ? "Coming Soon" : "Proximamente" } 
              </span>
            }
          </li>
        </ul>
      </div>
      <div className="nav-mobile-footer">
        <div className="nav-mobile-icons">
            { social_media.map( ( media, index ) => {
              return (
              <a 
                className="anchor-nav-mobile"  
                rel="noreferrer"
                target="_blank" 
                href={media.go_to}
                key={index}
                >
                    <i className={`bi nav-mobile-icon ${media.icon}`}></i>
                </a>
              )
            } )}
        </div>

          <div className="nav-mobile-copyright">
            <strong>
              <small>
                &copy;  2022 SamalAgro.
                <p> { english ? "All rights reserved." : "Todos los derechos reservados."}</p> 
              </small>
            </strong>
          </div>
       
      </div>
    </nav>
  );
};

export default NavBarMobile;
