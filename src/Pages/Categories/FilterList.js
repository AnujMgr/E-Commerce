import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../redux/filter/filter-action";
import { StyleFilterCapsule, StyleFilterList } from "./CategoryStyle";

function FilterList() {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.filter);

  function handleFilter(name, isChecked) {
    dispatch(updateFilter({ name, isChecked }));
  }

  return (
    <StyleFilterList>
      {filter.map((filter) => {
        const { name, isChecked } = filter;
        if (isChecked) {
          return (
            <StyleFilterCapsule
              onClick={(e) => handleFilter(name, false)}
              key={name}
            >
              <span>{name}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </span>
            </StyleFilterCapsule>
          );
        } else {
          return null;
        }
      })}
    </StyleFilterList>
  );
}

export default FilterList;
