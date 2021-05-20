import React from "react";
import {
  StyleCartImg,
  StyleItemName,
  StyleCartItem,
  StyleCartPrice,
  StyleBrandTitle,
  StyleItemDetails,
  StylePriceContainer,
  StyleRemoveBtn,
} from "../StyleCart";

import { FormatNumber } from "../../../Components/Modules";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/cart/cart-actions";
import CartCounter from "../../../Components/Modules/CartCounter";

const CartItem = ({ product }) => {
  const { id, name, price, brand, image, discount } = product.cartItem;
  const { qty } = product;
  const dispatch = useDispatch();

  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }

  return (
    <StyleCartItem>
      <StyleItemDetails>
        <StyleCartImg src={image} alt={name} />
        <div>
          <div>
            <StyleItemName> {name} </StyleItemName>
            <StyleBrandTitle> {brand} </StyleBrandTitle>
          </div>
          <StyleRemoveBtn onClick={(e) => handleRemoveFromCart(id)}>
            REMOVE ITEM
          </StyleRemoveBtn>
        </div>
      </StyleItemDetails>

      <StylePriceContainer>
        <CartCounter id={id} qty={qty} height={"2em"} width={"2em"} />
        {Number(discount) === null || Number(discount) === 0 ? (
          <StyleCartPrice>{FormatNumber(price)}</StyleCartPrice>
        ) : (
          <StyleCartPrice>
            {FormatNumber(price - (price * discount) / 100)}
          </StyleCartPrice>
        )}
      </StylePriceContainer>
    </StyleCartItem>
  );
};

export default CartItem;
