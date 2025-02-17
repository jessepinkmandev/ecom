import { useEffect, useState } from "react";
import { LuArrowDownSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { useDispatch, useSelector } from "react-redux";
import { get_admin_orders } from "../../store/Reducers/orderReducer";

const Order = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const { myOrders, totalOrder } = useSelector((state) => state.order);

  // console.log(sellers, totalSeller);

  useEffect(() => {
    const obj = {
      perPage: parseInt(perPage),
      page: parseInt(currentPage),
      search,
    };
    dispatch(get_admin_orders(obj));
  }, [search, currentPage, perPage]);

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
            {myOrders.map((o, i) => (
              <div className="text-[#d0d2d6] ">
                <div className=" flex justify-between items-start border-b border-slate-700">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                    #{o._id}
                  </div>
                  <div className="py-3 w-[13%] font-medium">${o.price}</div>
                  <div className="py-3 w-[18%] font-medium">
                    {o.payment_status}
                  </div>
                  <div className="py-3 w-[18%] font-medium">
                    {o.delivery_status}
                  </div>
                  <div className="py-3 w-[18%] font-medium">
                    <Link to={`/admin/dashboard/order/details/${o._id}`}>
                      View
                    </Link>
                  </div>
                  <div
                    onClick={(e) => setShow(o._id)}
                    className="py-3 w-[8%] font-medium"
                  >
                    <LuArrowDownSquare />
                  </div>
                </div>

                <div
                  className={
                    show === o._id
                      ? "block border-b border-slate-700 bg-[#8288ed]"
                      : "hidden"
                  }
                >
                  {o.suborder.map((so, i) => (
                    <div className=" flex justify-start items-start border-b border-slate-700">
                      <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                        #{so._id}
                      </div>
                      <div className="py-3 w-[13%] font-medium">
                        ${so.price}
                      </div>
                      <div className="py-3 w-[18%] font-medium">
                        {so.payment_status}
                      </div>
                      <div className="py-3 w-[18%] font-medium">
                        {so.delivery_status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {totalOrder.length <= perPage ? (
          ""
        ) : (
          <div className="w-full flex justify-end mt-4 bottom-4 right-4">
            <Pagination
              pageNumber={currentPage}
              setPageNumber={setCurrentPage}
              totalItem={totalOrder}
              perPage={perPage}
              showItem={4}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
