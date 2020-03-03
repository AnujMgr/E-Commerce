import React from "react";

import Card from "../../Modules/Card";
import {
  StyleItemsContainer,
  StyleProductHeader,
  StyleCategoryTitle
} from "./HomeStyle";
// import CartProvider from "../../ContextApi/CartProvider";
import ProductsProvider from "../../ContextApi/ProductsProvider";

const Home = props => {
  console.log("i am home");
  return (
    <React.Fragment>
      <StyleItemsContainer>
        <StyleProductHeader>
          <StyleCategoryTitle>Best Sellers</StyleCategoryTitle>
        </StyleProductHeader>
        <ProductsProvider>
          <Card
          // key={product.id}
          // onAddToCart={context.handleAddToCart}
          // handleRating={context.handleRating}
          // handleSingleProduct={context.handleSingleProduct}
          // products={product}
          />
        </ProductsProvider>
      </StyleItemsContainer>
    </React.Fragment>
  );
};

export default React.memo(Home);
