import { lazy } from "react";
const SellerHome = lazy(() => import("../../views/SellerHome"));
const AddProduct = lazy(() => import("../../views/seller/AddProduct"));
const Products = lazy(() => import("../../views/seller/Products"));
const Orders = lazy(() => import("../../views/seller/Orders"));
const Payments = lazy(() => import("../../views/seller/Payments"));
const Profile = lazy(() => import("../../views/seller/Profile"));
const EditProduct = lazy(() => import("../../views/seller/EditProduct"));
const OrderDetails = lazy(() => import("../../views/seller/OrderDetails"));
const Deactive = lazy(() => import("../../views/Deactive"));
const Pending = lazy(() => import("../../views/Pending"));
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
    path: "/seller/account-deactive",
    element: <Deactive />,
    ability: "seller",
  },
  {
    path: "/seller/account-pending",
    element: <Pending />,
    ability: "seller",
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
    path: "/seller/dashboard/edit-product/:productId",
    element: <EditProduct />,
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
    visibility: ["active", "inactive"],
  },
  {
    path: "/seller/dashboard/orders/details/:orderId",
    element: <OrderDetails />,
    role: "seller",
    visibility: ["active", "inactive"],
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
    role: "seller",
    visibility: ["active", "inactive", "pending"],
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
  {
    path: "/seller/dashboard/profile",
    element: <Profile />,
    role: "seller",
    visibility: ["active", "inactive", "pending"],
  },
];
