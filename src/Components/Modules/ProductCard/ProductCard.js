import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../../redux/cart/cart-actions";
import { StylePrimaryButton } from "../../../utils/CommonStyle";
import CartCounter from "../CartCounter";
import {
  StyleCard,
  StyleCardBody,
  StyleCardDetail,
  StyleCardFooter,
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
            <CartCounter
              id={id}
              qty={cartItem.filter((cart) => cart.cartItem.id === id)[0].qty}
              height={"2em"}
              width={"2em"}
              margin={"0 0.5em 0 0"}
              padding="0"
            />
            <StylePrimaryButton
              width="100%"
              padding="0.7em 0em"
              onClick={(e) => handleRemoveFromCart(id)}
            >
              Remove From Cart
            </StylePrimaryButton>
          </>
        ) : (
          <StylePrimaryButton
            width="100%"
            padding="0.7em 2em"
            onClick={(e) => handleAddToCart(product)}
          >
            Add to Cart
          </StylePrimaryButton>
        )}
      </StyleCardFooter>
    </StyleCard>
  );
}

export default ProductCard;
