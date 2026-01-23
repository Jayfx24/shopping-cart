import { useState } from "react";
import "./App.css";
import { Outlet, useLoaderData } from "react-router";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const { sortedProducts, unsortedProducts } = useLoaderData();
  const [cart, setCart] = useState({
    "Essence Mascara Lash Princess": {
      product: {
        id: 1,
        title: "Essence Mascara Lash Princess",
        description:
          "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 9.99,
        discountPercentage: 10.48,
        rating: 2.56,
        stock: 99,
        tags: ["beauty", "mascara"],
        brand: "Essence",
        sku: "BEA-ESS-ESS-001",
        weight: 4,
        dimensions: {
          width: 15.14,
          height: 13.08,
          depth: 22.99,
        },
        warrantyInformation: "1 week warranty",
        shippingInformation: "Ships in 3-5 business days",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 3,
            comment: "Would not recommend!",
            date: "2025-04-30T09:41:02.053Z",
            reviewerName: "Eleanor Collins",
            reviewerEmail: "eleanor.collins@x.dummyjson.com",
          },
          {
            rating: 4,
            comment: "Very satisfied!",
            date: "2025-04-30T09:41:02.053Z",
            reviewerName: "Lucas Gordon",
            reviewerEmail: "lucas.gordon@x.dummyjson.com",
          },
          {
            rating: 5,
            comment: "Highly impressed!",
            date: "2025-04-30T09:41:02.053Z",
            reviewerName: "Eleanor Collins",
            reviewerEmail: "eleanor.collins@x.dummyjson.com",
          },
        ],
        returnPolicy: "No return policy",
        minimumOrderQuantity: 48,
        meta: {
          createdAt: "2025-04-30T09:41:02.053Z",
          updatedAt: "2025-04-30T09:41:02.053Z",
          barcode: "5784719087687",
          qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
        },
        images: [
          "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
        ],
        thumbnail:
          "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
      },
      count: 3,
    },
  });

  const cartCount = Object.values(cart).reduce(
    (acc, { count }) => acc + count,
    0,
  );
  const count = cartCount > 0 ? cartCount : '';

  const handleCartClick = (e, product) => {
    const target = e.target;
    const allListed = Object.hasOwn(cart, product.title);
    const newCart = { ...cart };
    const itemCount = allListed ? newCart[product.title].count : 1;

    if (target.id === "addItem") {
      if (allListed) newCart[product.title].count = itemCount + 1;
      else
        newCart[product.title] = {
          product: product,
          count: itemCount,
        };
    } else {
      if (itemCount > 1) newCart[product.title].count = itemCount - 1;
      else delete newCart[product.title];
    }
    console.log(newCart);
    return setCart(newCart);
  };

  const handleCartDelete = (title) => {
    const newCart = { ...cart };
    delete newCart[title];
    setCart(newCart);
  };

  return (
    <section className="wrapper">
      <Header count={count} />
      <main>
        <Outlet
          context={{
            sortedProducts,
            unsortedProducts,
            cart,
            handleCartClick,
            handleCartDelete,
          }}
        />
      </main>
      <Footer />
    </section>
  );
}

export default App;
