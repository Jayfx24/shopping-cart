import { useState } from "react";
import "./App.css";
import { Outlet, useLoaderData } from "react-router";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const { sortedProducts, unsortedProducts } = useLoaderData();
  const [cart, setCart] = useState({});

  const handleCartClick = (e, product) => {
    const target = e.target;
    const allListed = Object.hasOwn(cart, product.title);
    const newCart = { ...cart };
    const itemCount = allListed ? newCart[product.title].count : 1;

    if (target.id === "addItem") {
      if (allListed) newCart[product.title].count = itemCount + 1;
      else
        newCart[product.title] = {
          productObj: product,
          count: itemCount,
        };
    } else {
      if (itemCount > 1) newCart[product.title].count = itemCount - 1;
      else delete newCart[product.title];
    }
    console.log(newCart)
    return setCart(newCart);
  };

  // const handleCartChange = (e, product) => {
  //   const target = e.target


  // };

  //  delete
  return (
    <section className="wrapper">
      <Header />
      <main>
        <Outlet
          context={{ sortedProducts, unsortedProducts, cart, handleCartClick }}
        />
      </main>
      <Footer />
    </section>
  );
}

export default App;
