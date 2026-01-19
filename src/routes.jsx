import App from "./App";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import productsLoader from "./loaders/productsLoader";

const routes = [
  {
    path: "/",
    element: <App />,
    loader: productsLoader,
    children: [
      { index: true, element: <Home /> },
      {
        path: "products",
        element: <Shop />,
      },
    ],
  },
];

export default routes;
