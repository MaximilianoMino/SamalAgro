import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="box mt-5 py-5 rounded">
      <p className="h1 ms-4 text-start">
        Producimos y exportamos granos y legumbres.
      </p>
      <p className="h6 mt-4">
        Generamos un <strong>mundo</strong> de posibilidades para la{" "}
        <strong>agricultura.</strong>
        <strong> ¡Trabaja con nosotros!</strong>
      </p>

      <div className="mt-4 text-start ms-5">
        <a className="btn lead px-4 btn-danger btn-sm" type="submit">
          CONTACTÁNOS
        </a>
      </div>

      <ul className="nav justify-content-center mt-4">
        <li className="me-4">
          <p className="h4">+15000</p> <p>Toneladas anuales</p>
        </li>
        <li className="me-4">
          <p className="h4">+1000</p>
          <p>
            Clientes en el <br></br> mundo
          </p>
        </li>
        <li className="me-4">
          <p className="h4">12</p> <p>Productos</p>
        </li>
        <li className="me-4">
          <p className="h4">40</p> <p>Paises</p>
        </li>
      </ul>
    </div>
  );
};

export default About;
