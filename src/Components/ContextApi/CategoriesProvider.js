import React, { useEffect, useState } from "react";
import { CategoriesContext } from "../ContextApi/CategoriesContext";
import data from "../../data";

const CategoriesProvider = props => {
  // console.log("i am Categories Provider");
  const [categories, setCategories] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setCategories(data.categories);
    setLoading(false);
  }, [setCategories]);

  return (
    <React.Fragment>
      {!isLoading ? (
        <CategoriesContext.Provider value={{ categories }}>
          {props.children}
        </CategoriesContext.Provider>
      ) : (
        <h6>Loading....</h6>
      )}
    </React.Fragment>
  );
};
//
// if((isStateLoaded && isCategoryLoaded && isPostLoaded) == true)

export { CategoriesProvider };
