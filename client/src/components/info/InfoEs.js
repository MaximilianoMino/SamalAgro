import React, { useEffect } from "react";
import "./info.css";
import spoon from "../../assets/images/Landing/mung-beans-in-wood-spoon-isolated-on-white-2021-09-03-21-53-02-utc.png";
import Aos from "aos";
import "aos/dist/aos.css";
const InfoEs = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section className="wrapper">
      <div className="info-container">
        <img
          className="article-img"
          data-aos="zoom-in"
          src={`${spoon}`}
          alt="samal-spoon"
          loading="lazy"
        />
        <div
          className="info-article seed"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <p className="info-title">SIEMBRA</p>
          <p className="info-text">
            <strong>Sembramos en 6 regiones de Argentina</strong>,
            estrategicamente ubicadas
          </p>
        </div>
        <div
          className="info-article supervision"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          <p className="info-title">SUPERVISIÓN</p>
          <p className="info-text">
            Nuestro equipo de <strong>ingenieros</strong> lleva{" "}
            <strong>el control de todos</strong> los cultivos
          </p>
        </div>
        <div
          className="info-article process"
          data-aos="zoom-in"
          data-aos-delay="1500"
        >
          <p className="info-title">PROCESO</p>
          <p className="info-text">
            <strong>Bajo normas HACCP, BPM, POES, Y MIP</strong>. Seleccionamos
            por tamaño, peso especifico y color. Disponemos de tecnologia Sortex
          </p>
        </div>
        <div
          className="info-article logistics"
          data-aos="zoom-in"
          data-aos-delay="2000"
        >
          <p className="info-title">LOGÍSTICA</p>
          <p className="info-text">
            Contamos con <strong>camiones propios</strong> y un departamento de{" "}
            <strong>logistica nacional e internacional</strong>
          </p>
        </div>
        <div
          className="info-article exports"
          data-aos="zoom-in"
          data-aos-delay="2500"
        >
          <p className="info-title">EXPORTACIÓN</p>
          <p className="info-text">
            Nuestro departamento de comercio exterior da respuestas a las
            necesidades documentales de
            <strong> mas de 40 paises a los que exportamos</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoEs;
