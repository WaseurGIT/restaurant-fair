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
import AuthProvider from "./contexts/AuthProvider";
import AddNewRestaurantForm from "./components/HomePageComponents/RestaurantRoutes/AddNewRestaurantForm";
import UpdateRestaurantForm from "./components/HomePageComponents/RestaurantRoutes/updateRestaurantForm";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminRestaurants from "./components/admin/AdminRestaurants";
import AdminUsers from "./components/admin/AdminUsers";
import AdminAnalytics from "./components/admin/AdminAnalytics";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/restaurants",
        element: <Restaurants></Restaurants>,
      },
      {
        path: "/restaurants/update/:id",
        element: (
          <PrivateRoute>
            <UpdateRestaurantForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantDetails></RestaurantDetails>,
      },
      {
        path: "/addNewRestaurantForm",
        element: (
          <PrivateRoute>
            <AddNewRestaurantForm></AddNewRestaurantForm>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin",
        element: (
          <PrivateRoute>
            <AdminDashboard></AdminDashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/restaurants",
        element: (
          <PrivateRoute>
            <AdminRestaurants></AdminRestaurants>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/users",
        element: (
          <PrivateRoute>
            <AdminUsers></AdminUsers>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/analytics",
        element: (
          <PrivateRoute>
            <AdminAnalytics></AdminAnalytics>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
