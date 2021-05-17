import React from "react";
import { StyleCartCounter, StyleCounterBtn } from "./StyleSingleProduct";
import { BsPlus, BsDash } from "react-icons/bs";

function CartCounter({ currentItem }) {
  return (
    <StyleCartCounter>
      <StyleCounterBtn border="0px ">
        <BsPlus size="1.5rem" />
      </StyleCounterBtn>
      <span>{currentItem}</span>
      <StyleCounterBtn border="0px">
        <BsDash size="1.5rem" />
      </StyleCounterBtn>
    </StyleCartCounter>
  );
}

export default CartCounter;
