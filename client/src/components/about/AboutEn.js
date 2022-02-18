import React from "react";
import CountUp from "react-countup";

const AboutEn = () => {
  return (
    <div className="box">
      <p className="produce_and_exports">
        Pulses and grains producers and exporters.
      </p>
      <p className="about-subtitle">
        We generate <strong>a world</strong> of possibilities for
        <strong> agriculture.</strong>
        <strong> Work with us!</strong>
      </p>

      <div className="text-start btn-container">
        <a className="btn btn-contact" href="#contact">
          CONTACT US
        </a>
      </div>
      <div className="numbers-container">
        <div>
          {" "}
          <p className="about-numbers">
            +<CountUp end={17000} />
          </p>
          <p className="about-descr">
            annual metrics <br /> tons
          </p>
        </div>
        <div>
          <p className="about-numbers">
            +<CountUp end={1000} />
          </p>
          <p className="about-descr">
            clients around <br /> the world
          </p>
        </div>
        <div>
          {" "}
          <p className="about-numbers">
            <CountUp end={12} />
          </p>
          <p className="about-descr">products</p>
        </div>{" "}
        <div>
          {" "}
          <p className="about-numbers">
            <CountUp end={40} />
          </p>
          <p className="about-descr">countries</p>
        </div>
      </div>
    </div>
  );
};

export default AboutEn;
