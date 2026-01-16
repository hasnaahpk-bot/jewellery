

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Allproducts from "./components/Allproducts";
import AppDownloadBanner from "./components/AppDownloadBanner";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seeall" element={<Allproducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>
      {/* <AppDownloadBanner /> */}
      <Footer />
    </>
  );
};

export default App;
