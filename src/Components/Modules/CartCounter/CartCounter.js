import React from "react";
import { StyleCartCounter } from "./StyleCartCounter";
import { BsPlus, BsDash } from "react-icons/bs";
import { modifyQty } from "../../../redux/cart/cart-actions";
import { useDispatch } from "react-redux";
import { StylePrimaryButton } from "../../../utils/CommonStyle";

function CartCounter({ id, qty, height, width, margin, padding }) {
  const dispatch = useDispatch();
  function handleCartIncrement(id, qty) {
    dispatch(modifyQty(id, qty));
  }
  function handleCartDecrement(id, qty) {
    dispatch(modifyQty(id, qty));
  }
  // const { cartItem, qty } = product[0];
  // console.log(qty);
  // console.log(product);

  return (
    <StyleCartCounter
      height={height}
      padding={padding}
      width={width}
      margin={margin}
    >
      <StylePrimaryButton
        border="0px"
        onClick={(e) => handleCartIncrement(id, qty + 1)}
      >
        <BsPlus size="1.5rem" />
      </StylePrimaryButton>
      <span>{qty}</span>
      {qty > 1 ? (
        <StylePrimaryButton
          border="0px"
          onClick={(e) => handleCartDecrement(id, qty - 1)}
        >
          <BsDash size="1.5rem" />
        </StylePrimaryButton>
      ) : (
        <StylePrimaryButton border="0px" disabled>
          <BsDash size="1.5rem" />
        </StylePrimaryButton>
      )}
    </StyleCartCounter>
  );
}

export default CartCounter;
