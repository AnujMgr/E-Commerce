import React, { useContext } from "react";
import { StyleBtnContainer, StyleCardBtn } from "../CardStyle";
import { CartContext } from "../../../ContextApi/CartContext";

const ButtonContainer = props => {
  const { handleAddToCart } = useContext(CartContext);
  const { product, setVisibility } = props;
  return (
    <StyleBtnContainer>
      {product.size ? (
        <StyleCardBtn onClick={() => setVisibility("visible")}>
          <span className="icon-add_shopping_cart"></span>
        </StyleCardBtn>
      ) : (
        <StyleCardBtn onClick={() => handleAddToCart(product)}>
          <span className="icon-add_shopping_cart"></span>
        </StyleCardBtn>
      )}

      <StyleCardBtn to="./index">
        <span className="icon-favorite_outline"></span>
      </StyleCardBtn>
      <StyleCardBtn to="./index">
        <span className="icon-eye"></span>
      </StyleCardBtn>
    </StyleBtnContainer>
  );
};

export default React.memo(ButtonContainer);
