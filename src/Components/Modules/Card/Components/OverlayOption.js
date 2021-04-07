import React, { useContext } from "react";
import { StyleOptionOverlay } from "../CardStyle";
import { CartContext } from "../../../ContextApi/CartContext";

const OverlayOption = props => {
  const { handleAddToCart } = useContext(CartContext);
  const { product, visibility, setVisibility } = props;
  return (
    <React.Fragment>
      {product.size ? (
        <React.Fragment>
          <StyleOptionOverlay visibility={visibility}>
            <div className="p-0-5">
              <div className="flex-sb">
                <p className="small-text">Select a Size </p>
                <span onClick={() => setVisibility("hidden")}>
                  <i className="material-icons">close</i>
                </span>
              </div>

              {product.size.map((size, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => {
                      handleAddToCart(
                        product,
                        size,
                        product.color ? product.color[1] : null
                      );
                      setVisibility("hidden");
                    }}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </StyleOptionOverlay>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default OverlayOption;
