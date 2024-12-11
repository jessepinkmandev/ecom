import { lazy } from "react";

const Login = lazy(() => import("../../views/auth/Login"));
const Register = lazy(() => import("../../views/auth/Register"));
const AdminLogin = lazy(() => import("../../views/auth/AdminLogin"));
const SellerHome = lazy(() => import("../../views/SellerHome"));
const Unauthorised = lazy(() => import("../../views/Unauthorised"));

const publicRoutes = [
  {
    path: "/",
    element: <SellerHome />,
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
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/unauthorised",
    element: <Unauthorised />,
  },
];

export default publicRoutes;
