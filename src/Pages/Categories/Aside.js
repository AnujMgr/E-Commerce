import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../redux/filter/filter-action";
import { Checkbox } from "../../Components/Modules";
import { FilterContainer, FilterTitle, FilterHeader } from "./CategoryStyle";

function Aside() {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.filter);

  const handleFilterItems = (name, isChecked) => {
    if (isChecked) {
      dispatch(updateFilter({ name, isChecked: true }));
    } else {
      dispatch(updateFilter({ name, isChecked: false }));
    }
  };
  // const items = ["Samsung", "Nokia", "LG"];

  return (
    <FilterContainer>
      <FilterHeader>
        <FilterTitle>Filter by:</FilterTitle>
      </FilterHeader>

      <h4>Category</h4>
      <div>
        {filter.map((item) => {
          return (
            <Checkbox
              name={item.name}
              key={item.name}
              handleFilterItems={handleFilterItems}
              isChecked={item.isChecked}
            />
          );
        })}
      </div>
      {/* <h4>Brand</h4>
      <div>
        <Checkbox
          name={"Samsung"}
          handleFilterItems={handleFilterItems}
          filterItems={filter}
        />
        <Checkbox
          name={"Apple"}
          handleFilterItems={handleFilterItems}
          filterItems={filter}
        />
        <Checkbox
          name={"LG"}
          handleFilterItems={handleFilterItems}
          filterItems={filter}
        />
      </div> */}
    </FilterContainer>
  );
}

export default Aside;
