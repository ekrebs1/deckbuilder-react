import React from "react";

const SearchBar = (props) => {
  return (
    <div id="search">
      <h3>Look up cards here...</h3>
      <form>
        <input type="text" placeholder="card search" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
