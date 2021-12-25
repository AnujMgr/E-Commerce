import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useHistory } from "react-router";
import { SearchWrapper } from "../NavBarStyle";

const Search = ({ handleSubmit }) => {
  const [query, setQuery] = useState("q");
  const history = useHistory();

  return (
    <SearchWrapper>
      <BsSearch size="18" />
      <input
        type="search"
        id="search"
        placeholder="Search for Products,brand and more"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onClick={(e) => history.push(`/search/${query}`)}
      />
    </SearchWrapper>
  );
};

export default React.memo(Search);
