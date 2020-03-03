import React, { useState, useEffect } from "react";
import { CartContext } from "../ContextApi/CartContext";

const CartProvider = props => {
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
  }, []);

  const handleAddToCart = async product => {
    const newCartItems = product;
    setCartItem([
      ...cartItem.filter(item => item.id !== newCartItems.id),
      newCartItems
    ]);
  };
  localStorage.setItem("cart", JSON.stringify(cartItem));

  // console.log(cartItem);
  return (
    <CartContext.Provider value={{ cartItem, handleAddToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
// cartItem
//   ? await setCartItem([
//       ...cartItem.filter(item => item.id !== newCartItems.id),
//       newCartItems
//     ])
//   : await setCartItem(newCartItems);
// if((isStateLoaded && isCategoryLoaded && isPostLoaded) == true)

// import React, { Component } from "react";
// import { CartContext } from "./CartContext";

// class CartProvider extends Component {
//   state = {
//     cartProducts: []
//   };

//   componentDidMount = () => {
//     const cartProducts = localStorage.getItem("cartProducts");
//     if (cartProducts) {
//       const savedProducts = JSON.parse(cartProducts);
//       this.setState({ cartProducts: savedProducts });
//     }
//   };

//   handleAddToCart = product => {
//     const newCartItems = {
//       id: product.id,
//       price: product.price,
//       image: product.image
//     };
//     this.setState({
//       cartProducts: [
//         ...this.state.cartProducts.filter(item => item.id !== newCartItems.id),
//         newCartItems
//       ]
//     });
//     localStorage.setItem(
//       "cartProducts",
//       JSON.stringify(this.state.cartProducts)
//     );
//     console.log(localStorage.getItem("cartProducts"));
//   };

//   render() {
//     return (
//       <CartContext.Provider
//         value={{
//           cartProducts: this.state.cartProducts,
//           handleAddToCart: this.handleAddToCart
//           // removeCartItem,
//           // handleCartTotal,
//           // handleOrderSummary
//         }}
//       >
//         {this.props.children}
//       </CartContext.Provider>
//     );
//   }
// }
// //
// // if((isStateLoaded && isCategoryLoaded && isPostLoaded) == true)

// export { CartProvider };
