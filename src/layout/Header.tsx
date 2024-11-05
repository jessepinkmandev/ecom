import { FaList } from "react-icons/fa";

const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-[#FFAD60] px-5 transition-all ">
        <div
          className="w-[35px] flex lg:hidden h-[35px] rounded-sm bg-indigo-500 shadow-indigo-500/50 justify-center items-center cursor-pointer "
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <span>
            <FaList />
          </span>
        </div>
        <div className="hidden md:block  ">
          <input
            className="px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-md text-white focus:border-indigo-500 overflow-hidden"
            type="text"
            name="search"
            placeholder="Search here ..."
          />
        </div>

        <div className="flex justify-center items-center gap-8 relative">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-3">
              <div className="flex justify-center items-center flex-col text-end">
                <h2 className="font-bold">Jesse</h2>
                <span>Admin</span>
              </div>
              <img
                className="h-8 rounded-full"
                src="https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-600nw-418179856.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
