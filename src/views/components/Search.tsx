const Search = ({
  setPerPage,
  setSearch,
  search,
}: {
  setPerPage: (a: number) => number;
}) => {
  return (
    <div className="flex justify-between items-center">
      <select
        onChange={(e) => setPerPage(parseInt(e.target.value))}
        className="px-4 py-2 focus:border-indigo-500 outline-none bg-slate-400 border border-slate-700 rounded-md text-white"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="px-4 py-2 focus:border-indigo-500 outline-none bg-slate-500 border border-slate-700 rounded-md text-white"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
