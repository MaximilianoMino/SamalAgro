import React from "react";
import "./info.css";
import spoon from "../../assets/images/Landing/mung-beans-in-wood-spoon-isolated-on-white-2021-09-03-21-53-02-utc.png";
const InfoEn = () => {
  return (
    <section className="info-container">
      <img
        className="article-img"
        src={`${spoon}`}
        alt="samal-spoon"
        loading="lazy"
      />
      <div className="info-article seed seed-en">
        <p className="info-title">SOWING</p>
        <p className="info-text">
          We plant in <span>6 strategically regions</span>, of Argentina.
        </p>
      </div>
      <div className="info-article supervision superv-en">
        <p className="info-title">SUPERVISION</p>
        <p className="info-text">
          Our team of <br />
          <span>
            engineer controls <br />
            all the crops
          </span>
        </p>
      </div>
      <div className="info-article process">
        <p className="info-title">PROCESS</p>
        <p className="info-text">
          <span>HACCP, BPM, POES, AND MIP Standars</span>. We select by size,
          specific weight and color. We have metal detectors and Sortex
          technologies
        </p>
      </div>
      <div className="info-article logistics log-en">
        <p className="info-title">LOGISTICS</p>
        <p className="info-text">
          We <span>have our own trucks</span> and a national and international
          logistics departament
        </p>
      </div>
      <div className="info-article exports exp-en">
        <p className="info-title">EXPORT</p>
        <p className="info-text">
          Our Foreign Trade Departament responds to the documentary needs of
          <span> more than 40 countries we export</span>
        </p>
      </div>
    </section>
  );
};

export default InfoEn;
