import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Api from "../../helper/api";
import CartCounter from "../../Components/Modules/CartCounter";
import {
  StyleDescriptionContainer,
  StyleProductTitle,
  StyleWrapper,
  StyleGridContainer,
  StyleImageContainer,
  StyleProductPrice,
  StyleProductBrand,
  StyleFlex,
} from "./StyleSingleProduct";
import Loading from "../../Components/Modules/Loading";
import { addToCart, removeFromCart } from "../../redux/cart/cart-actions";
import { useDispatch, useSelector } from "react-redux";
import { StarRating } from "../../Components/Modules";
import { StylePrimaryButton } from "../../utils/CommonStyle";

const SingleProduct = () => {
  const api = new Api();
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = () => {
      api
        .getCurrentProduct(slug)
        .then((response) => {
          setProduct(...response.data);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fetchProduct(slug);
  }, [slug]);

  const cartItem = useSelector((state) => state.cart.cart);

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }

  return !loading ? (
    <StyleWrapper>
      <StyleGridContainer>
        <StyleImageContainer>
          <img src="https://picsum.photos/1200/800" alt="Product Name" />
        </StyleImageContainer>
        <StyleDescriptionContainer>
          <StyleProductBrand>{product.brand}</StyleProductBrand>
          <StarRating star={product.star} />
          <StyleProductTitle>{product.name}</StyleProductTitle>
          <p>{product.description}</p>
          <StyleProductPrice>$ {product.price}</StyleProductPrice>
          <StyleFlex>
            {/* <CartCounter currentItem={1} /> */}
            {cartItem.filter((cart) => cart.cartItem.id === product.id).length >
            0 ? (
              <>
                <CartCounter
                  id={product.id}
                  padding="0"
                  qty={
                    cartItem.filter(
                      (cart) => cart.cartItem.id === product.id
                    )[0].qty
                  }
                  margin={"0 1em 0 0"}
                />
                <StylePrimaryButton
                  padding="0rem 3.5rem"
                  margin="0"
                  onClick={(e) => handleRemoveFromCart(product.id)}
                >
                  Remove From Cart
                </StylePrimaryButton>
              </>
            ) : (
              <StylePrimaryButton
                padding="1.2em 5em"
                margin="0"
                onClick={(e) => handleAddToCart(product)}
              >
                Add to Cart
              </StylePrimaryButton>
            )}
          </StyleFlex>
        </StyleDescriptionContainer>
      </StyleGridContainer>
    </StyleWrapper>
  ) : (
    <Loading />
  );
};

export default SingleProduct;
