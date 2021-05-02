import React, { useState } from "react";
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
  StyleOverlay,
} from "./CardStyle";

import CreateStar from "../CreateStar";
import ButtonContainer from "./Components/ButtonContainer";
import OverlayOption from "./Components/OverlayOption";

const Card = (props) => {
  console.log("i am Card");
  const [visibility, setVisibility] = useState("hidden");
  const { product } = props;

  return (
    <React.Fragment>
      <StyledCard key={product.id}>
        {/* Discount Ribbon */}
        {Number(product.discount) === 0 || null ? null : (
          <StyleRibbon>
            <StyleSpan>{product.discount}% off</StyleSpan>
          </StyleRibbon>
        )}
        {/* Brand Title */}
        <StyleBrandTitle>{product.brand}</StyleBrandTitle>

        <div className="pos-relative">
          {/* Add to Cart Options overlay */}
          <StyleOverlay visibility={visibility} />
          {/* Card Image */}
          <Link to={"/product/" + product.slug}>
            <StyleCardImg src={product.image} alt="{ title }" />
          </Link>

          <OverlayOption
            product={product}
            visibility={visibility}
            setVisibility={setVisibility}
          />
        </div>

        <Link to={"/product/" + product.slug}>
          <StyleCardContent>
            <StyleItemName> {product.title} </StyleItemName>

            {<CreateStar star={product.star} />}
            {/* Price Container */}
            <StylePriceContainer>
              {Number(product.discount) === 0 ||
              Number(product.discount) === null ? null : (
                <StyleNewPrice>
                  {FormatNumber(
                    product.price - (product.price * product.discount) / 100
                  )}
                </StyleNewPrice>
              )}
              {Number(product.discount) === 0 || null ? (
                <StyleNewPrice>{FormatNumber(product.price)}</StyleNewPrice>
              ) : (
                <StyleOldPrice>{FormatNumber(product.price)}</StyleOldPrice>
              )}
            </StylePriceContainer>
          </StyleCardContent>
        </Link>
        {/* Buttons Container i.e Add to cart/view/favourite */}
        <ButtonContainer product={product} setVisibility={setVisibility} />
      </StyledCard>
    </React.Fragment>
  );
};

export default React.memo(Card);
