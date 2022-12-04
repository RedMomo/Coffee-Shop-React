import React from "react";

function Searchbar({search, setSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search"> Search: </label>
      <input
        type="text"
        id="search"
        placeholder="What can we get for you today?"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        // onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

// plantsy searchbar code snippet

export default Searchbar;