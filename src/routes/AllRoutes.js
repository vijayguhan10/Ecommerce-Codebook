import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages";
import { ProductsList } from "../pages";
import { ProductDetail } from "../pages/Products/ProductDetail";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
