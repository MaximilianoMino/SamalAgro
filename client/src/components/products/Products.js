import React, { useState } from "react";
import "./products.css";
import HorizontalScroll from "react-scroll-horizontal";

import data from "../../api/dataEs";
const Products = () => {
  return (
    <div id="products" className="products-container">
      <p className="our-products text-secondary">Nuestros productos</p>
      <HorizontalScroll>
        <div className="cards">
          {data.products.map((product) => {
            return (
              <div class="card border-0 bg-transparent">
                <div class="card-body">
                  <h5 class="card-title text-start text-secondary mb-5">
                    <span className="pb-1">{product.title}</span>
                  </h5>
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwpQAGKFzsT8sfWc3k7M2hGSm1dKAlD8zIMmVsLEZv4FX2lLHAefhrr-7SC8OegOMfce8&usqp=CAU"
                      alt="card"
                      className=" card-img"
                    />
                  </div>

                  <ul className="list-group list-unstyled mt-4">
                    <li className="list-item mb-2">
                      Calidad: <strong>{product.description.quality}</strong>
                    </li>
                    <li className="list-item mb-2">
                      Disponibilidad a nueva cosecha:
                      <strong>{product.description.availability}</strong>
                    </li>
                    <li className="list-item mb-2">
                      Packaging:{" "}
                      <strong>{product.description.packaging}</strong>
                    </li>
                    <li className="list-item mb-2">
                      Normas de calidad:{" "}
                      <strong>{product.description.quality_standard}</strong>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </HorizontalScroll>
    </div>
  );
};

export default Products;
