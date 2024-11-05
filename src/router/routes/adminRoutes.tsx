import { lazy } from "react";
const Order = lazy(() => import("../../views/admin/Order"));
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));

export const adminRoutes = [
  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
  {
    path: "admin/dashboard/orders",
    element: <Order />,
    role: "admin",
  },
];
