import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../navigation/index";
import { BiLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth);

  const { pathname } = useLocation();

  const [allNav, setAllNav] = useState([]);

  useEffect(() => {
    const nav = getNav(role);

    setAllNav(nav);
  }, [role]);

  return (
    <div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed duration-200 ${
          !showSidebar ? "invisible" : "visible"
        } w-screen h-screen bg-[#8cbce780] top-0 left-0 z-10`}
      ></div>

      <div
        className={`w-[260px] fixed z-50 top-0 h-screen bg-[#FFEEAD] shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] ${
          showSidebar ? "left-0" : "-left-[260px] lg:left-0"
        } transition-all`}
      >
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
                      ? "bg-blue-500 shadow-indigo-500/50 text-white duration-500"
                      : "text-slate-900 font-bold duration-200"
                  } px-2 py-3 rounded-sm flex justify-start items-center gap-3 hover:pl-4 transition-all w-full mb-1 
                  `}
                >
                  <span>{n.icon}</span>
                  <span>{n.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <button
                className="text-slate-900 font-bold duration-200
                   px-2 py-3 rounded-sm flex justify-start items-center gap-3 hover:pl-4 transition-all w-full mb-1 "
              >
                <span>
                  <BiLogOut />
                </span>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
