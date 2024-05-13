// AllRoutes.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Offers } from "../pages/Offers"; // Assuming Offers and Cart are valid components
import Medicine from "../pages/Medicine";
import { UpperBody } from "./UpperBody";
import LabTests from "../pages/LabTests";
import HeathcareProducts from "../pages/HeathcareProducts";
import Blogs from "../pages/Blogs";
import ValueStore from "../pages/ValueStore";
import MedicineSingle from "../singles/MedicineSingle";
import LabTestsSingle from "../singles/LabTestsSingle";
import HealthcareProductsSingle from "../singles/HealthcareProductsSingle";
import ValueStoreSingle from "../singles/ValueStoreSingle";
import UserCart from "../UserCart";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/Payment";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UpperBody />} />
        <Route
          path="/medicine"
          element={
            <PrivateRoute>
              <Medicine />
            </PrivateRoute>
          }
        />
        <Route
          path="/labtests"
          element={
            <PrivateRoute>
              <LabTests />
            </PrivateRoute>
          }
        />
        <Route
          path="/healthcare-products"
          element={
            <PrivateRoute>
              <HeathcareProducts />
            </PrivateRoute>
          }
        />
        <Route path="/health-blogs" element={<Blogs />} />
        <Route
          path="/value-store"
          element={
            <PrivateRoute>
              <ValueStore />
            </PrivateRoute>
          }
        />
        <Route path="/medicine/:id" element={<MedicineSingle />} />
        <Route path="/labtests/:id" element={<LabTestsSingle />} />
        <Route
          path="/healthcare-products/:id"
          element={<HealthcareProductsSingle />}
        />
        <Route path="/value-store/:id" element={<ValueStoreSingle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offers" element={<Offers />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <UserCart />
            </PrivateRoute>
          }
        />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
