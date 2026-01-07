import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import useSortProduct from "./hooks/useSortProduct.jsx";

function App() {
  const [count, setCount] = useState(0);
  const p = useSortProduct();
  console.log(p.products);
  return (
    <section>
      <Header />
      <Footer />
    </section>
  );
}

export default App;
