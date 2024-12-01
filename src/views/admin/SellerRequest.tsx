import { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";

const SellerRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-lg text-white font-bold mb-3"> Seller Request</h1>
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
        <div className="relative overflow-x-auto mt-5 ">
          <table className="w-full text-sm text-left text-white">
            <thead className="text-sm text-white  border-b bg-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  Number
                </th>

                <th scope="col" className="py-3 px-4">
                  Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Email{" "}
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status{" "}
                </th>

                <th scope="col" className="py-3 px-4">
                  Status{" "}
                </th>

                <th scope="col" className="py-3 px-4">
                  Action{" "}
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
                      {d}
                    </td>

                    <td
                      scope="row"
                      className="py-1 px-6 font-medium whitespace-nowrap"
                    >
                      Random
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-6 font-medium whitespace-nowrap"
                    >
                      test@test.com
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-6 font-medium whitespace-nowrap"
                    >
                      Inactive{" "}
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-6 font-medium whitespace-nowrap"
                    >
                      Pending{" "}
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-6 font-medium whitespace-nowrap"
                    >
                      <div className="bg-green-500 flex items-center justify-center px-2 py-1 cursor-pointer">
                        <Link to="/admin/dashboard/seller/2">
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
    </div>
  );
};

export default SellerRequest;
