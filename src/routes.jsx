import App from "./App";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
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
