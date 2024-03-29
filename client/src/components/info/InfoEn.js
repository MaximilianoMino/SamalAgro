import React, { useEffect } from "react";
import "./info.css";
import Aos from "aos";
import "aos/dist/aos.css";

const InfoEn = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true
    });
  }, []);
  return (
    <section className="wrapper">
      <div className="info-container">
        <img
          className="article-img"
          data-aos="zoom-in"
          src="https://res.cloudinary.com/dpwdm3ip1/image/upload/v1686603530/home/landing/web/mung-beans-in-wood-spoon-isolated-on-white-2021-09-03-21-53-02-utc_iqhkfv.jpg"
          alt="samal-spoon"
          loading="lazy"
        />
        <div
          className="info-article seed seed-en"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <p className="info-title">SOWING</p>
          <p className="info-text">
            We plant in <strong>6 strategically located regions</strong>, of
            Argentina.
          </p>
        </div>
        <div
          className="info-article supervision superv-en"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          <p className="info-title">SUPERVISION</p>
          <p className="info-text">
            Our team of <br />
            <strong>
              engineer controls <br />
              all the crops
            </strong>
          </p>
        </div>
        <div
          className="info-article process process-en"
          data-aos="zoom-in"
          data-aos-delay="1500"
        >
          <p className="info-title">PROCESS</p>
          <p className="info-text">
            <strong>HACCP, BPM, POES, AND MIP Standars</strong>. We select by
            size, specific weight and color. We have metal detectors and Sortex
            technologies
          </p>
        </div>
        <div
          className="info-article logistics log-en"
          data-aos="zoom-in"
          data-aos-delay="2000"
        >
          <p className="info-title">LOGISTICS</p>
          <p className="info-text">
            We <strong>have our own trucks</strong> and a national and
            international logistics departament
          </p>
        </div>
        <div
          className="info-article exports exp-en"
          data-aos="zoom-in"
          data-aos-delay="2500"
        >
          <p className="info-title">EXPORT</p>
          <p className="info-text">
            Our Foreign Trade Departament responds to the documentary needs of
            <strong> more than 40 countries we export</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoEn;
