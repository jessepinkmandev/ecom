import { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import Pagination from "../Pagination";
import { useDispatch, useSelector } from "react-redux";
import { get_active_sellers } from "../../store/Reducers/sellerReducer";
import { Link } from "react-router-dom";

const Sellers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const { sellers, totalSeller } = useSelector((state) => state.seller);

  // console.log(sellers, totalSeller);

  useEffect(() => {
    const obj = {
      perPage: parseInt(perPage),
      page: parseInt(currentPage),
      search,
    };
    dispatch(get_active_sellers(obj));
  }, [search, currentPage, perPage]);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-lg text-white font-bold mb-3"> Seller</h1>

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
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-slate-500 border border-slate-700 rounded-md text-white"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="relative overflow-x-auto mt-5 ">
          <table className="w-full text-sm text-left text-white">
            <thead className="text-sm text-white  border-b bg-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  Number
                </th>
                <th scope="col" className="py-3 px-4">
                  Image
                </th>
                <th scope="col" className="py-3 px-4">
                  Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Shop Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status{" "}
                </th>
                <th scope="col" className="py-3 px-4">
                  Email{" "}
                </th>
                <th scope="col" className="py-3 px-4">
                  Division{" "}
                </th>
                <th scope="col" className="py-3 px-4">
                  District{" "}
                </th>
                <th scope="col" className="py-3 px-4">
                  Action{" "}
                </th>
              </tr>
            </thead>

            <tbody>
              {sellers.map((d, i) => {
                return (
                  <tr key={i}>
                    <td
                      scope="row"
                      className="py-1 px-6 font-medium whitespace-nowrap"
                    >
                      {i + 1}
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-6 font-medium whitespace-nowrap"
                    >
                      <img
                        className="w-[45px] h-[45px]"
                        src="https://picsum.photos/200/300/?blur"
                      />
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-6 font-medium whitespace-nowrap"
                    >
                      {d.name}
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-6 font-medium whitespace-nowrap"
                    >
                      {d.shopInfo.shopName}
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-6 font-medium whitespace-nowrap"
                    >
                      {d.payment}
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-6 font-medium whitespace-nowrap"
                    >
                      {d.email}
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-6 font-medium whitespace-nowrap"
                    >
                      {d.shopInfo.division}
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-6 font-medium whitespace-nowrap"
                    >
                      {d.shopInfo.district}
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-6  font-medium whitespace-nowrap"
                    >
                      <div className="bg-green-500 flex items-center justify-center px-2 py-1 cursor-pointer">
                        <Link to={`/admin/dashboard/seller/details/${d._id}`}>
                          <FaEye />
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {totalSeller <= perPage ? (
          <div className="w-full justify-end flex mt-4 bottom-4 right-4">
            <Pagination
              pageNumber={currentPage}
              setPageNumber={setCurrentPage}
              totalItem={totalSeller}
              perPage={perPage}
              showItem={3}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Sellers;
