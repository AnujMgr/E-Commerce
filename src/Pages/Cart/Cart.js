import React from "react";
import {
  StyleOrderSummary,
  StyleCheckOutBtn,
  StyleDescription,
  StyleCartWrapper,
  StyleCartHeader,
  StyleHeader,
  StyleGridContainer,
  StyleWrapper,
  StyleEmptyCartContainer,
  StyleOrderSummaryItem,
  StyleFlexSB,
} from "./StyleCart";
import CartItem from "./Components/CartItem";
import { useSelector } from "react-redux";
import { FormatNumber } from "../../Components/Modules";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cart);

  function getTotal(cartItem) {
    let val = [];
    cartItem.map((product) => val.push(product.cartItem.price * product.qty));
    const total = val.reduce((a, b) => a + b, 0);
    return total;
  }
  return (
    <React.Fragment>
      {cartItem.length !== 0 ? (
        <StyleWrapper>
          <StyleCartHeader> My Shopping Bag </StyleCartHeader>
          <StyleGridContainer>
            <StyleCartWrapper>
              <StyleDescription>
                You Have {cartItem.length} items in your Cart.
              </StyleDescription>
              <StyleHeader>
                <p>ITEMS</p>
                <p>PRICE</p>
              </StyleHeader>

              {cartItem.map((product) => {
                return <CartItem key={product.cartItem.id} product={product} />;
              })}
            </StyleCartWrapper>
            <div>
              <StyleOrderSummary>
                <h2>Order Summary </h2>
                <StyleFlexSB>
                  <StyleDescription>Details</StyleDescription>
                  <StyleDescription>Price</StyleDescription>
                </StyleFlexSB>
                {cartItem.map((product) => (
                  <StyleOrderSummaryItem key={product.cartItem.id}>
                    <p>
                      {product.cartItem.name} ({product.qty})
                    </p>
                    <p>
                      <b>
                        {FormatNumber(product.cartItem.price * product.qty)}
                      </b>
                    </p>
                  </StyleOrderSummaryItem>
                ))}
                <hr />
                <StyleFlexSB>
                  <p>
                    <b>Total</b>
                  </p>
                  <p>
                    <b>{FormatNumber(getTotal(cartItem))}</b>
                  </p>
                </StyleFlexSB>
                {/* {context.handleOrderSummary()} */}
                <StyleCheckOutBtn> Checkout</StyleCheckOutBtn>
              </StyleOrderSummary>
            </div>
          </StyleGridContainer>
        </StyleWrapper>
      ) : (
        <StyleEmptyCartContainer>
          <img src="/images/empty_cart.png" alt="Cart is Empty" />
          <h2 className="center m-5-0">You Cart is Empty</h2>
        </StyleEmptyCartContainer>
      )}
    </React.Fragment>
  );
};

export default Cart;
