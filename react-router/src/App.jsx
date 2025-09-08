import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Layout from "./layout/Layout";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />

        <Route path="products/:id" element={<ProductDetail />} />

        <Route path="*" element={<h1>Pagina non trovata</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
