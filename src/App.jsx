import { useState } from "react";
import "./App.css";
import { Outlet, useLoaderData } from "react-router";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const { sortedProducts, unsortedProducts } = useLoaderData();

  return (
    <section className="wrapper">
      <Header />
      <main>
        <Outlet context={{ sortedProducts, unsortedProducts }} />
      </main>
      <Footer />
    </section>
  );
}

export default App;
