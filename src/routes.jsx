import App from "./App";
import Home from "./pages/Home/Home";
import homeProductSort from "./utils";


const routes = [
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Home /> }],
  },
];

export default routes;
