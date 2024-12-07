import { lazy } from "react";
const SellerHome = lazy(() => import("../../views/SellerHome"));
const AddProduct = lazy(() => import("../../views/seller/AddProduct"));
const Products = lazy(() => import("../../views/seller/Products"));
const Orders = lazy(() => import("../../views/seller/Orders"));
const Payments = lazy(() => import("../../views/seller/Payments"));
const SellerAdminChat = lazy(
  () => import("../../views/seller/SellerAdminChat")
);
const SellerCustomerChat = lazy(
  () => import("../../views/seller/SellerCustomerChat")
);
const DiscountProducts = lazy(
  () => import("../../views/seller/DiscountProducts")
);
const SellerDashboard = lazy(
  () => import("../../views/seller/SellerDashboard")
);

export const sellerRoutes = [
  {
    path: "/",
    element: <SellerHome />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/all-product",
    element: <Products />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/discount-product",
    element: <DiscountProducts />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/orders",
    element: <Orders />,
    role: "seller",
    ability: ["active", "inactive"],
  },
  {
    path: "/seller/dashboard/payment",
    element: <Payments />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-support",
    element: <SellerAdminChat />,
    ability: ["active", "inactive", "pending"],
  },
  {
    path: "/seller/dashboard/chat-customer/:customerId",
    element: <SellerCustomerChat />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-customer",
    element: <SellerCustomerChat />,
    role: "seller",
    status: "active",
  },
];
