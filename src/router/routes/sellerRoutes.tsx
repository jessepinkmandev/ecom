import { lazy } from "react";
const SellerHome = lazy(() => import("../../views/SellerHome"));

export const sellerRoutes = [
  {
    path: "/",
    element: <SellerHome />,
    ability: ["admin", "seller"],
  },
];
