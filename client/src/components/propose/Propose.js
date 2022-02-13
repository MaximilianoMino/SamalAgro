import React from "react";

import "./propose.css";

const Propose = ({ english, proposesEs, proposesEn }) => {
  return (
    <div id="propose" className="propose-container">
      {english ? (
        <h1 className="">Why choose us?</h1>
      ) : (
        <h1>¿Por qué elegirnos?</h1>
      )}
      <div class="cards-propose-container text-white">
        {english
          ? proposesEn.map((proposeEn) => {
              return (
                <div className="card bg-transparent border-0">
                  <div className="propose-gifs">
                    <img
                      className="w-50"
                      src={`${proposeEn.thumbnail}`}
                      alt="gif"
                    />
                  </div>

                  <div className="card-body">
                    <div>
                      <p className="card-propose-title ">{proposeEn.title}</p>
                    </div>
                    <div>
                      <p className="card-propose-text">
                        {proposeEn.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          : proposesEs.map((proposeEs) => {
              return (
                <div className="card bg-transparent border-0">
                  <div className="propose-gifs">
                    <img
                      className="w-50"
                      src={`${proposeEs.thumbnail}`}
                      alt="gif"
                    />
                  </div>

                  <div className="card-body">
                    <div>
                      <p className="card-propose-title ">{proposeEs.title}</p>
                    </div>
                    <div>
                      <p className="card-propose-text">
                        {proposeEs.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Propose;
