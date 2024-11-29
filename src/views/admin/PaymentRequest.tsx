import { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}

const outerElementType = forwardRef((props, ref) => {
  return <div ref={ref} onWheel={handleOnWheel} {...props} />;
});

const PaymentRequest = () => {
  const Row = ({ index, style }) => {};
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentRequest;
