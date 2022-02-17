import React from "react";
import "./info.css";
import spoon from "../../assets/images/Landing/mung-beans-in-wood-spoon-isolated-on-white-2021-09-03-21-53-02-utc.png";
const InfoEs = () => {
  return (
    <div className="info-container">
      <img
        className="article-img"
        src={`${spoon}`}
        alt="samal-spoon"
        loading="lazy"
      />
      <div className="info-article seed">
        <p className="info-title">SIEMBRA</p>
        <p className="info-text">
          <span>Sembramos en 6 regiones de Argentina</span>, estrategicamente
          ubicadas
        </p>
      </div>
      <div className="info-article supervision">
        <p className="info-title">SUPERVISIÓN</p>
        <p className="info-text">
          Nuestro equipo de <span>ingenieros</span> lleva{" "}
          <span>el control de todos</span> los cultivos
        </p>
      </div>
      <div className="info-article process">
        <p className="info-title">PROCESO</p>
        <p className="info-text">
          <span>Bajo normas HACCP, BPM, POES, Y MIP</span>. Seleccionamos por
          tamaño, peso especifico y color. Disponemos de tecnologia Sortex
        </p>
      </div>
      <div className="info-article logistics">
        <p className="info-title">LOGÍSTICA</p>
        <p className="info-text">
          Contamos con <span>camiones propios</span> y un departamento de{" "}
          <span>logistica nacional e internacional</span>
        </p>
      </div>
      <div className="info-article exports">
        <p className="info-title">EXPORTACIÓN</p>
        <p className="info-text">
          Nuestro departamento de comercio exterior da respuestas a las
          necesidades documentales de
          <span>mas de 40 paises a los que exportamos</span>
        </p>
      </div>
    </div>
  );
};

export default InfoEs;
