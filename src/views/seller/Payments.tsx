import { BsCurrencyDollar } from "react-icons/bs";
import { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const Payments = () => {
  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm text-white font-medium">
        <div className="w-[25%] p-2 whitespace-nowrap">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-nowrap">$52</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <span className="py-1 px-2 bg-slate-700 text-white rounded-md text-sm">
            Pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap">25 Dec 2025</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <button className="bg-slate-500 px-3 py-1 cursor-pointer text-white rounded-sm text-sm">
            Confirm
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className=" px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 ">
        <div className="flex justify-between items-center p-5 bg-slate-500 rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white">
            <h2 className="text-3xl font-bold">$235</h2>
            <span className="text-md ">Total Sale</span>
          </div>
          <div className="w-10 h-12 rounded-full bg-red-500 flex justify-center items-center text-xl">
            <BsCurrencyDollar color="white" />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-slate-500 rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white">
            <h2 className="text-3xl font-bold">$40</h2>
            <span className="text-md ">Available Amount</span>
          </div>
          <div className="w-10 h-12 rounded-full bg-purple-500 flex justify-center items-center text-xl">
            <BsCurrencyDollar color="white" />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-slate-500 rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white">
            <h2 className="text-3xl font-bold">$195</h2>
            <span className="text-md ">Withdrawl Amount</span>
          </div>
          <div className="w-10 h-12 rounded-full bg-green-500 flex justify-center items-center text-xl">
            <BsCurrencyDollar color="white" />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-slate-500 rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white">
            <h2 className="text-3xl font-bold">$100</h2>
            <span className="text-md ">Pending Amount</span>
          </div>
          <div className="w-10 h-12 rounded-full bg-blue-500 flex justify-center items-center text-xl">
            <BsCurrencyDollar color="white" />
          </div>
        </div>
      </div>

      <div className="w-full mt-5 grid  grid-cols-1 text-white md:grid-cols-2 gap-2 pb-4">
        <div className="bg-slate-500  rounded-md p-5 ">
          <h2 className="text-lg">Send Request</h2>
          <div className="pt-5 ">
            <form action="">
              <div className="flex gap-3 flex-wrap">
                <input
                  className="px-4 py-2 sm:w-[80%] focus:border-slate-900 outline-none bg-slate-500 border border-slate-700 rounded-md text-white"
                  type="number"
                  name="amount"
                  min={0}
                />
                <button className="bg-red-500  hover:shadow-red-500/40 hover:shadow-md text-white rounded-md py-2 px-4 ">
                  Submit{" "}
                </button>
              </div>
            </form>
          </div>
          <div className="">
            <h2 className=" text-lg pb-4 mt-5">Pending Request</h2>

            <div className="w-full overflow-x-auto">
              <div className="flex bg-gray-400 text-xs min-w-[340px] rounded-md ">
                <div className="w-[25%] p-2 text-white">Number</div>
                <div className="w-[25%] p-2 text-white">Amount</div>
                <div className="w-[25%] p-2 text-white">Status</div>
                <div className="w-[25%] p-2 text-white">Date</div>
                <div className="w-[25%] p-2 text-white">Action</div>
              </div>
              {
                <List
                  style={{ minWidth: "340px" }}
                  className="List"
                  height={350}
                  itemCount={10}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>

        <div className="bg-slate-500  rounded-md p-5 ">
          <div className="">
            <h2 className=" text-lg pb-4 mt-5">Success Withdrawl </h2>

            <div className="w-full overflow-x-auto">
              <div className="flex bg-gray-400 text-xs min-w-[340px] rounded-md ">
                <div className="w-[25%] p-2 text-white">Number</div>
                <div className="w-[25%] p-2 text-white">Amount</div>
                <div className="w-[25%] p-2 text-white">Status</div>
                <div className="w-[25%] p-2 text-white">Date</div>
                <div className="w-[25%] p-2 text-white">Action</div>
              </div>
              {
                <List
                  style={{ minWidth: "340px" }}
                  className="List"
                  height={350}
                  itemCount={10}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
