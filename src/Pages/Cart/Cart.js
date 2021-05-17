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
} from "./StyleCart";
import CartItem from "./Components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  // console.log(cartItem);
  // const { cartItem, handleRemoveCart } = useContext(CartContext);
  const cartItem = useSelector((state) => state.cart.cart);

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
                return (
                  <CartItem
                    key={product.cartItem.id}
                    product={product.cartItem}
                    noOfItem={product.qty}
                    // removeCartItem={handleRemoveCart}
                    // handleCartIncrement={context.handleOrderIncrement}
                    // handleCartDecrement={context.handleOrderDecrement}
                  />
                );
              })}
            </StyleCartWrapper>
            <div>
              <StyleOrderSummary>
                <StyleCartHeader>Order Summary </StyleCartHeader>
                <StyleDescription>Price Details</StyleDescription>
                {/* {context.handleOrderSummary()} */}
                <StyleCheckOutBtn className="hoverable">
                  {" "}
                  Checkout
                </StyleCheckOutBtn>
              </StyleOrderSummary>
            </div>
          </StyleGridContainer>
        </StyleWrapper>
      ) : (
        <h2 className="center m-5-0">You Cart is Empty</h2>
      )}
    </React.Fragment>
  );
};

export default Cart;