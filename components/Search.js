import { MdOutlineShortText } from "react-icons/md";
const Search = ({ search, setSearch }) => {
  return (
    <div
      className="max-w-7xl rounded-full bg-neutral-800 overflow-hidden 
    border-3 border-b-slate-900 p-1.5 px-5 pr-8 flex items-center"
    >
      <div className="h-4 w-3 rounded-full border-2 flex-shrink-0 animate-pulse" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="bg-neutral-800 border-none lg:w-full focus:ring-0 outline-none
         placeholder-white text-xs text-white"
      />
      <div className="flex items-center  cursor-pointer divide-dotted divide-x-2 divide-white">
        <div className="flex space-x-2 text-white pr-5">
          <button className="tag">House</button>
          <button className="tag">Minimal</button>
          <button className="tag">Rock</button>
        </div>
      </div>
      <div className="flex items-center text-white pl-4 cursor-pointer">
        <MdOutlineShortText className="text-2xl animate-pulse" />
        <span className="pl-1 text-sm">Filters</span>
      </div>
    </div>
  );
};

export default Search;
