import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../store/Reducers//categoryReducer";
import {
  get_productone,
  messageClear,
  product_image_update,
  update_product,
} from "../../store/Reducers/productReducer";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";

const EditProduct = () => {
  const dispatch = useDispatch();
  const { categorys } = useSelector((state) => state.category);
  const { product, loader, successMessage, errorMessage } = useSelector(
    (state) => state.product
  );
  const { productId } = useParams();

  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    discount: {},
    price: {},
    brand: "",
    stock: {},
  });

  useEffect(() => {
    dispatch(
      getCategory({
        search: "",
        page: "",
        perPage: "",
      })
    );
  }, []);

  useEffect(() => {
    dispatch(get_productone(productId));
  }, [productId]);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  const [cateshow, setCateShow] = useState(false);
  const [category, setCategory] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [images, setImages] = useState([]);
  const [imagesShow, setImagesShow] = useState([{}]);

  const categorySearch = (e) => {
    const value = e.target.value;

    setSearchValue(value);
    if (value) {
      let srcValue = allCategory.filter(
        (c) => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
      setAllCategory(srcValue);
    } else {
      setAllCategory(categories);
    }
  };

  const handleInput = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  const changeImage = (img, files) => {
    if (files.length > 0) {
      dispatch(
        product_image_update({
          oldImage: img,
          newImage: files[0],
          productId,
        })
      );
    }
  };

  useEffect(() => {
    const {
      name,
      description,
      discount,
      price,
      brand,
      stock,
      category,
      images,
    } = product;

    setProductDetails({
      name,
      description,
      discount,
      price,
      brand,
      stock,
    });
    setCategory(category);
    setImagesShow(images);
  }, [product]);

  useEffect(() => {
    if (categorys.length > 0) {
      setAllCategory(categorys);
    }
  }, [categorys]);

  const update = (e) => {
    e.preventDefault();
    const obj = {
      name: productDetails.name,
      description: productDetails.description,
      discount: productDetails.discount,
      price: productDetails.price,
      brand: productDetails.brand,
      stock: productDetails.stock,
      productId: productId,
      category: category,
    };

    dispatch(update_product(obj));
  };
  return (
    <div className="px=2 lg:px-7 pt-5 text-white">
      <div className="w-full p-4 bg-slate-400 rounded-md">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-xl font-semibold">Edit Product</h1>
          <Link
            to={"/seller/dashboard/all-product"}
            className=" bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg rounded-sm px-7 py-2 my-2"
          >
            All Product
          </Link>
        </div>

        <div>
          <form onSubmit={update}>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full ">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="name">Product Name</label>
                <input
                  onChange={handleInput}
                  value={productDetails.name}
                  className="bg-slate-500 px-4 py-2 focus:border-indigo-500 outline-none border border-slate-700 rounded-md "
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Product name..."
                />
              </div>

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="brand">Brand Name</label>
                <input
                  onChange={handleInput}
                  value={productDetails.brand}
                  className="bg-slate-500 px-4 py-2 focus:border-indigo-500 outline-none border border-slate-700 rounded-md "
                  type="text"
                  name="brand"
                  id="brand"
                  placeholder="Brand name..."
                />
              </div>
            </div>

            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full ">
              <div className="relative flex flex-col w-full gap-1">
                <label htmlFor="name">Category</label>
                <input
                  readOnly
                  onClick={() => setCateShow(!cateshow)}
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
                  onChange={handleInput}
                  value={category}
                  type="text"
                  id="category"
                  placeholder="--select category--"
                />

                <div
                  className={`absolute top-[101%] bg-[#475569] w-full transition-all ${
                    cateshow ? "scale-100" : "scale-0"
                  } `}
                >
                  <div className="w-full px-4 py-2 fixed">
                    <input
                      value={searchValue}
                      onChange={categorySearch}
                      className="px-3 py-1 w-full focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6] overflow-hidden"
                      type="text"
                      placeholder="search"
                    />
                  </div>
                  <div className="pt-14"></div>
                  <div className="flex justify-start items-start flex-col h-[200px] overflow-x-hidden">
                    {allCategory.length > 0 &&
                      allCategory.map((c, i) => (
                        <span
                          className={`px-4 py-2 hover:bg-indigo-500 hover:text-white hover:shadow-lg w-full cursor-pointer ${
                            category === c.name && "bg-indigo-500"
                          }`}
                          onClick={() => {
                            setCateShow(false);
                            setCategory(c.name);
                            setSearchValue("");
                            setAllCategory(categories);
                          }}
                        >
                          {c.name}{" "}
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="brand">Product Stock</label>
                <input
                  onChange={handleInput}
                  value={productDetails.stock}
                  className="bg-slate-500 px-4 py-2 focus:border-indigo-500 outline-none border border-slate-700 rounded-md "
                  type="text"
                  name="stock"
                  id="stock"
                  placeholder="Stock Number..."
                />
              </div>
            </div>

            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full ">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="price">Price</label>
                <input
                  onChange={handleInput}
                  value={productDetails.price}
                  className="bg-slate-500 px-4 py-2 focus:border-indigo-500 outline-none border border-slate-700 rounded-md "
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Product Price..."
                />
              </div>

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="discount">Discount</label>
                <input
                  onChange={handleInput}
                  value={productDetails.discount}
                  className="bg-slate-500 px-4 py-2 focus:border-indigo-500 outline-none border border-slate-700 rounded-md "
                  type="number"
                  name="discount"
                  id="discount"
                  placeholder="Product discount % ..."
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="description">Description</label>
              <textarea
                onChange={handleInput}
                value={productDetails.description}
                className="bg-slate-500 px-4 py-2 focus:border-indigo-500 outline-none border border-slate-700 rounded-md "
                name="description"
                id="description"
                placeholder="Product description ..."
                cols={10}
                rows={5}
              ></textarea>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-3 w-full mb-4   ">
              {imagesShow &&
                imagesShow.length > 0 &&
                imagesShow.map((img, i) => (
                  <div className="">
                    <label htmlFor={i}>
                      <img src={img} alt="" />
                    </label>
                    <input
                      type="file"
                      id={i}
                      onChange={(e) => changeImage(img, e.target.files)}
                      className="hidden"
                    />
                  </div>
                ))}
            </div>
            <div className="flex">
              <button
                disabled={loader ? true : false}
                className=" bg-red-500 w-[300px] hover:shadow-lg hover:shadow-red-300/50 text-white rounded-md mt-4 px-7 py-2 mb-3 "
              >
                {loader ? (
                  <PropagateLoader className="h-4" color="#fff" />
                ) : (
                  "Add Changes "
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
