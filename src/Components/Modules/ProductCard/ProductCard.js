import React from "react";
import CartCounter from "./CartCounter";
import {
  StyleCard,
  StyleCardBody,
  StyleCardDetail,
  StyleCardFooter,
  StyleAddToCartBtn,
} from "./StyleCard";

function ProductCard() {
  return (
    <StyleCard>
      <figure>
        <img src="https://picsum.photos/1200/800" />
      </figure>
      <StyleCardBody>
        <StyleCardDetail>
          <div>
            <h5>Apple</h5>
            <p>Iphone 10 XS sfsjflsa lsfasjdk</p>
          </div>
          <span>$ 200</span>
        </StyleCardDetail>
      </StyleCardBody>
      <StyleCardFooter>
        <CartCounter />
        <StyleAddToCartBtn>Add to Cart</StyleAddToCartBtn>
      </StyleCardFooter>
    </StyleCard>
  );
}

export default ProductCard;
