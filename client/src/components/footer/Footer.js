import React, { useEffect } from "react";
import { handleClickGA } from "services/analytics";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import "./footer.css";

const Footer = ({ english }) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  const handleClickGAOnSocialMedia = (platform) => {
    console.log(platform);
    handleClickGA('Social Media', 'Click', platform)
  }

  const social_media = [
    {
        icon: <BsFacebook className="footer-icon"/>,
        go_to: "https://www.facebook.com/samalagro/",
        onClick: () => handleClickGAOnSocialMedia('Facebook')
    },
    {
        icon: <BsInstagram className="footer-icon"/>,
        go_to: "https://www.instagram.com/samalagro/?hl=es-la",
        onClick: () => handleClickGAOnSocialMedia('Instagram')
    },
    {
        icon: <BsWhatsapp className="footer-icon"/>, 
        go_to: "https://api.whatsapp.com/send?phone=543533503323&app=facebook&entry_point=page_cta&fbclid=IwAR2WWIYyNeHclXhpR0hmkKN1AHzofODxoXg4eWqqxk7OWLOPgBpIcJGaU_4",
        onClick: () => handleClickGAOnSocialMedia('Whatsapp')
    }
]

  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <a href="#header">
          <img
            src="https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603529/home/landing/web/samalfooter_ea2nsf.png"
            className="footer-logo"
            alt="Samal agro Footer"
            loading="lazy"
          />
        </a>
      </div>
      <div className="footer-text">
        <strong>
              <small>
                &copy;  2022 SamalAgro.
                 { english ? " All rights reserved." : " Todos los derechos reservados."} 
              </small>
            </strong>
      </div>
      <div className="footer-icons-container">
         { social_media.map( ( media, index ) => {
              return (
              <a 
                className="anchor-footer"  
                rel="noreferrer"
                target="_blank" 
                href={media.go_to}
                onClick={media.onClick}
                key={index}
                >
                    {media.icon}
                </a>
              )
            } )}
      </div>
    </footer>
  );
};

export default Footer;
