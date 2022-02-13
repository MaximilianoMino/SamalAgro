import React from "react";
import "./popup.css";
import shipments from "../../assets/Iconos/envios_samal.png";
const Popup = ({
  data,
  setModal,
  setNortAm,
  setSouthAm,
  setAsia,
  setEurope,
  setAfrica,
  setCaribbean,
}) => {
  const { countries, title } = data;

  const handleClose = () => {
    try {
      setModal(false);
      setNortAm(false);
      setSouthAm(false);
      setCaribbean(false);
      setAsia(false);
      setAfrica(false);
      setEurope(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="popup-container">
      <div className="text-start popup-title">
        <p className="pt-2 ms-5">{title}</p>
        <i class="bi bi-x-circle" onClick={handleClose}></i>
      </div>
      <div className=" popup-body">
        {countries.map((country, key) => {
          return (
            <div className="bg-white" key={country.id}>
              <div className="popup-country">
                <p className="">{country.country}</p>
                <span>(SINCE {country.since})</span>
              </div>
              <div className="popup-info">
                <div>
                  <p className="popup-info-number text-start">
                    {country.annual_tons}
                  </p>
                  <p>metric tons</p>
                </div>
                <div className="d-flex flex-row">
                  <img
                    class="popup-icons"
                    src={`${shipments}`}
                    alt="availability-icon"
                  />
                  <div className="ms-3 me-5 text-start d-flex flex-column">
                    <p className="popup-info-number">
                      {country.annual_shipments}
                    </p>
                    <p>anual shipments</p>
                  </div>
                </div>
              </div>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popup;
