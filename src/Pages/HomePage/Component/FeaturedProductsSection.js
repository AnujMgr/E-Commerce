import React from "react";
import {
  StyleFeaturedProductsContainer,
  StyleFeaturedProductsGrid,
  StyleFeaturedHeader,
  StyleFeaturedHeaderItem,
} from "../HomeStyle/HomeStyle";

function FeaturedProductsSection() {
  return (
    <StyleFeaturedProductsContainer>
      <h1>Featured Products Section</h1>
      <StyleFeaturedProductsGrid>
        <StyleFeaturedHeader>
          <StyleFeaturedHeaderItem>Header</StyleFeaturedHeaderItem>
          <StyleFeaturedHeaderItem>Header</StyleFeaturedHeaderItem>
          <StyleFeaturedHeaderItem>Header</StyleFeaturedHeaderItem>
        </StyleFeaturedHeader>
      </StyleFeaturedProductsGrid>
    </StyleFeaturedProductsContainer>
  );
}

export default FeaturedProductsSection;
