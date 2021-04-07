import React, { useState, useEffect } from "react";
import { CartContext } from "../ContextApi/CartContext";

const CartProvider = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [cartItem, setCartItem] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    const cartProducts = localStorage.getItem("cart");
    const savedProducts = JSON.parse(cartProducts);
    if (cartProducts) {
      setCartItem(savedProducts);
    } else {
      setCartItem([]);
      localStorage.setItem("cart", JSON.stringify([]));
    }
    setLoading(false);
  }, []);

  const handleAddToCart = async (product) => {
    const newCartItems = product;
    setCartItem([
      ...cartItem.filter((item) => item.id !== newCartItems.id),
      newCartItems,
    ]);
  };

  const handleRemoveCart = async (id) => {
    await setCartItem([...cartItem.filter((product) => product.id !== id)]);
  };
  localStorage.setItem("cart", JSON.stringify(cartItem));

  // console.log(cartItem);
  return (
    <React.Fragment>
      {!isLoading ? (
        <CartContext.Provider
          value={{ cartItem, handleAddToCart, handleRemoveCart }}
        >
          {props.children}
        </CartContext.Provider>
      ) : (
        <h6>Loading....</h6>
      )}
    </React.Fragment>
  );
};

export default CartProvider;
