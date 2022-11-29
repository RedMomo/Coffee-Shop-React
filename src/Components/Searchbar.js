import React from "react";

function Searchbar({search, onSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        // onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

// plantsy searchbar code snippet

export default Searchbar;