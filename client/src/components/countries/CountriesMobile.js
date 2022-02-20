import React, { useRef } from "react";
import "../popup/popup.css";
import useDraggableScroll from "use-draggable-scroll";
import shipments from "../../assets/Iconos/envios_samal.png";

const CountriesMobile = ({ english, data }) => {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref, { direction: "horizontal" });

  return (
    <div className="mobile-container" id="exportation">
      <div className="countries-header-group">
        <p className="mobile-header-title">
          {english ? "We are in 40 countries" : "Llegamos a 40 países"}
        </p>
        <p className="mobile-header-subtitle">
          {english
            ? "Swipe for more information"
            : "Desliza para más información"}
        </p>
      </div>

      <div className="card-mobile" ref={ref} onMouseDown={onMouseDown}>
        {data.map((continent, index) => {
          return (
            <div className="popup-container shadow-sm" key={index}>
              <div className="shadow-sm popup-title">
                <p>{continent.title}</p>
              </div>
              <div className="popup-body">
                {continent.countries.map((country, index) => {
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
                          <p className="popup-info-number">
                            {country.annual_tons}
                          </p>
                          <p>{english ? "metric tons" : "toneladas"}</p>
                        </div>
                        <div className="d-flex flex-row">
                          <img
                            className="popup-icons"
                            src={`${shipments}`}
                            alt="samal agro availability-icon"
                            loading="lazy"
                          />
                          <div className="ms-3 me-5 text-start d-flex flex-column">
                            <p className="popup-info-number">
                              {country.annual_shipments}
                            </p>
                            <p>
                              {english ? "anual shipments" : "envios anuales"}
                            </p>
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
        })}{" "}
      </div>
    </div>
  );
};

export default CountriesMobile;
