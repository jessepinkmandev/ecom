const SellerDetails = () => {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-lg text-white font-bold mb-3"> Seller Details</h1>
      <div className="w-full  p-4 bg-slate-500 rounded-md">
        <div className="w-full flex flex-wrap text-white ">
          <div className="w-3/12 flex justify-center items-center pt-3">
            <div className="">
              <img
                src="https://picsum.photos/200/300/?blur"
                alt=""
                className="w-full h-[230px]"
              />
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
                  <span>Jesse</span>
                </div>
                <div className="flex gap-2">
                  <span>Email:</span>
                  <span>test#test.com</span>
                </div>
                <div className="flex gap-2">
                  <span>Role:</span>
                  <span>Seller</span>
                </div>
                <div className="flex gap-2">
                  <span>Status:</span>
                  <span>Active</span>
                </div>
                <div className="flex gap-2">
                  <span>Payment Status:</span>
                  <span>Active</span>
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
                  <span>J Mart</span>
                </div>
                <div className="flex gap-2">
                  <span>Division:</span>
                  <span>North</span>
                </div>
                <div className="flex gap-2">
                  <span>District:</span>
                  <span>D-44</span>
                </div>
                <div className="flex gap-2">
                  <span>State:</span>
                  <span>Denial</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <form>
            <div className="flex gap-4 py-3 pt-5">
              <select className="px-4 py-2 focus:border-indigo-500 outline-none bg-slate-400 border border-slate-700 rounded-md text-white">
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
