import React from "react";
import "./propose.css";

const Propose = ({ english }) => {
  return (
    <div
      id="propose"
      className="propose-container d-flex justify-content-around"
    >
      <div class="card w-25 bg-transparent border-0 text-white">
        <div class="card-body">
          <h5 class="card-title">CANTIDAD-CALIDAD</h5>

          {english ? (
            <p class="card-text">
              We sow in different areas of Argentina located strategically,
              atomizing production risks, guaranteeing quantity and quality in
              each product.
            </p>
          ) : (
            <p class="card-text">
              Sembramos en diferentes areas de argentina ubicadas
              estrategicamente, atomizando los riesgos productivos, garantizando
              cantidad y calidad en cada producto.
            </p>
          )}
        </div>
      </div>
      <div class="card w-25 bg-transparent border-0 text-white">
        <div class="card-body">
          <h5 class="card-title">CANTIDAD-CALIDAD</h5>
          <p class="card-text">
            Sembramos en diferentes areas de argentina ubicadas
            estrategicamente, atomizando los riesgos productivos, garantizando
            cantidad y calidad en cada producto.
          </p>
        </div>
      </div>
      <div class="card w-25 bg-transparent border-0 text-white">
        <div class="card-body">
          <h5 class="card-title">CANTIDAD-CALIDAD</h5>
          <p class="card-text">
            Sembramos en diferentes areas de argentina ubicadas
            estrategicamente, atomizando los riesgos productivos, garantizando
            cantidad y calidad en cada producto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Propose;
