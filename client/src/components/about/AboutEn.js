import { useEffect } from "react";
import CountUp from "react-countup";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";
const AboutEn = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <section
      className="box"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
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
    </section>
  );
};

export default AboutEn;
