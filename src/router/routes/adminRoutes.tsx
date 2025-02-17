import { lazy } from "react";
const Order = lazy(() => import("../../views/admin/Order"));
const Category = lazy(() => import("../../views/admin/Category"));
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const Sellers = lazy(() => import("../../views/admin/Sellers"));
const PaymentRequest = lazy(() => import("../../views/admin/PaymentRequest"));
const SellerRequest = lazy(() => import("../../views/admin/SellerRequest"));
const SellerDetails = lazy(() => import("../../views/admin/SellerDetails"));
const SellerChat = lazy(() => import("../../views/admin/SellerChat"));
const OrderDetails = lazy(() => import("../../views/admin/OrderDetails"));
const DeactivateSellers = lazy(
  () => import("../../views/admin/DeactivateSellers")
);

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
  {
    path: "admin/dashboard/category",
    element: <Category />,
    role: "admin",
  },
  {
    path: "admin/dashboard/sellers",
    element: <Sellers />,
    role: "admin",
  },
  {
    path: "admin/dashboard/payment=request",
    element: <PaymentRequest />,
    role: "admin",
  },
  {
    path: "admin/dashboard/deactive-sellers",
    element: <DeactivateSellers />,
    role: "admin",
  },
  {
    path: "admin/dashboard/seller-request",
    element: <SellerRequest />,
    role: "admin",
  },
  {
    path: "admin/dashboard/seller/details/:sellerId",
    element: <SellerDetails />,
    role: "admin",
  },
  {
    path: "admin/dashboard/chat-seller",
    element: <SellerChat />,
    role: "admin",
  },
  {
    path: "admin/dashboard/chat-seller/:sellerId",
    element: <SellerChat />,
    role: "admin",
  },
  {
    path: "admin/dashboard/order/details/:orderId",
    element: <OrderDetails />,
    role: "admin",
  },
];
