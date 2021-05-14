import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../Components/Modules";
import ProductCard from "../../Components/Modules/ProductCard";
import { ProductsContainer } from "./CategoryStyle";
import FilterList from "./FilterList";

function Main() {
  const dispatch = useDispatch();
  const { catProducts } = useSelector((state) => state.catProducts);
  console.log(catProducts);
  return (
    <div>
      <FilterList />
      <ProductsContainer>
        <ProductCard />

        {catProducts.map((product) => {
          return <Card product={product} key={product.id} />;
        })}
      </ProductsContainer>
    </div>
  );
}

export default Main;
