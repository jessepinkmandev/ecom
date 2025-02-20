import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { socket } from "../utilities/utilities";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomers, updateSellers } from "../store/Reducers/chatReducer";

const MainLayout = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [showSidebar, setShowSidebar] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo && userInfo.role === "seller") {
      socket.emit("add_seller", userInfo._id, userInfo);
    } else {
      socket.emit("add_admin", userInfo);
    }
  }, [userInfo]);

  useEffect(() => {
    socket.on("activeCustomer", (customers) => {
      dispatch(updateCustomers(customers));
    });
    socket.on("activeSeller", (sellers) => {
      dispatch(updateSellers(sellers));
    });
  });

  return (
    <div className=" bg-[#96CEB4] w-full min-h-screen">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className=" ml-0 lg:ml-[260px] pt-[95px] transition-all ">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
