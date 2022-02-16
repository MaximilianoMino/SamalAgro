import React, { useEffect, useState } from "react";
import Countries from "./Countries";
import CountriesMobile from "./CountriesMobile";
import dataEs from "../../api/dataEs";
import dataEn from "../../api/dataEn";
const CountriesContainer = ({ english }) => {
  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 600 ? true : false,
  });
  const [modal, setModal] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (english) {
      setData(dataEn.scope);
    } else {
      setData(dataEs.scope);
    }
    let mediaQuery = window.matchMedia("(min-width: 600px)");
    mediaQuery.addEventListener("change", setMQuery);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeEventListener("change", setMQuery);
  }, [english]);
  console.log(data.scope);
  return (
    <div>
      {mQuery && !mQuery.matches ? (
        <CountriesMobile english={english} data={data} modal={modal} />
      ) : (
        <Countries english={english} modal={modal} setModal={setModal} />
      )}
    </div>
  );
};

export default CountriesContainer;
