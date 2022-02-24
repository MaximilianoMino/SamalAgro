import React, { useEffect, useState } from "react";
import dataEs from "../../api/dataEs";
import dataEn from "../../api/dataEn";
import "./countries.css";
import Popup from "../popup/Popup";
import Aos from "aos";
import "aos/dist/aos.css";

const Countries = ({ english, modal, setModal }) => {
  const [northAm, setNorthAm] = useState(false);
  const [southAm, setSouthAm] = useState(false);
  const [africa, setAfrica] = useState(false);
  const [asia, setAsia] = useState(false);
  const [europe, setEurope] = useState(false);
  const [caribbean, setCaribbean] = useState(false);

  const [data, setData] = useState([]);
  const [continentId, setContinentId] = useState();

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  const handleModal = async (id, e) => {
    e.preventDefault();
    try {
      if (!modal) {
        setModal(true);
      }

      let continentRetrieved;

      if (english) {
        continentRetrieved = dataEn.scope.find((scope) => {
          return scope.id === Number(id);
        });
      } else {
        continentRetrieved = dataEs.scope.find((scope) => {
          return scope.id === Number(id);
        });
      }
      setData(continentRetrieved);
      setContinentId(continentRetrieved.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      className="countries-container"
      id="exportation"
      data-aos="fade-down-top"
    >
      <div className="mt-5">
        <p className="h1 text-secondary">
          {english ? "We are in 40 countries" : "Llegamos a 40 países"}
        </p>
        <p className="h5 text-secondary">
          {english
            ? "Click for more information"
            : "Clickea para más información"}
        </p>
      </div>
      <div className="countries-map-container container mt-5 py-5">
        <div
          className="circle north-america"
          onMouseOver={() => setNorthAm(true)}
          onMouseLeave={() => setNorthAm(false)}
        >
          <span
            onClick={(e) => handleModal(0, e)}
            className={` ${northAm && !modal ? "visible" : "invisible"}`}
          >
            {english ? "NORTH AMÉRICA" : "AMÉRICA DEL NORTE"}
          </span>{" "}
        </div>{" "}
        {modal && continentId === 0 ? (
          <Popup
            data={data}
            modal={modal}
            setModal={setModal}
            setNorthAm={setNorthAm}
            northAm={northAm}
            english={english}
          />
        ) : null}
        <div
          className="circle south-america"
          onMouseOver={() => setSouthAm(true)}
          onMouseLeave={() => setSouthAm(false)}
        >
          <span
            onClick={(e) => handleModal(2, e)}
            className={` ${southAm && !modal ? "visible" : "invisible"}`}
          >
            {english ? "SOUTH AMÉRICA" : "AMÉRICA DEL SUR"}{" "}
          </span>
        </div>
        {modal && continentId === 2 ? (
          <Popup
            data={data}
            modal={modal}
            setModal={setModal}
            setSouthAm={setSouthAm}
            southAm={southAm}
            english={english}
          />
        ) : null}
        <div
          className="circle caribbean"
          onMouseOver={() => setCaribbean(true)}
          onMouseLeave={() => setCaribbean(false)}
        >
          <span
            onClick={(e) => handleModal(1, e)}
            className={` ${caribbean && !modal ? "visible" : "invisible"}`}
          >
            {english
              ? "CENTRAL AMÉRICA AND CARIBBEAN"
              : "AMÉRICA CENTRAL Y EL CARIBE"}
          </span>{" "}
        </div>{" "}
        {modal && continentId === 1 ? (
          <Popup
            data={data}
            modal={modal}
            setModal={setModal}
            setCaribbean={setCaribbean}
            caribbean={caribbean}
            english={english}
          />
        ) : null}
        <div
          className="circle europe"
          onMouseOver={() => setEurope(true)}
          onMouseLeave={() => setEurope(false)}
        >
          <span
            onClick={(e) => handleModal(3, e)}
            className={` ${europe && !modal ? "visible" : "invisible"}`}
          >
            {english ? "EUROPE" : "EUROPA"}
          </span>{" "}
        </div>{" "}
        {modal && continentId === 3 ? (
          <Popup
            data={data}
            modal={modal}
            setModal={setModal}
            setEurope={setEurope}
            europe={europe}
            english={english}
          />
        ) : null}
        <div
          className="circle asia"
          onMouseOver={() => setAsia(true)}
          onMouseLeave={() => setAsia(false)}
        >
          <span
            onClick={(e) => handleModal(5, e)}
            className={` ${asia && !modal ? "visible" : "invisible"}`}
          >
            ASIA
          </span>{" "}
        </div>{" "}
        {modal && continentId === 5 ? (
          <Popup
            data={data}
            modal={modal}
            setModal={setModal}
            setAsia={setAsia}
            asia={asia}
            english={english}
          />
        ) : null}
        <div
          onMouseOver={() => setAfrica(true)}
          onMouseLeave={() => setAfrica(false)}
          className="circle africa"
        >
          <span
            onClick={(e) => handleModal(4, e)}
            className={` ${africa && !modal ? "visible" : "invisible"}`}
          >
            ÁFRICA
          </span>
        </div>{" "}
        {modal && continentId === 4 ? (
          <Popup
            data={data}
            setModal={setModal}
            modal={modal}
            setAfrica={setAfrica}
            africa={africa}
            english={english}
          />
        ) : null}
      </div>
    </section>
  );
};

export default Countries;
