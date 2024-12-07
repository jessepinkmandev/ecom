import { useState } from "react";
import { FaEdit, FaImage, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { IoMdCloseCircle } from "react-icons/io";
import Search from "../components/Search";

const Category = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-slate-400 rounded-md">
        <h1 className="text-white font-semibold text-lg ">Category</h1>
        <button
          onClick={() => setShow(true)}
          className="bg-red-500 shadow-lg hover:shadow-red-500/40 px-4 py-2 cursor-pointer text-white rounded-sm text-sm"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-7/12">
          <div className="w-full p-4 bg-slate-400 rounded-md">
            <Search setPerPage={setPerPage} />

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
                          <div className="flex justify-start items-center gap-4">
                            <Link className="p-1.5 bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 ">
                              <FaEdit />
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
        </div>

        {/* ll */}
        <div
          className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${
            show ? "right-0" : "-right-[340px]"
          } z-[9999] top-0 transition-all duration-500`}
        >
          <div className="w-full pl-5">
            <div className="bg-slate-400 h-screen lg:h-auto px-3 py-2 lg:rounded-md text-white">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-white font-semibold text-xl mb-4 w-full text-center">
                  Add Category
                </h1>
                <div
                  onClick={() => setShow(false)}
                  className="block lg:hidden cursor-pointer "
                >
                  <IoMdCloseCircle />
                </div>
              </div>
              <form>
                <div className="flex flex-col w-full gap-1 mb-3">
                  <label htmlFor="name">Category Name</label>
                  <input
                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-slate-500 border border-slate-700 rounded-md text-white"
                    type="text"
                    id="name"
                    name="category_name"
                    placeholder="Catergory name ..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-indigo-500 w-full border-white"
                  >
                    <span>
                      <FaImage />
                    </span>
                    <span>Select Image</span>
                  </label>
                  <input
                    className="hidden"
                    type="file"
                    name="image"
                    id="image"
                  />
                </div>
                <button className="bg-red-500 w-full hover:shadow-red-500/40 hover:shadow-md text-white rounded-md py-2 my-2">
                  Add Category
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
