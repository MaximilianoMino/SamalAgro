import React from "react";

import "./propose.css";

const Propose = ({ english, proposesEs, proposesEn }) => {
  return (
    <div id="propose" className="propose-container">
      {english ? <h1>Why choose us?</h1> : <h1>¿Por qué elegirnos?</h1>}
      <div class="cards-propose-container text-white">
        {english
          ? proposesEn.map((proposeEn) => {
              return (
                <div className="card bg-transparent border-0">
                  <div class="card-body text-center me-4">
                    <h5 class="card-propose-title m-auto text-white mb-5">
                      {proposeEn.title}
                    </h5>
                    <p class="card-propose-text text-center">
                      {proposeEn.description}
                    </p>
                  </div>
                </div>
              );
            })
          : proposesEs.map((proposeEs) => {
              return (
                <div className="card bg-transparent border-0">
                  <div className="propose-gifs">
                    <img
                      className="w-25"
                      src={`${proposeEs.thumbnail}`}
                      alt="gif"
                    />
                  </div>

                  <div class="card-body text-center me-4">
                    <h5 class="card-propose-title m-auto text-white mb-5">
                      {proposeEs.title}
                    </h5>
                    <p class="card-propose-text text-center">
                      {proposeEs.description}
                    </p>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Propose;
