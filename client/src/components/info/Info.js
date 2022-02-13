import React from "react";
import "./info.css";
import spoon from "../../assets/images/Landing/mung-beans-in-wood-spoon-isolated-on-white-2021-09-03-21-53-02-utc.png";
const Info = () => {
  return (
    <div className="info-container">
      <img className="article-img" src={`${spoon}`} alt="" />
      <div className="info-article seed">
        <h4>SIEMBRA</h4>
        <p>Sembramos en 6 regiones de Argentina, estrategicamente ubicadas.</p>
      </div>
      <div className="info-article supervision">
        <h4>SUPERVISION</h4>
        <p>
          Nuestro equipo de ingenieros lleva el control de todos los cultivos.
        </p>
      </div>
      <div className="info-article process">
        <h4>PROCESO</h4>
        <p>
          Bajo normas HACCP, BPM, POES, Y MIP. Seleccionamos por tamaño, peso
          especifico y color. Disponemos de tecnologia Sortex.
        </p>
      </div>
      <div className="info-article logistics">
        <h4>LOGÍSTICA</h4>
        <p>
          Contamos con camiones propios y un departamento de logistica nacional
          e internacional.
        </p>
      </div>
      <div className="info-article exports">
        <h4>EXPORTACIÓN</h4>
        <p>
          Nuestro departamento de comercio exterior da respuestas a las
          necesidades documentales de mas de 40 paises a los que exportamos.
        </p>
      </div>
    </div>
  );
};

export default Info;
