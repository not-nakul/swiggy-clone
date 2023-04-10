import { useState } from "react";

function Search({ filterRestaurants }) {
  const [searchQuery, setSearchQuery] = useState("");

  function searchQuerySubmitHandler() {
    if (searchQuery.trim() === "") {
      setSearchQuery("");
      return;
    }

    filterRestaurants(searchQuery);
    setSearchQuery("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search for a restaurant"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") searchQuerySubmitHandler();
        }}
        className="w-3/4 p-3 border border-orange-200 rounded-lg focus:outline-orange-500"
      />

      <button
        onClick={searchQuerySubmitHandler}
        className="w-1/5 p-3 border rounded-lg font-semibold bg-orange-200 hover:text-white hover:bg-orange-500 transition-colors"
      >
        Search 🔎
      </button>
    </>
  );
}

export default Search;
