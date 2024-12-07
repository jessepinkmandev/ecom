const SellerAdminChat = () => {
  const sellerID = 65;
  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full bg-slate-500 px=4 py-4 rounded-md h-[calc(1100vh-140px)]  ">
        <div className="flex w-full h-full relative">
          <div className="w-full md:pl-4 ml-4 ">
            <div className="flex justify-between items-center">
              {sellerID && (
                <div className="flex justify-start items-center gap-3">
                  <div className="relative">
                    <img
                      className="w-12 h-12 border-green-500 border-2 rounded-full max-w-12 p-1"
                      src="https://picsum.photos/200/300/?blur"
                      alt=""
                    />
                    <div className="w-3 h-3 bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                  </div>
                  <h2 className="text-base text-white font-semibold">Jesse</h2>
                </div>
              )}
            </div>
            <div className="py-4 ">
              <div className="bg-slate-400 h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto">
                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-h-full lg:max-w-[85%]">
                    <div className="">
                      <img
                        src="https://picsum.photos/200/300/?blur"
                        className="w-9 h-9 border-white border-2 rounded-full max-w-[38px] p-1"
                      />
                    </div>
                    <div className="flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm">
                      <span>How Are You?</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-h-full lg:max-w-[85%]">
                    <div className="flex justify-center items-start flex-col w-full bg-red-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm">
                      <span>How Are You?</span>
                    </div>
                    <div>
                      <img
                        src="https://picsum.photos/200/300/?blur"
                        className="w-9 h-9 border-white border-2 rounded-full max-w-[38px] p-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-h-full lg:max-w-[85%]">
                    <div className="">
                      <img
                        src="https://picsum.photos/200/300/?blur"
                        className="w-9 h-9 border-white border-2 rounded-full max-w-[38px] p-1"
                      />
                    </div>
                    <div className="flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm">
                      <span>How Are You?</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-h-full lg:max-w-[85%]">
                    <div className="flex justify-center items-start flex-col w-full bg-red-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm">
                      <span>How Are You?</span>
                    </div>
                    <div>
                      <img
                        src="https://picsum.photos/200/300/?blur"
                        className="w-9 h-9 border-white border-2 rounded-full max-w-[38px] p-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="flex gap-3 ">
              <input
                type="text"
                className="flex justify-between px-2 w-full border border-slate-700 items-center py-1 focus:border-blue-400 rounded-md outline-none bg-transparent text-white "
                placeholder="Input Message Here"
              />
              <button className="shadow-lg bg-blue-500 hover:shadow-cyan-500/50 text-semibold w-20 h-9 rounded-md text-white flex justify-center items-center ">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerAdminChat;