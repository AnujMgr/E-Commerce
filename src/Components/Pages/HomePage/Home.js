import React, { useContext } from "react";

import Card from "../../Modules/Card";
import { StyleProductHeader, StyleCategoryTitle } from "./HomeStyle";
import { ProductsContext } from "../../ContextApi/ProductsContext";
import Header from "../../Header";

const Home = () => {
  const { products } = useContext(ProductsContext);
  return (
    <React.Fragment>
      <div className="wrap">
        <Header />
        <StyleProductHeader>
          <StyleCategoryTitle>Best Sellers</StyleCategoryTitle>
        </StyleProductHeader>
        <div className="grid-container">
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                // onAddToCart={products.handleAddToCart}
                // handleRating={products.handleRating}
                // handleSingleProduct={products.handleSingleProduct}
                product={product}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Home);
