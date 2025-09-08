import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link,useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentId = Number(id);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    setError(null);

    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => {
        if (!cancelled) {
          setProduct(resp.data);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("Impossibile caricare il prodotto");
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <section className="py-3">
        <div className="mb-3">
          <Link to="/products" className="text-decoration-none">← Torna ai prodotti</Link>
        </div>
        <p>Caricamento…</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-3">
        <div className="mb-3">
          <Link to="/products" className="text-decoration-none"> Torna ai prodotti</Link>
        </div>
        <div className="alert alert-danger">{error}</div>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="py-3">
        <div className="mb-3">
          <Link to="/products" className="text-decoration-none"> Torna ai prodotti</Link>
        </div>
        <p>Prodotto non trovato.</p>
      </section>
    );
  }
  

  return (
    <section className="py-3">
      <div className="mb-3">
        <Link to="/products" className="text-decoration-none">
           Torna ai prodotti
        </Link>
      </div>

      <div className="row g-4">
        {/* immagine */}
        <div className="col-12 col-lg-5">
          <div className="bg-light rounded-3 p-4 d-flex align-items-center justify-content-center">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
            />
          </div>
        </div>

        {/* info */}
        <div className="col-12 col-lg-7">
          <h1 className="h3">{product.title}</h1>
          <p className="text-muted mb-2">Categoria: {product.category}</p>
          <div className="d-flex align-items-center gap-3 mb-3">
            <span className="h3 text-primary mb-0">€ {product.price}</span>
            {product.rating && (
              <span className="small text-muted">
                {product.rating.rate} / 5 · {product.rating.count} recensioni
              </span>
            )}
          </div>
          <p className="mb-4">{product.description}</p>

          <div className="d-flex gap-2">
            <button className="btn btn-dark">Aggiungi al carrello</button>
            <Link to="/products" className="btn btn-outline-secondary">
              Continua a navigare
            </Link>
          </div>

          {/*  Pulsanti navigazione */}
          <div className="d-flex gap-2 mt-4">
            <button
              className="btn btn-outline-secondary"
              disabled={currentId <= 1}
              onClick={() => navigate(`/products/${currentId - 1}`)}
            >
               Precedente
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate(`/products/${currentId + 1}`)}
            >
              Successivo 
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
