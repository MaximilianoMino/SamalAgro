import React from "react";
import dataEs from "../../api/dataEs";
import dataEn from "../../api/dataEn";

import ProductsEn from "./ProductsEn";
import ProductsEs from "./ProductsEs";

const ProductsContainer = ({ english }) => {
  return (
    <div>
      {english ? (
        <ProductsEn productsEn={dataEn.products} />
      ) : (
        <ProductsEs productsEs={dataEs.products} />
      )}
    </div>
  );
};

export default ProductsContainer;
