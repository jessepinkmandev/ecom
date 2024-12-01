import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const SellerChat = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full bg-slate-500 px=4 py-4 rounded-md h-[calc(1100vh-140px)]  ">
        <div className="flex w-full h-full relative">
          <div
            className={`w-[200px] h-full z-10 absolute md:left-0 md:relative transition-all ${
              show ? "-left-4" : "-[336px]"
            } `}
          >
            <div className="w-full h-[calc(100vh-177px)] ml-4 bg-slate-400 rounded-lg md:bg-transparent overflow-y-auto">
              <div className="flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-white">
                <h2>Sellers</h2>
                <span className="block cursor-pointer md:hidden">
                  <IoMdClose />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerChat;
