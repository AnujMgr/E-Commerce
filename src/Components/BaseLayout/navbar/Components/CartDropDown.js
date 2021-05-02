import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  StyleCartCount,
  StyleNavCart,
  StyleCartDropDown,
  StyleNavCartImg,
  StyleCartContainer,
} from "../NavBarStyle";
import { FormatNumber } from "../../../Modules";
import { CartContext } from "../../../ContextApi/CartContext";
import { BsBag } from "react-icons/bs";

const CartDropdown = () => {
  console.log("i am dropdown");
  const { cartItem } = useContext(CartContext);
  return (
    <React.Fragment>
      {cartItem ? (
        <StyleNavCart>
          <Link to="/cart">
            <div style={{ marginRight: "0.5em" }}>
              <BsBag className="large-font" />
              {cartItem.length === 0 ? null : (
                <StyleCartCount> {cartItem.length} </StyleCartCount>
              )}
              <StyleCartDropDown>
                <p className="small-text center">
                  YOUR CART ({cartItem.length} ITEMS)
                </p>
                <StyleCartContainer>
                  {cartItem.map((product, i) => {
                    return (
                      <div className="flex-sb p-5 bottom-border" key={i}>
                        <StyleNavCartImg src={product.image} />
                        <div className="w-40 center">
                          <p className="small-text"> {product.title} </p>
                        </div>
                        <p className="small-text">
                          {FormatNumber(product.price)}
                        </p>
                      </div>
                    );
                  })}
                </StyleCartContainer>
                {/* if(cartItem.length !== 0) return(
              <div className="flex-sb border-tb p-rl-3">
                <p className="small-text"> PRICE</p>
                <p className="small-text">
                  {FormatNumber(context.handleCartTotal())}
                </p>
              </div>
              ) */}
              </StyleCartDropDown>
            </div>
          </Link>
        </StyleNavCart>
      ) : (
        <Link to="/cart">
          <span className="icon-add_shopping_cart large-font p-15" />
        </Link>
      )}
    </React.Fragment>
  );
};

export default React.memo(CartDropdown);
