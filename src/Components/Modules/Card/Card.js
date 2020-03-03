import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FormatNumber } from "../../Modules";

import {
  StyledCard,
  StyleRibbon,
  StyleSpan,
  StyleCardImg,
  StyleBrandTitle,
  StyleItemName,
  StyleCardContent,
  StylePriceContainer,
  StyleNewPrice,
  StyleOldPrice,
  StyleBtnContainer,
  StyleCardBtn,
  StyleOptionOverlay,
  StyleOverlay
} from "./CardStyle";

import CreateStar from "../CreateStar";
import { CartContext } from "../../ContextApi/CartContext";
import { ProductsContext } from "../../ContextApi/ProductsContext";

const Card = () => {
  console.log("i am Card");
  const [visibility, setVisibility] = useState("hidden");
  const { handleAddToCart } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  const handleChange = () => {
    setVisibility("visible");
  };

  const hideOverlay = () => {
    setVisibility("hidden");
  };
  return (
    <React.Fragment>
      {products ? (
        <React.Fragment>
          {products.map(product => {
            return (
              <StyledCard width={16} key={product.id}>
                {Number(product.discount) === 0 || null ? null : (
                  <StyleRibbon>
                    <StyleSpan>{product.discount}% off</StyleSpan>
                  </StyleRibbon>
                )}
                <StyleBrandTitle>{product.brand}</StyleBrandTitle>

                <div className="pos-relative">
                  <StyleOverlay visibility={visibility} />
                  <Link to={"/product/" + product.slug}>
                    <StyleCardImg src={product.image} alt="{ title }" />
                  </Link>
                  {product.size ? (
                    <React.Fragment>
                      <StyleOptionOverlay visibility={visibility}>
                        <div className="p-0-5">
                          <div className="flex-sb">
                            <p className="small-text">Select a Size </p>
                            <span onClick={() => hideOverlay()}>
                              <i className="material-icons">close</i>
                            </span>
                          </div>

                          {product.size.map((size, index) => {
                            return (
                              <button
                                key={index}
                                onClick={() => {
                                  handleAddToCart(
                                    products,
                                    size,
                                    products.color ? products.color[1] : null
                                  );
                                  hideOverlay();
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
                </div>
                <Link to={"/product/" + product.slug}>
                  <StyleCardContent>
                    <StyleItemName> {product.title} </StyleItemName>

                    {CreateStar(product.star, product.id)}

                    <StylePriceContainer>
                      {Number(product.discount) === 0 ||
                      Number(product.discount) === null ? null : (
                        <StyleNewPrice>
                          {FormatNumber(
                            product.price -
                              (product.price * product.discount) / 100
                          )}
                        </StyleNewPrice>
                      )}
                      {Number(product.discount) === 0 || null ? (
                        <StyleNewPrice>
                          {FormatNumber(product.price)}
                        </StyleNewPrice>
                      ) : (
                        <StyleOldPrice>
                          {FormatNumber(product.price)}
                        </StyleOldPrice>
                      )}
                    </StylePriceContainer>
                  </StyleCardContent>
                </Link>
                <StyleBtnContainer>
                  {product.size ? (
                    <StyleCardBtn onClick={() => handleChange()}>
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
              </StyledCard>
            );
          })}
        </React.Fragment>
      ) : (
        <h6>Loading...</h6>
      )}
    </React.Fragment>
  );
};
export default React.memo(Card);
