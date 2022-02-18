import React from "react";
import CountUp from "react-countup";
import "./about.css";
const AboutEs = () => {
  return (
    <div className="box">
      <p className="produce_and_exports">
        Producimos y<br /> exportamos granos
        <br /> y legumbres.
      </p>
      <p className="about-subtitle">
        Generamos un <strong>mundo</strong> de posibilidades para la
        <strong> agricultura.</strong>
        <strong> ¡Trabaja con nosotros!</strong>
      </p>

      <div className="text-start btn-container">
        <a className="btn btn-contact" href="#contact">
          CONTÁCTANOS
        </a>
      </div>
      <div className="numbers-container">
        <div>
          {" "}
          <p className="about-numbers">
            +<CountUp end={17000} />
          </p>
          <p className="about-descr">
            toneladas <br /> anuales
          </p>
        </div>
        <div>
          <p className="about-numbers">
            +<CountUp end={1000} />
          </p>
          <p className="about-descr">
            clientes en el <br /> mundo
          </p>
        </div>
        <div>
          {" "}
          <p className="about-numbers">
            <CountUp end={12} />
          </p>
          <p className="about-descr">productos</p>
        </div>{" "}
        <div>
          {" "}
          <p className="about-numbers">
            <CountUp end={40} />
          </p>
          <p className="about-descr">paises</p>
        </div>
      </div>
    </div>
  );
};

export default AboutEs;
