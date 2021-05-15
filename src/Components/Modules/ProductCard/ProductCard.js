import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../redux/cart/cart-actions";
import CartCounter from "./CartCounter";
import {
  StyleCard,
  StyleCardBody,
  StyleCardDetail,
  StyleCardFooter,
  StyleAddToCartBtn,
} from "./StyleCard";

function ProductCard({ product }) {
  const { name, image, brand, price } = product;
  const dispatch = useDispatch();
  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }
  return (
    <StyleCard>
      <Link to="/">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <StyleCardBody>
          <StyleCardDetail>
            <div>
              <h5>{brand}</h5>
              <p>{name}</p>
            </div>
            <span>$ {price}</span>
          </StyleCardDetail>
        </StyleCardBody>
      </Link>
      <StyleCardFooter>
        <CartCounter />
        <StyleAddToCartBtn onClick={(e) => handleAddToCart(product)}>
          Add to Cart
        </StyleAddToCartBtn>
      </StyleCardFooter>
    </StyleCard>
  );
}

export default ProductCard;
