import React from "react";
import { StyleBtnContainer, StyleCardBtn } from "../StyleCard";
// import { CartContext } from "../../../ContextApi/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addToCart } from "../../../../redux/cart/cart-actions";
// import { connect } from "react-redux";
import { useDispatch } from "react-redux";

const ButtonContainer = ({ product, setVisibility }) => {
  const dispatch = useDispatch();
  return (
    <StyleBtnContainer>
      {/* {product.size ? (
        <StyleCardBtn onClick={() => setVisibility("visible")}>
          <AiOutlineShoppingCart className="large-font" />
        </StyleCardBtn>
      ) : ( */}
      <StyleCardBtn onClick={() => dispatch(addToCart(product.id))}>
        <AiOutlineShoppingCart className="large-font" />
      </StyleCardBtn>
      {/* )} */}

      <StyleCardBtn to="./index">
        <span className="icon-favorite_outline"></span>
      </StyleCardBtn>
      <StyleCardBtn to="./index">
        <span className="icon-eye"></span>
      </StyleCardBtn>
    </StyleBtnContainer>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (id) => dispatch(addToCart(id)),
//   };
// };

// export default connect(null, mapDispatchToProps)(ButtonContainer);
export default ButtonContainer;
