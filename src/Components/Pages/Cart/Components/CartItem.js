import React from "react";
import {
  StyleCartImg,
  StyleItemName,
  StyleCartItem,
  StyleCartPrice,
  StyleBrandTitle,
  StyleItemDetails,
  StylePriceContainer
} from "../CartStyle";

import {
  StyleRibbon,
  StyleSpan,
  StyleOldPrice
} from "../../../Modules/Card/CardStyle";

import { FormatNumber, Counter } from "../../../Modules";
const CartItem = props => {
  const { id, title, price, brand, image, discount, noOfOrder } = props.item;
  const { handleCartDecrement, handleCartIncrement } = props;

  return (
    <React.Fragment>
      <StyleCartItem>
        {Number(discount) === null || Number(discount) === 0 ? null : (
          <StyleRibbon>
            <StyleSpan>{discount}% off</StyleSpan>
          </StyleRibbon>
        )}

        <StyleItemDetails>
          <StyleCartImg src={image} alt={title} />
          <div className="m-0-2">
            <StyleBrandTitle> {brand} </StyleBrandTitle>
            <StyleItemName> {title} </StyleItemName>

            <div className="flex">
              {props.item.size ? (
                <p className="small-text m-r-10">SIZE: {props.item.size} </p>
              ) : null}
              {props.item.color ? (
                <p className="small-text"> Color: {props.item.color}</p>
              ) : null}
            </div>
          </div>
        </StyleItemDetails>

        <Counter
          id={id}
          noOfOrder={noOfOrder}
          handleCartDecrement={handleCartDecrement}
          handleCartIncrement={handleCartIncrement}
        />

        <StylePriceContainer>
          {Number(discount) === null || Number(discount) === 0 ? (
            <StyleCartPrice>{FormatNumber(price)}</StyleCartPrice>
          ) : (
            <StyleCartPrice>
              {FormatNumber(price - (price * discount) / 100)}
            </StyleCartPrice>
          )}

          {Number(discount) === null || Number(discount) === 0 ? null : (
            <StyleOldPrice> {FormatNumber(price)}</StyleOldPrice>
          )}

          <button
            className="btn-danger small-text m-l-auto"
            onClick={() => props.removeCartItem(id)}
          >
            Delete <span> | </span> X
          </button>
        </StylePriceContainer>
      </StyleCartItem>
    </React.Fragment>
  );
};

export default CartItem;
