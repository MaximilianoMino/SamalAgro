import React from "react";
import "./popup.css";
import shipments from "../../assets/Iconos/envios_samal.WebP";
import { IoIosCloseCircleOutline } from 'react-icons/io'

const Popup = ({
  data,
  setModal,
  setNorthAm,
  setSouthAm,
  setAsia,
  setEurope,
  setAfrica,
  setCaribbean,
  africa,
  europe,
  asia,
  southAm,
  northAm,
  caribbean,
  english,
}) => {
  const { countries, title } = data;
  const handleClose = (e) => {
    e.preventDefault();
    try {
      setModal(false);
      if (northAm) {
        setNorthAm(false);
      }
      if (southAm) {
        setSouthAm(false);
      }
      if (asia) {
        setAsia(false);
      }
      if (europe) {
        setEurope(false);
      }
      if (africa) {
        setAfrica(false);
      }
      if (caribbean) {
        setCaribbean(false);
      }
    } catch (error) {
    console.log("🚀 ~ file: Popup.js:47 ~ handleClose ~ error:", error)
    }
  };
  return (
    <div className="popup-container">
      <div className="popup-header">
        <p className="popup-header-title">{title}</p>
        <IoIosCloseCircleOutline className="popup-header-close-icon" onClick={handleClose}/>
      </div>
      <div className="popup-body">
        {countries.map((country, index) => {
          return (
            <div className="popup-body-wrap" key={index}>
              <div className="popup-country">
                <p>{country.country}</p>
                <span>
                  ({english ? "SINCE" : "DESDE"} {country.since})
                </span>
              </div>
              <div className="popup-info">
                <div>
                  <p className="popup-info-number">{country.annual_tons}</p>
                  <p className="popup-info-text">{english ? "metric tons" : "toneladas"}</p>
                </div>
                <div className="popup-icons-container">
                  <img
                    className="popup-icons"
                    src={`${shipments}`}
                    alt="samal-availability-icon"
                  />
                  <div className="popup-info-anual-shipments">
                    <p className="popup-info-number">
                      {country.annual_shipments}
                    </p>
                    <p>{english ? "anual shipments" : "envios anuales"}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <span className="popup-padding-bottom"></span>
    </div>
  );
};

export default Popup;
