import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import RestaurantList from "./components/RestaurantList";
import Support from "./components/Support";
import Error from "./components/Error";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <RestaurantList /> },
      { path: "/support", element: <Support /> },
      { path: "/restaurant/:id", element: <Menu /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
