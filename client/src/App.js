import "./App.css";
import dataEs from "./api/dataEs";
import dataEn from "./api/dataEn";

import Header from "./components/header/Header";
import Propose from "./components/propose/Propose";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import { useState } from "react";
import Countries from "./components/countries/Countries";
import ProductsContainer from "./components/products/ProductsContainer";
import InfoContainer from "./components/info/InfoContainer";

function App() {
  const [english, setEnglish] = useState(false);

  const handleLanguage = (id, e) => {
    e.preventDefault();
    try {
      if (id === "en") {
        setEnglish(true);
      } else {
        setEnglish(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App ">
      <Header handleLanguage={handleLanguage} english={english} />
      <ProductsContainer
        english={english}
        productsEn={dataEn.products}
        productsEs={dataEs.products}
      />
      <Propose
        english={english}
        proposesEs={dataEs.proposes}
        proposesEn={dataEn.proposes}
      />
      <InfoContainer english={english} />
      <Countries english={english} />
      <Contact english={english} />
      <Footer english={english} />
    </div>
  );
}

export default App;
