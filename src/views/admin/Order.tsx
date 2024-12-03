import { useState } from "react";
import { LuArrowDownSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

const Order = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-slate-400 rounded-md">
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => setPerPage(parseInt(e.target.value))}
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-slate-400 border border-slate-700 rounded-md text-white"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <input
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-slate-500 border border-slate-700 rounded-md text-white"
            type="text"
            placeholder="Search..."
          />
        </div>

        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left ">
            <div className="text-sm text-white uppercase border-b border-slate-700">
              <div className="flex justify-between items-center md:text-sm text-xs">
                <div className="py-3 w-[25%] font-bold">Order Id</div>
                <div className="py-3 w-[13%] font-bold">Price</div>
                <div className="py-3 w-[18%] font-bold">Payment Status</div>
                <div className="py-3 w-[18%] font-bold">Order Status</div>
                <div className="py-3 w-[18%] font-bold">Action</div>
                <div className="py-3 w-[8%] font-bold">
                  <LuArrowDownSquare />
                </div>
              </div>
            </div>

            {/* // */}
            {[1, 2, 3, 4, 5].map((a) => (
              <div key={a} className=" text-white ">
                <div className="flex justify-between items-start border-b  border-slate-700">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                    #5465{" "}
                  </div>
                  <div className="py-3 w-[13%] font-medium">$243</div>
                  <div className="py-3 w-[18%] font-medium"> Pending</div>
                  <div className="py-3 w-[18%] font-medium"> Pending</div>
                  <div className="py-3 w-[18%] font-medium">
                    <Link to="/admin/dashboard/order/details/3">View</Link>
                  </div>
                  <div
                    onClick={() => setShow(!show)}
                    className="py-3 w-[8%] font-medium hover:cursor-pointer"
                  >
                    <LuArrowDownSquare />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full justify-end flex mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            perPage={perPage}
            showItem={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
