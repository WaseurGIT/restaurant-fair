import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import ErrorPage from "./sharedComponents/ErrorPage";
import RestaurantDetails from "./components/HomePageComponents/RestaurantRoutes/RestaurantDetails";
import Restaurants from "./components/HomePageComponents/RestaurantRoutes/Restaurants";
import Login from "./auth/Login";
import Register from "./auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/restaurants',
        element: <Restaurants></Restaurants>
      },
      {
        path: '/restaurants/:id',
        element: <RestaurantDetails></RestaurantDetails>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
