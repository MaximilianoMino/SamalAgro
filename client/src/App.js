import "./App.css";
import data from "./api/dataEs";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Propose from "./components/propose/Propose";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import { useState } from "react";

console.log(data.scope);
console.log(
  data.scope.map((continent) => {
    return continent.title;
  })
);
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
    <div className="App min-vw-100">
      <Header handleLanguage={handleLanguage} english={english} />
      <Products />
      <Propose english={english} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
