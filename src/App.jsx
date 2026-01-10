import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import useSortProduct from "./hooks/useSortProduct.jsx";
import ProductCard from "./components/ProductCard/ProductCard.jsx";
import homeProductSort from "./utils.js";


function App() {

  const { products } = useSortProduct();

  if (!products.men || !products.women || !products.others) return;

  
  return (
    <section className="wrapper">
      <Header />
      <main >
        <Outlet context={products} />
 
      </main>
      <Footer />
    </section>
  );
}

export default App;
