import React from "react";
import { StyleCartCounter, StyleCounterBtn } from "./StyleSingleProduct";
import { BsPlus, BsDash } from "react-icons/bs";
import { modifyQty } from "../../redux/cart/cart-actions";
import { useDispatch } from "react-redux";

function CartCounter({ product }) {
  const dispatch = useDispatch();
  function handleCartIncrement(id, qty) {
    dispatch(modifyQty(id, qty));
  }
  function handleCartDecrement(id, qty) {
    dispatch(modifyQty(id, qty));
  }
  const { cartItem, qty } = product[0];

  return (
    <StyleCartCounter>
      <StyleCounterBtn
        border="0px"
        onClick={(e) => handleCartIncrement(cartItem.id, qty + 1)}
      >
        <BsPlus size="1.5rem" />
      </StyleCounterBtn>
      <span>{qty}</span>
      {qty > 0 ? (
        <StyleCounterBtn
          border="0px"
          onClick={(e) => handleCartDecrement(cartItem.id, qty - 1)}
        >
          <BsDash size="1.5rem" />
        </StyleCounterBtn>
      ) : (
        <StyleCounterBtn border="0px" disabled>
          <BsDash size="1.5rem" />
        </StyleCounterBtn>
      )}
    </StyleCartCounter>
  );
}

export default CartCounter;
