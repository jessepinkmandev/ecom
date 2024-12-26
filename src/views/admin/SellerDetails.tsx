import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  get_seller,
  messageClear,
  seller_status_update,
} from "../../store/Reducers/sellerReducer";
import toast from "react-hot-toast";

const SellerDetails = () => {
  const { seller, successMessage } = useSelector((state) => state.seller);

  const dispatch = useDispatch();
  const { sellerId } = useParams();

  const [status, setStatus] = useState("");

  useEffect(() => {
    dispatch(get_seller(sellerId));
  }, [sellerId]);

  const submitStatus = (e) => {
    e.preventDefault();
    dispatch(
      seller_status_update({
        sellerId,
        status,
      })
    );
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
  }, [successMessage]);

  useEffect(() => {
    if (seller) {
      setStatus(seller.status);
    }
  }, [seller]);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-lg text-white font-bold mb-3"> Seller Details</h1>
      <div className="w-full  p-4 bg-slate-500 rounded-md">
        <div className="w-full flex flex-wrap text-white ">
          <div className="w-3/12 flex justify-center items-center pt-3">
            <div className="">
              {seller?.image ? (
                <img src={seller.image} alt="" className="w-full h-[230px]" />
              ) : (
                <span>Image Not Uploaded</span>
              )}
            </div>
          </div>

          <div className="w-4/12 ">
            <div className="px-0 md:px-5 py-2">
              <div className="py-2 text-lg">
                <h2>Basic Information</h2>
              </div>
              <div className="flec justify-between text-sm flex-col gap-2 p-4 bg-slate-400 rounded-md">
                <div className="flex gap-2">
                  <span>Name:</span>
                  <span>{seller?.name}</span>
                </div>
                <div className="flex gap-2">
                  <span>Email:</span>
                  <span>{seller?.email}</span>
                </div>
                <div className="flex gap-2">
                  <span>Role:</span>
                  <span>{seller?.role}</span>
                </div>
                <div className="flex gap-2">
                  <span>Status:</span>
                  <span>{seller?.status}</span>
                </div>
                <div className="flex gap-2">
                  <span>Payment Status:</span>
                  <span>{seller?.payment}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-4/12 ">
            <div className="px-0 md:px-5 py-2">
              <div className="py-2 text-lg">
                <h2>Address </h2>
              </div>
              <div className="flec justify-between text-sm flex-col gap-2 p-4 bg-slate-400 rounded-md">
                <div className="flex gap-2">
                  <span>Shop Name:</span>
                  <span>{seller?.shopInfo?.shopName}</span>
                </div>
                <div className="flex gap-2">
                  <span>Division:</span>
                  <span>{seller?.shopInfo?.division}</span>
                </div>
                <div className="flex gap-2">
                  <span>District:</span>
                  <span>{seller?.shopInfo?.district}</span>
                </div>
                <div className="flex gap-2">
                  <span>State:</span>
                  <span>{seller?.shopInfo?.subdistrict}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <form onSubmit={submitStatus}>
            <div className="flex gap-4 py-3 pt-5">
              <select
                onChange={(e) => setStatus(e.target.value)}
                required
                value={status}
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-slate-400 border border-slate-700 rounded-md text-white"
              >
                <option value="">--Select Status--</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <button className="bg-red-500 shadow-lg hover:shadow-red-500/40 px-4 py-2 cursor-pointer text-white rounded-lg text-sm">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
