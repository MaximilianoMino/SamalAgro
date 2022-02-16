import React from "react";
import "./popup.css";
import shipments from "../../assets/Iconos/envios_samal.png";

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
  console.log("popup data: " + data);
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
      console.log(error);
    }
  };
  return (
    <div className="popup-container  shadow-sm">
      <div className="text-start shadow-sm popup-title">
        <p className="pt-2 ms-5">{title}</p>
        <i className="bi bi-x-circle" onClick={handleClose}></i>
      </div>
      <div className="popup-body">
        {countries.map((country, index) => {
          return (
            <div className="bg-white" key={index}>
              <div className="popup-country">
                <p className="">{country.country}</p>
                <span>
                  ({english ? "SINCE" : "DESDE"} {country.since})
                </span>
              </div>
              <div className="popup-info">
                <div>
                  <p className="popup-info-number">{country.annual_tons}</p>
                  <p>{english ? "metric tons" : "toneladas"}</p>
                </div>
                <div className="d-flex flex-row">
                  <img
                    className="popup-icons"
                    src={`${shipments}`}
                    alt="availability-icon"
                  />
                  <div className="ms-3 me-5 text-start d-flex flex-column">
                    <p className="popup-info-number">
                      {country.annual_shipments}
                    </p>
                    <p>{english ? "anual shipments" : "envios anuales"}</p>
                  </div>
                </div>
              </div>
              <hr></hr>
            </div>
          );
        })}
      </div>
      <span className="bg-white p-2"></span>
    </div>
  );
};

export default Popup;
