import React, { useEffect, useRef } from "react";
import "../popup/popup.css";
import useDraggableScroll from "use-draggable-scroll";
import shipments from "../../assets/icons/envios_samal.WebP";
import Aos from "aos";
import "aos/dist/aos.css";
const CountriesMobile = ({ english, data }) => {
  const ref = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  const { onMouseDown } = useDraggableScroll(ref, { direction: "horizontal" });

  return (
    <div className="mobile-container" id="exportation" data-aos="fade-down-top">
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
            <div className="popup-container" key={index}>
              <div className="popup-title">
                <p className="popup-title-text">{continent.title}</p>
              </div>
              <div className="popup-body">
                {continent.countries.map((country, index) => {
                  return (
                    <div className="popup-body-wrap" key={index}>
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
                    </div>
                  );
                })}
              </div>
              <span className="popup-padding-bottom"></span>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default CountriesMobile;
