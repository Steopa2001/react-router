import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="text-center py-5">
      <h1 className="mb-3">Benvenuto nel mini e commerce</h1>
      <p className="mb-4">
        Scopri la nostra selezione di prodotti al miglior prezzo
      </p>
      <NavLink to="/products" className="btn btn-primary">
        Vai ai prodotti
      </NavLink>
    </section>
  );
};

export default Home;
