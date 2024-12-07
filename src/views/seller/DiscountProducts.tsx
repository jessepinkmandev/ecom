import { useState } from "react";
import Search from "../components/Search";
import Pagination from "../Pagination";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const DiscountProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(5);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-slate-400 rounded-md">
        <h1 className="text-white font-semibold text-lg ">Discount Products</h1>
      </div>
      <Search setPerPage={setPerPage} setSearch={setSearch} search={search} />

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
                Category
              </th>
              <th scope="col" className="py-3 px-4">
                Brand Price
              </th>
              <th scope="col" className="py-3 px-4">
                Discount
              </th>
              <th scope="col" className="py-3 px-4">
                Stock
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
                    {d}
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
                    Random
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-6 font-medium whitespace-nowrap"
                  >
                    Computer
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-6 font-medium whitespace-nowrap"
                  >
                    $132
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-6 font-medium whitespace-nowrap"
                  >
                    10%
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-6 font-medium whitespace-nowrap"
                  >
                    85
                  </td>

                  <td
                    scope="row"
                    className="py-1 px-6 font-medium whitespace-nowrap"
                  >
                    <div className="flex justify-start items-center gap-4">
                      <Link className="p-1.5 bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 ">
                        <FaEdit />
                      </Link>
                      <Link className="p-1.5 bg-green-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 ">
                        <FaEye />
                      </Link>
                      <Link className="p-1.5 bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50 ">
                        <FaTrash />
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

export default DiscountProducts;
