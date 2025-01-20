import "./products.css";
import { useEffect, useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";
import quality from "../../assets/icons/calidad.WebP";
import availability from "../../assets/icons/disponibilidad.WebP";
import standard from "../../assets/icons/normas.WebP";
import packaging from "../../assets/icons/packaging.WebP";
import Aos from "aos";
import "aos/dist/aos.css";
const ProductsEn = ({ productsEn }) => {
  const ref = useRef(null);
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  const { onMouseDown } = useDraggableScroll(ref, { direction: "horizontal" });
  return (
    <section id="products" className="products-container">
      <p className="our-products" data-aos="fade-down-right">
        Our products
      </p>
      <div className="cards" ref={ref} onMouseDown={onMouseDown}>
        {productsEn.map((product, index) => {
          return (
            <div className="card border-0 bg-transparent" key={index}>
              <div className="card-body">
                <h5
                  className="card-title mb-5"
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                >
                  <span className="pb-1">{product.title}</span>
                </h5>
                <div className="img-card-container">
                  <img
                    loading="lazy"
                    src={`${product.description.thumbnail}`}
                    alt="card"
                    className="card-img  shadow-sm"
                  />
                </div>

                <ul className="list-group list-unstyled mt-4">
                  <li className="list-item mb-2">
                    <img
                      loading="lazy"
                      className="products-icons"
                      src={`${quality}`}
                      alt="samal agro quality-icon"
                    />
                    <p className="Calidad-No-1-Processing-Manufacturing">
                      <span className="text-style-1">Quality:</span>
                      <br /> {product.description.quality}
                    </p>
                  </li>
                  <li className="list-item mb-2">
                    <img
                      loading="lazy"
                      className="products-icons"
                      src={`${availability}`}
                      alt="samal agro availability-icon"
                    />
                    <p className="Calidad-No-1-Processing-Manufacturing">
                      <span className="text-style-1">
                        Availability of new crop:
                      </span>
                      <br /> {product.description.availability}
                    </p>
                  </li>
                  <li className="list-item mb-2">
                    <img
                      loading="lazy"
                      className="products-icons"
                      src={`${packaging}`}
                      alt="samal agro packaging-icon"
                    />
                    <p className="Calidad-No-1-Processing-Manufacturing">
                      <span className="text-style-1">Packaging:</span>
                      <br /> {product.description.packaging}
                    </p>
                  </li>
                  <li className="list-item mb-2">
                    <img
                      loading="lazy"
                      className="products-icons"
                      src={`${standard}`}
                      alt="samal agro standard-icon"
                    />
                    <p className="Calidad-No-1-Processing-Manufacturing">
                      <span className="text-style-1">Quality Standars:</span>
                      <br /> {product.description.quality_standard}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsEn;
