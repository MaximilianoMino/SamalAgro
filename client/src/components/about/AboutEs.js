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
      <p className="ps-5 about-subtitle">
        Generamos un <strong>mundo</strong> de posibilidades para la
        <strong> agricultura.</strong>
        <strong> ¡Trabaja con nosotros!</strong>
      </p>

      <div className="text-start ms-5 mt-4">
        <a className="btn btn-contact" href="#contact">
          CONTACTÁNOS
        </a>
      </div>

      <ul className="nav justify-content-center">
        <li className="me-4">
          <p className="about-numbers">
            +<CountUp end={17000} />
          </p>
          <p className="about-descr">
            Toneladas <br /> anuales
          </p>
        </li>
        <li className="me-4">
          <p className="about-numbers">
            +<CountUp end={1000} />
          </p>
          <p className="about-descr">
            Clientes en el <br></br> mundo
          </p>
        </li>
        <li className="me-4">
          <p className="about-numbers">
            <CountUp end={12} />
          </p>

          <p className="about-descr">Productos</p>
        </li>
        <li className="me-4">
          <p className="about-numbers">
            <CountUp end={40} />
          </p>

          <p className="about-descr">Paises</p>
        </li>
      </ul>
    </div>
  );
};

export default AboutEs;
