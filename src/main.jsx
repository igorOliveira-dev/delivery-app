import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./frontend/pages/home/Home";
import Login from "./frontend/pages/login/Login";
import Register from "./frontend/pages/login/Register";
import RouteProtector from "./backend/hooks/RouteProtector";
import UserProfile from "./frontend/pages/userProfile/UserProfile";
import DeliveryRouteProtector from "./backend/hooks/DeliveryRouteProtector";
import Delivery from "./frontend/pages/delivery/Delivery";
import MasterRouteProtector from "./backend/hooks/MasterRouteProtector";
import ProductAdministration from "./frontend/pages/ProductAdd/ProductAdministration";
import Loading from "./frontend/components/loading/Loading";
import { CartProvider } from "./context/CartContext";
import { PurchaseProvider } from "./context/PurchaseContext";
import MyPurchases from "./frontend/pages/myPurchases/MyPurchases";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: (
      <RouteProtector>
        {" "}
        <UserProfile />{" "}
      </RouteProtector>
    ),
  },
  {
    path: "/delivery",
    element: (
      <DeliveryRouteProtector>
        {" "}
        <Delivery />{" "}
      </DeliveryRouteProtector>
    ),
  },
  {
    path: "/productAdministration",
    element: (
      <MasterRouteProtector>
        {" "}
        <ProductAdministration />{" "}
      </MasterRouteProtector>
    ),
  },
  {
    path: "/myPurchases",
    element: (
      <RouteProtector>
        {" "}
        <MyPurchases />{" "}
      </RouteProtector>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <PurchaseProvider>
        <RouterProvider router={router} />
      </PurchaseProvider>
    </CartProvider>
  </React.StrictMode>
);
