import { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Search from "../components/Search";
import { get_seller_request } from "../../store/Reducers/sellerReducer";

const SellerRequest = () => {
  const { loader, sellers, totalSeller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(
      get_seller_request({
        perPage,
        currentPage,
        search,
      })
    );
  }, [perPage, currentPage, search]);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-lg text-white font-bold mb-3"> Seller Request</h1>
      <div className="w-full p-4 bg-slate-400 rounded-md">
        <Search setSearch={setSearch} search={search} setPerPage={setPerPage} />
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
                      {d.name}
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
                      {d.payment}
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-6 font-medium whitespace-nowrap"
                    >
                      {d.status}
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-6 font-medium whitespace-nowrap"
                    >
                      <div className="bg-green-500 flex items-center justify-center px-2 py-1 cursor-pointer">
                        <Link to={`/admin/dashboard/seller/${d._id}`}>
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
