import React from "react";
import { StyleCartCounter } from "./StyleCard";
import { BsPlus, BsDash } from "react-icons/bs";

function CartCounter() {
  return (
    <StyleCartCounter>
      <button>
        <BsPlus />
      </button>
      <span>2</span>
      <button>
        <BsDash />
      </button>
    </StyleCartCounter>
  );
}

export default CartCounter;
