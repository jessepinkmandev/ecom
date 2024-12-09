const OrderDetails = () => {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-slate-400 rounded-md">
        <div className="flex justify-between items-center p-4 ">
          <h2 className="text-xl text-white">Order Details</h2>
          <select
            name=""
            id=""
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-slate-600 border-slate-800 rounded-md text-white"
          >
            <option value="hoil">Pending</option>
            <option value="hoil">Processing</option>
            <option value="hoil">Warehouse</option>
            <option value="hoil">Placed</option>
            <option value="hoil">Cancelled</option>
          </select>
        </div>
        <div className="p-4 ">
          <div className="flex gap-2 text-xl text-white">
            <h2 className="">#431241</h2>
            <span>8 Jan 2024</span>
          </div>
          <div className="flex flex-wrap">
            <div className="w-[30%]">
              <div className="pr-3 text-white text-lg">
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold">Delivered to: Warehouse</h2>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <h2>Payment Status:</h2>
                  <span>Paid</span>
                </div>
                <span>Price: $45</span>

                {[1, 2, 3].map((a) => (
                  <div className="mt-4 flex flex-col gap-4 bg-slate-500 p-2 rounded-md">
                    <div className="text-white ">
                      <div className="flex gap-3 text-md ">
                        <img
                          className="w-12 h-12"
                          src="https://picsum.photos/200/300/?blur"
                          alt=""
                        />
                        <div className="">
                          <h2>Product Name</h2>
                          <p>
                            <span>Brand:</span>
                            <span>Aaudi</span>
                            <span>Quantity: 5</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
