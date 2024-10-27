import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../navigation/index";

const Sidebar = () => {
  const { pathname } = useLocation();

  const [allNav, setAllNav] = useState([]);

  useEffect(() => {
    const nav = getNav("admin");

    setAllNav(nav);
  }, []);

  return (
    <div>
      <div className=""></div>
      <div className="w-[260px] fixed z-50 top-0 h-screen bg-[#FFEEAD] shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all">
        <div className="h-[70px] flex justify-center items-center">
          <Link to="/" className="w-[180px] h-[50px]">
            <img
              className="h-12 w-full object-cover my-2 px-4 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCi-5QjvGFlVdqQEO256zBt_G-u_TUpr2KHA&s"
            />
          </Link>
        </div>
        <div className="px-[16px] mt-4">
          <ul>
            {allNav.map((n, i) => (
              <li key={i}>
                <Link
                  to={n.path}
                  className={`${
                    pathname === n.path
                      ? "bg-blue-600 shadow-indigo-500/50 text-white duration-500"
                      : "text-slate-900 font-bold duration-200"
                  } px-2 py-3 rounded-sm flex justify-center items-center gap-3 hover:pl-4 transition-all w-full mb-1 
                  `}
                >
                  <span>{n.icon}</span>
                  <span>{n.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
