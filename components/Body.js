import { useState } from "react";
import { useSession } from "next-auth/react";
import Search from "./Search";

const Body = () => {
  const { data: session } = useSession();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div
      className="bg-black ml-24 py-4 space-y-8 md:max-w-6xl
    flex-grow md:mr-2.5"
    >
      <Search search={search} setSearch={setSearch} />
      <div></div>
    </div>
  );
};

export default Body;
