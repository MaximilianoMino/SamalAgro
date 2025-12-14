import "./products.css";
import useDraggableScroll from "use-draggable-scroll";
import quality from "../../assets/icons/calidad.WebP";
import availability from "../../assets/icons/disponibilidad.WebP";
import standard from "../../assets/icons/normas.WebP";
import packaging from "../../assets/icons/packaging.WebP";
import { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ProductsEs = ({ productsEs }) => {
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
        Nuestros productos
      </p>
      <div className="cards" ref={ref} onMouseDown={onMouseDown}>
        {productsEs.map((product, index) => {
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
                <div>
                  <img
                    loading="lazy"
                    src={`${product.description.thumbnail}`}
                    alt="samal agro product card"
                    className="card-img"
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
                      <span className="text-style-1">Calidad:</span>
                      <br /> {product.description.quality}
                    </p>
                  </li>
                  <li className="list-item mb-2">
                    <img
                      loading="lazy"
                      className="products-icons"
                      src={`${availability}`}
                      alt="samal-availability-icon"
                    />
                    <p className="Calidad-No-1-Processing-Manufacturing">
                      <span className="text-style-1">
                        Disponibilidad a nueva cosecha:
                      </span>
                      <br /> {product.description.availability}
                    </p>
                  </li>
                  <li className="list-item mb-2">
                    <img
                      loading="lazy"
                      className="products-icons"
                      src={`${packaging}`}
                      alt="packaging-icon"
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
                      alt="samal-standard-icon"
                    />
                    <p className="Calidad-No-1-Processing-Manufacturing">
                      <span className="text-style-1">Normas de calidad:</span>
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

export default ProductsEs;
