import React from "react";
import dataEs from "../../api/dataEs";
import dataEn from "../../api/dataEn";

import ProductsEn from "./ProductsEn";
import ProductsEs from "./ProductsEs";

const ProductsContainer = ({ english }) => {
  return (
    <main>
      {english ? (
        <ProductsEn productsEn={dataEn.products} />
      ) : (
        <ProductsEs productsEs={dataEs.products} />
      )}
    </main>
  );
};

export default ProductsContainer;
