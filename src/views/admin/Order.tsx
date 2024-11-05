import { useState } from "react";

const Order = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState("");

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-slate-400 rounded-md">
        <div className="flex justify-between items-center">
          <select className="px-4 py-2 hover:"></select>
        </div>
      </div>
    </div>
  );
};

export default Order;
