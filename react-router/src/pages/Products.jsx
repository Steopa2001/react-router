
import axios from "axios";
import { useState, useEffect } from "react";

// url api
const url = "https://fakestoreapi.com/products";

const Products = () => {
  // stato prodotti
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url).then((resp) => {
      setProducts(resp.data); 
    });
  }, []);

  return (
    <div className="container py-4">
      {/* header pagina */}
      <div className="d-flex justify-content-between align-items-end mb-3">
        <h1 className="h3 m-0">I nostri prodotti</h1>
        <span className="text-muted small">{products.length} articoli</span>
      </div>

      {/* griglia responsive */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            {/* card prodotto */}
            <div className="card h-100 border-0 shadow-sm hover-card rounded-3 position-relative">
              {/* badge categoria */}
              <span className="badge text-bg-light border position-absolute top-0 start-0 m-2">
                {product.category}
              </span>

              {/* box immagine con ratio */}
              <div className="ratio ratio-4x3 bg-light rounded-top-3 product-img-box">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-100 h-100 p-3 product-img"
                />
              </div>

              {/* contenuto card */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-2">{product.title}</h5>
                <p className="card-text text-muted small line-clamp-3">
                  {product.description}
                </p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="h5 mb-0 text-primary">€ {product.price}</span>
                  <button className="btn btn-outline-dark btn-sm">Aggiungi</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
