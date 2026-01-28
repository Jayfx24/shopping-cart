import App from "./App";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import CartPage from "./pages/Cart/Cart";
import Products from "./components/Products/Products";
import productsLoader from "./loaders/productsLoader";
import ErrorPage from "./components/ErrorPage/ErrorPage";


const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: productsLoader,
    children: [
      { index: true, element: <Home /> },
      {
        path: "products",
        element: <Shop />,
        children: [
          {
            path: ":page?",
            element: <Products />,
            
          },
        ],
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
];

export default routes;
