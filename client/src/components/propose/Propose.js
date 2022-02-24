import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./propose.css";

const Propose = ({ english, proposesEs, proposesEn }) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <section id="propose" className="propose-container">
      {" "}
      {english ? (
        <p className="propose-title" data-aos="fade-down-top">
          Why choose us?
        </p>
      ) : (
        <p className="propose-title" data-aos="fade-down">
          ¿Por qué elegirnos?
        </p>
      )}{" "}
      <div className="cards-propose-container text-white">
        {english
          ? proposesEn.map((proposeEn, index) => {
              return (
                <div className="card bg-transparent border-0" key={index}>
                  <div className="propose-gifs-container">
                    <img
                      className="propose-gifs"
                      src={`${proposeEn.thumbnail}`}
                      alt="samal-agro-gif"
                      loading="lazy"
                    />
                  </div>

                  <div className="card-body">
                    <div>
                      <p className="card-propose-title">{proposeEn.title}</p>
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
          : proposesEs.map((proposeEs, index) => {
              return (
                <div className="card bg-transparent border-0" key={index}>
                  <div className="propose-gifs-container">
                    <img
                      className="propose-gifs"
                      src={`${proposeEs.thumbnail}`}
                      alt="samal-agro-gif"
                      loading="lazy"
                    />
                  </div>

                  <div className="card-body">
                    <div>
                      <p className="card-propose-title">{proposeEs.title}</p>
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
    </section>
  );
};

export default Propose;
