import { useEffect } from "react";
import CountUp from "react-countup";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";
const AboutEs = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
      once: false,
      mirror: false,
    });
  }, []);
  return (
    <section
      className="box"
      data-aos="fade-right"
      data-aos-offset="500"
      data-aos-easing="ease-in-sine"
    >
      <p className="produce_and_exports">
        Producimos y<br /> exportamos granos
        <br /> y legumbres.
      </p>
      <p className="about-subtitle">
        Generamos un <strong>mundo</strong> de posibilidades para la
        <strong> agricultura.</strong>
        <strong> ¡Trabaja con nosotros!</strong>
      </p>

      <div className="text-start btn-container">
        <a className="btn btn-contact" href="#contact">
          CONTÁCTANOS
        </a>
      </div>
      <div className="numbers-container">
        <div className="numbers-content">
          <p className="about-numbers">
            +<CountUp end={17000} duration={8}/>
          </p>
          <p className="about-descr">
            toneladas <br /> anuales
          </p>
        </div>
        <div className="numbers-content">
          <p className="about-numbers">
            +<CountUp end={1000} duration={6}/>
          </p>
          <p className="about-descr">
            clientes en el <br /> mundo
          </p>
        </div>
        <div className="numbers-content">
          <p className="about-numbers">
            <CountUp end={12} duration={4}/>
          </p>
          <p className="about-descr">productos</p>
        </div>
        <div className="numbers-content">
          <p className="about-numbers">
            <CountUp end={40} duration={4}/>
          </p>
          <p className="about-descr">paises</p>
        </div>
      </div>
    </section>
  );
};

export default AboutEs;
