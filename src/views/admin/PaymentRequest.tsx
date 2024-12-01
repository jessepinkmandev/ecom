import { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const PaymentRequest = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-slate-500 rounded-md">
        <h2 className="text-xl font-medium pb-5 text-white">
          Withdrawl Request
        </h2>
        <div className="w-full">
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
  );
};

export default PaymentRequest;
