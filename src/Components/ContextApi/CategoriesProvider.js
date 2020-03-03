import React, { useEffect, useState } from "react";
import { CategoriesContext } from "../ContextApi/CategoriesContext";
import data from "../../data";

const CategoriesProvider = props => {
  // console.log("i am Categories Provider");
  const [categories, setCategories] = useState("");

  useEffect(() => {
    setCategories(data.categories);
  }, [setCategories]);

  if (categories) {
    return (
      <CategoriesContext.Provider value={{ categories }}>
        {props.children}
      </CategoriesContext.Provider>
    );
  } else {
    return <h5>Loading...</h5>;
  }
};
//
// if((isStateLoaded && isCategoryLoaded && isPostLoaded) == true)

export { CategoriesProvider };
