import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../page/home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../page/Auth/Login";
import SingUp from "../page/Auth/SingUp";
import CheckOut from "../page/home/checkOut/CheckOut";
import ServiceDetails from "../page/home/Service/serviceDetails/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "check-out/:id",
        element: <CheckOut />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/check-out/${params.id}`),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sing-up",
        element: <SingUp />,
      },
    ],
  },
]);

export default router;
