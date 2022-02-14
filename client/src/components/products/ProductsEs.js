import "./products.css";

import quality from "../../assets/Iconos/calidad.png";
import availability from "../../assets/Iconos/disponibilidad.png";
import standard from "../../assets/Iconos/normas.png";
import packaging from "../../assets/Iconos/packaging.png";

const ProductsEs = ({ productsEs }) => {
  return (
    <div id="products" className="products-container">
      <p className="our-products">Nuestros productos</p>
      <div className="cards">
        {productsEs.map((product, index) => {
          return (
            <div class="card border-0 bg-transparent" key={index}>
              <div class="card-body">
                <h5 class="card-title mb-5">
                  <span className="pb-1">{product.title}</span>
                </h5>
                <div>
                  <img
                    src={`${product.description.thumbnail}`}
                    alt="card"
                    className="card-img"
                  />
                </div>

                <ul className="list-group list-unstyled mt-4">
                  <li className="list-item mb-2">
                    <img
                      class="products-icons"
                      src={`${quality}`}
                      alt="quality-icon"
                    />
                    <p class="Calidad-No-1-Processing-Manufacturing">
                      <span class="text-style-1">Calidad:</span>
                      <br /> {product.description.quality}
                    </p>
                  </li>
                  <li className="list-item mb-2">
                    <img
                      class="products-icons"
                      src={`${availability}`}
                      alt="availability-icon"
                    />
                    <p class="Calidad-No-1-Processing-Manufacturing">
                      <span class="text-style-1">
                        Disponibilidad a nueva cosecha:
                      </span>
                      <br /> {product.description.availability}
                    </p>
                  </li>
                  <li className="list-item mb-2">
                    <img
                      class="products-icons"
                      src={`${packaging}`}
                      alt="packaging-icon"
                    />
                    <p class="Calidad-No-1-Processing-Manufacturing">
                      <span class="text-style-1">Packaging:</span>
                      <br /> {product.description.packaging}
                    </p>
                  </li>
                  <li className="list-item mb-2">
                    <img
                      class="products-icons"
                      src={`${standard}`}
                      alt="standard-icon"
                    />
                    <p class="Calidad-No-1-Processing-Manufacturing">
                      <span class="text-style-1">Normas de calidad:</span>
                      <br /> {product.description.quality_standard}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsEs;
