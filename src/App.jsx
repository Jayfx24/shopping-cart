import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import useSortProduct from "./hooks/useSortProduct.jsx";
import ProductCard from "./components/ProductCard/ProductCard.jsx";
import Home from "./pages/Home/Home.jsx";


function App() {
  const [count, setCount] = useState(0);
  const { products } = useSortProduct();

  if (!products.men || !products.women || !products.others) return;

  return (
    <section>
      <Header />
      <main >
        <Home />
        <ProductCard {...products.men["mens-shirts"][0]} />
        {/* <Outlet /> */}
      </main>
      <Footer />
    </section>
  );
}

export default App;
