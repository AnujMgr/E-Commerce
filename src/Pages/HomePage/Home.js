import React from "react";
// import { StyleCategoryHeader, StyleCategoryTitle } from "./HomeStyle";
import Banner from "./Component/Banner";
import { useSelector } from "react-redux";
import CategoryProductsList from "./Component/CategoryProductsList";
import { StyleFeaturedEntries } from "./HomeStyle/HomeStyle";
import { IoPricetagOutline } from "react-icons/io5";
import { VscGift } from "react-icons/vsc";
import NavTabs from "../../Components/Modules/NavTabs/NavTabs";
import Loading from "../../Components/Modules/Loading";

const Home = () => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <React.Fragment>
      <Banner />
      <StyleFeaturedEntries>
        <div>
          <IoPricetagOutline size={30} />
          <h3>
            <b>Discover</b> Our Collection
          </h3>
        </div>
        <div>
          <VscGift size={30} />
          <h3>
            <b>Huge</b> Discount for All
          </h3>
        </div>
      </StyleFeaturedEntries>
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
