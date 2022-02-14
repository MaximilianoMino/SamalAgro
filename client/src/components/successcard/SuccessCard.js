import React from "react";
import "./succes.css";
import check from "../../assets/Iconos/check.png";
const SuccessCard = ({ english, setSuccessCard }) => {
  const handleClose = () => {
    setSuccessCard(false);
  };
  return (
    <div id="contact" className="success-card-container">
      {english ? (
        <div className="success-content-container">
          {" "}
          <i
            className="bi close-icon bi-x-circle"
            onClick={handleClose}
          ></i>{" "}
          <img src={`${check}`} className="check-icon" alt="success" />
          <p className="success-card-title py-4">
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
          {" "}
          <i
            className="bi close-icon bi-x-circle"
            onClick={handleClose}
          ></i>{" "}
          <img src={`${check}`} className="check-icon" alt="success" />
          <p className="success-card-title py-4">
            ¡Gracias por
            <br /> contactarte con
            <br /> nosotros!
          </p>
          <p className="success-card-subtitle">
            Recibimos tu mensaje,
            <br /> en la brevedad tendrás una respuesta.
          </p>{" "}
        </div>
      )}
    </div>
  );
};

export default SuccessCard;
