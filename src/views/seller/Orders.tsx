import { useState } from "react";
import Search from "../components/Search";
import Pagination from "../Pagination";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(5);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-slate-400 rounded-md">
        <h1 className="text-white font-semibold text-lg ">Orders </h1>
      </div>
      <Search setPerPage={setPerPage} setSearch={setSearch} search={search} />

      <div className="relative overflow-x-auto mt-5 ">
        <table className="w-full text-sm text-left text-white">
          <thead className="text-sm text-white  border-b bg-slate-700">
            <tr>
              <th scope="col" className="py-3 px-4">
                Order Id{" "}
              </th>
              <th scope="col" className="py-3 px-4">
                Price
              </th>
              <th scope="col" className="py-3 px-4">
                Payment Status
              </th>
              <th scope="col" className="py-3 px-4">
                Order Status
              </th>
              <th scope="col" className="py-3 px-4">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4, 5].map((d, i) => {
              return (
                <tr key={i}>
                  <td
                    scope="row"
                    className="py-1 px-6 font-medium whitespace-nowrap"
                  >
                    #45546
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-6 font-medium whitespace-nowrap"
                  >
                    $631
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-6 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-6 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>

                  <td
                    scope="row"
                    className="py-1 px-6 font-medium whitespace-nowrap"
                  >
                    <div className="flex justify-start items-center gap-4">
                      <Link
                        to={`/seller/dashboard/orders/details/45`}
                        className="p-1.5 bg-green-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 "
                      >
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
  );
};

export default Orders;
