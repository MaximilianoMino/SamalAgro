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
        <ul className="nav justify-content-center">
          <li className="">
            <p className="about-numbers">
              +<CountUp end={17000} />
            </p>
            <p className="about-descr">annual metric tons</p>
          </li>
          <li className="">
            <p className="about-numbers">
              +<CountUp end={1000} />
            </p>
            <p className="about-descr">Clients around the world</p>
          </li>
          <li className="">
            <p className="about-numbers">
              <CountUp end={12} />
            </p>

            <p className="about-descr">Products</p>
          </li>
          <li className="">
            <p className="about-numbers">
              <CountUp end={40} />
            </p>

            <p className="about-descr">Countries</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutEn;
