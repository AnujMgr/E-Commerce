import React from "react";
// import { StyleCategoryHeader, StyleCategoryTitle } from "./HomeStyle";
import Banner from "./Component/Banner";
import { useSelector } from "react-redux";
import CategoryProductsList from "./Component/CategoryProductsList";
import NavTabs from "../../Components/Modules/NavTabs/NavTabs";
import Loading from "../../Components/Modules/Loading";
import FeaturedEntries from "./Component/FeaturedEntries";

const Home = () => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <React.Fragment>
      <Banner />
      <FeaturedEntries />
      {categories.length !== 0 ? (
        <>
          <CategoryProductsList categories={categories.slice(0, 4)} />
          <NavTabs data={categories.slice(6, 10)} />
        </>
      ) : (
        <Loading />
      )}
    </React.Fragment>
  );
};

export default React.memo(Home);
