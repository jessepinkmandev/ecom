import { FormEvent, useEffect, useState } from "react";
import { FaEdit, FaImage, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../Pagination";
import { IoMdCloseCircle } from "react-icons/io";
import Search from "../components/Search";
import { PropagateLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryAdd,
  messageClear,
  getCategory,
} from "../../store/Reducers/categoryReducer";
import toast from "react-hot-toast";

const Category = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);
  const [imageShow, setImageShow] = useState("");
  const [categoryData, setCategoryData] = useState({
    name: "",
    image: "",
  });

  const { loader, successMessage, errorMessage, categorys } = useSelector(
    (state) => state.category
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const imageHandle = (e) => {
    let files = e.target.files;
    if (files.length > 0) {
      setImageShow(URL.createObjectURL(files[0]));
      setCategoryData({
        ...categoryData,
        image: files[0],
      });
    }
  };

  const addCategory = (e: FormEvent) => {
    e.preventDefault();
    dispatch(categoryAdd(categoryData));
  };

  // hot toasts buy now
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      setCategoryData({
        name: "",
        image: "",
      });
      setImageShow("");
    }
  }, [successMessage, errorMessage]);

  // something important
  useEffect(() => {
    const obj = {
      perPage: parseInt(perPage),
      currentPage: parseInt(currentPage),
      search,
    };
    dispatch(getCategory(obj));
  }, [search, currentPage, perPage]);

  console.log(perPage, search);

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
            <Search
              setSearch={setSearch}
              search={search}
              setPerPage={setPerPage}
            />

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
                  {categorys.map((d, i) => {
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
                          <img className="w-[45px] h-[45px]" src={d.image} />
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
              <form onSubmit={addCategory}>
                <div className="flex flex-col w-full gap-1 mb-3">
                  <label htmlFor="name">Category Name</label>
                  <input
                    value={categoryData.name}
                    onChange={(e) =>
                      setCategoryData({ ...categoryData, name: e.target.value })
                    }
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
                    {imageShow ? (
                      <img className="h-full w-full" src={imageShow} />
                    ) : (
                      <>
                        <span>
                          <FaImage />
                        </span>
                        <span>Select Image</span>
                      </>
                    )}
                  </label>
                  <input
                    onChange={imageHandle}
                    className="hidden"
                    type="file"
                    name="image"
                    id="image"
                  />
                </div>
                <button
                  disabled={loader ? true : false}
                  className=" bg-red-600 w-full hover:shadow-lg hover:shadow-red-300/50 text-white rounded-md mt-4 px-7 py-2 mb-3 "
                >
                  {loader ? (
                    <PropagateLoader className="h-4" color="#fff" />
                  ) : (
                    "Add Category "
                  )}
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
