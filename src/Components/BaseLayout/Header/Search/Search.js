import React from "react";
import { SearchWrapper } from "../NavBarStyle";

const Search = () => {
  return (
    <SearchWrapper>
      <i className="material-icons gray-text">search</i>
      <input
        type="search"
        id="search"
        className="elevate-1"
        placeholder="Search for Products,brand and more"
      />
    </SearchWrapper>
  );
};

export default React.memo(Search);
