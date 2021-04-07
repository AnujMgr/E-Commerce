import React, { useContext } from "react";
import {
  StyleOrderSummary,
  StyleCheckOutBtn,
  StyleDescription,
  StyleCartWrapper,
  StyleCartHeader,
  StyleHeader,
} from "./CartStyle";
import CartItem from "./Components/CartItem";
import { CartContext } from "../../ContextApi/CartContext";

const Cart = () => {
  console.log("I am Cart");
  const { cartItem, handleRemoveCart } = useContext(CartContext);
  return (
    <React.Fragment>
      {cartItem.length !== 0 ? (
        <div className="flex-sb w-90 m-auto">
          <StyleCartWrapper>
            <StyleCartHeader> YOUR CART </StyleCartHeader>
            <StyleDescription>
              You Have {cartItem.length} items in your Cart.
            </StyleDescription>
            <StyleHeader>
              <p>ITEMS</p>
              <p>PRICE</p>
            </StyleHeader>

            {cartItem.map((product) => {
              return (
                <CartItem
                  key={product.id}
                  item={product}
                  removeCartItem={handleRemoveCart}
                  // handleCartIncrement={context.handleOrderIncrement}
                  // handleCartDecrement={context.handleOrderDecrement}
                />
              );
            })}
          </StyleCartWrapper>

          <StyleOrderSummary>
            <StyleCartHeader>ORDER SUMMARY </StyleCartHeader>
            <StyleDescription>Price Details</StyleDescription>
            {/* {context.handleOrderSummary()} */}
            <StyleCheckOutBtn className="hoverable"> Checkout</StyleCheckOutBtn>
          </StyleOrderSummary>
        </div>
      ) : (
        <h2 className="center m-5-0">You Cart is Empty</h2>
      )}
    </React.Fragment>
  );
};

export default Cart;
