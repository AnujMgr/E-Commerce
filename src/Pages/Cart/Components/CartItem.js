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

// import {
//   StyleRibbon,
//   StyleSpan,
//   StyleOldPrice
// } from "../../../Modules/Card/CardStyle";

import { FormatNumber, Counter } from "../../../Components/Modules";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/cart/cart-actions";
const CartItem = ({ product, noOfItem }) => {
  const { id, name, price, brand, image, discount, noOfOrder } = product;
  const { handleCartDecrement, handleCartIncrement } = noOfItem;
  const dispatch = useDispatch();

  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }

  return (
    <React.Fragment>
      <StyleCartItem>
        {/* {Number(discount) === null || Number(discount) === 0 ? null : (
          <StyleRibbon>
            <StyleSpan>{discount}% off</StyleSpan>
          </StyleRibbon>
        )} */}

        <StyleItemDetails>
          <StyleCartImg src={image} alt={name} />
          <div>
            <div>
              <StyleBrandTitle> {brand} </StyleBrandTitle>
              <StyleItemName> {name} </StyleItemName>
            </div>
            <StyleRemoveBtn onClick={(e) => handleRemoveFromCart(id)}>
              REMOVE ITEM
            </StyleRemoveBtn>

            {/* <div className="flex">
              {props.item.size ? (
                <p className="small-text m-r-10">SIZE: {props.item.size} </p>
              ) : null}
              {props.item.color ? (
                <p className="small-text"> Color: {props.item.color}</p>
              ) : null}
            </div> */}
          </div>
        </StyleItemDetails>

        <StylePriceContainer>
          <Counter
            id={id}
            noOfOrder={noOfOrder}
            handleCartDecrement={handleCartDecrement}
            handleCartIncrement={handleCartIncrement}
          />
          {Number(discount) === null || Number(discount) === 0 ? (
            <StyleCartPrice>{FormatNumber(price)}</StyleCartPrice>
          ) : (
            <StyleCartPrice>
              {FormatNumber(price - (price * discount) / 100)}
            </StyleCartPrice>
          )}

          {/* {Number(discount) === null || Number(discount) === 0 ? null : (
            <StyleOldPrice> {FormatNumber(price)}</StyleOldPrice>
          )} */}

          {/* <button
            className="btn-danger small-text m-l-auto"
            // onClick={() => props.removeCartItem(id)}
          >
            Delete <span> | </span> X
          </button> */}
        </StylePriceContainer>
      </StyleCartItem>
    </React.Fragment>
  );
};

export default CartItem;
