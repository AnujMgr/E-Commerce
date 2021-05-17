import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../../redux/cart/cart-actions";
import CartCounter from "./CartCounter";
import {
  StyleCard,
  StyleCardBody,
  StyleCardDetail,
  StyleCardFooter,
  StyleAddToCartBtn,
} from "./StyleCard";

function ProductCard({ product }) {
  const { id, name, image, brand, price, slug } = product;
  const dispatch = useDispatch();

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(id));
  }
  const cartItem = useSelector((state) => state.cart.cart);

  const isInCart =
    cartItem.filter((cart) => cart.cartItem.id === id).length > 0;

  return (
    <StyleCard>
      <Link to={`/product/${slug}`}>
        <figure>
          <img src={image} alt={name} />
        </figure>
        <StyleCardBody>
          <StyleCardDetail>
            <div>
              <h5>{name}</h5>
              <p>{brand}</p>
            </div>
            <span>$ {price}</span>
          </StyleCardDetail>
        </StyleCardBody>
      </Link>
      <StyleCardFooter>
        {isInCart ? (
          <>
            <CartCounter />
            <StyleAddToCartBtn onClick={(e) => handleRemoveFromCart(id)}>
              Remove From Cart
            </StyleAddToCartBtn>
          </>
        ) : (
          <StyleAddToCartBtn onClick={(e) => handleAddToCart(product)}>
            Add to Cart
          </StyleAddToCartBtn>
        )}
      </StyleCardFooter>
    </StyleCard>
  );
}

export default ProductCard;
