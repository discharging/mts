import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Detail from "../components/Detail";
import { PageNotFound } from "../components/PageNotFound";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/products/:id" element={<Detail />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
