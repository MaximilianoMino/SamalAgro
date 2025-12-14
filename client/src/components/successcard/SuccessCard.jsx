import React, { useEffect } from "react";
import "./succes.css";
import check from "../../assets/icons/check.WebP";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
const SuccessCard = ({ english, setSuccessCard }) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  const handleClose = () => {
    setSuccessCard(false);
  };
  return (
    <section id="contact" className="success-card-container" data-aos="zoom-in">
      {english ? (
        <div className="success-content-container">
          <IoIosCloseCircleOutline className="success-card-close-icon" onClick={handleClose}/>
          <img src={`${check}`} className="check-icon" alt="success" />
          <p className="success-card-title">
            Thanks for
            <br /> contact with us!
          </p>
          <p className="success-card-subtitle">
            We received your message,
            <br /> soon you will have news.
          </p>
        </div>
      ) : (
        <div className="success-content-container">
          <IoIosCloseCircleOutline className="success-card-close-icon" onClick={handleClose}/>

          <img
            src={`${check}`}
            className="check-icon"
            alt="samal-success"
            loading="lazy"
          />
          <p className="success-card-title">
            ¡Gracias por
            <br /> contactarte con
            <br /> nosotros!
          </p>
          <p className="success-card-subtitle">
            Recibimos tu mensaje,
            <br /> en la brevedad tendrás una respuesta.
          </p>
        </div>
      )}
    </section>
  );
};

export default SuccessCard;
