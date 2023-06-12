import { useState } from "react";
import "./App.css";
import dataEs from "./api/dataEs";
import dataEn from "./api/dataEn";
import Header from "./components/header/Header";
import Propose from "./components/propose/Propose";
import Footer from "./components/footer/Footer";
import ProductsContainer from "./components/products/ProductsContainer";
import InfoContainer from "./components/info/InfoContainer";
import SuccessCard from "./components/successcard/SuccessCard";
import CountriesContainer from "./components/countries/CountriesContainer";
import Contact from "./components/contact/Contact";
import MyPDF from "./components/contact/pdf/MyPDF";
import { PDFViewer } from "@react-pdf/renderer";

function App() {
  const [english, setEnglish] = useState(false);
  const [successCard, setSuccessCard] = useState(false);

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
    <div>
      {successCard ? (
        <SuccessCard
          className="d-flex vw-100 vh-100"
          english={english}
          setSuccessCard={setSuccessCard}
        />
      ) : (
        <div className="App">
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
          <CountriesContainer english={english} />

          <Contact english={english} setSuccessCard={setSuccessCard} />
          <Footer english={english} />

        </div>
      )}
    </div>
  );
}

export default App;
