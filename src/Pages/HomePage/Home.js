import React from "react";
// import { StyleCategoryHeader, StyleCategoryTitle } from "./HomeStyle";
import Banner from "./Component/Banner";
import { useSelector } from "react-redux";
import CategoryProductsList from "./Component/CategoryProductsList";

const Home = () => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <React.Fragment>
      <Banner />
      <CategoryProductsList categories={categories.slice(0, 4)} />
    </React.Fragment>
  );
};

export default React.memo(Home);
