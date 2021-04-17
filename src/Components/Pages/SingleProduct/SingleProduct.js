import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BreadCrumb } from "../Categories/CategoryStyle";
import {
  StyleDescriptionContainer,
  StyleDetailsContainer,
  StyleReviewContainer,
  StyleProductRating,
  StyleProductTitle,
  StyleImgContainer,
  StyleOldPrice,
  StyleNewPrice,
  StyleBtn,
} from "./SingleProductStyle";
import {
  Counter,
  StarRating,
  CreateStar,
  ColorOption,
  SizeOption,
  FormatNumber,
  Toast,
} from "../../Modules";

import { ProductsContext } from "../../ContextApi/ProductsContext";
import { CartContext } from "../../ContextApi/CartContext";

const SingleProduct = (props) => {
  const { products } = useContext(ProductsContext);
  const { handleAddToCart } = useContext(CartContext);

  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [validateColor, setValidColor] = useState("invalid");
  const [validateSize, setValidSize] = useState(null);
  const [isSize, setIsSize] = useState(null);
  const [isColor, setIsColor] = useState(null);

  const handleSizeOptions = (size) => {
    setSize(size);
  };

  const handleColorOptions = (color) => {
    setColor(color);
  };
  //Validates if the Option is Checked
  const validateSizeSelection = (remark) => {
    setValidSize(remark);
  };

  //Validates if the Option is Checked
  const validateColorSelection = (remark) => {
    setValidColor(remark);
  };
  //Check Size option exist or not
  const handleIsSize = (bool) => {
    setIsSize(bool);
  };

  //Check Color option exist or not
  const handleIsColor = (bool) => {
    setIsColor(bool);
  };

  useEffect(() => {
    const { productSlug } = props;
    setProduct(...products.filter((product) => product.slug === productSlug));
    setLoading(false);
  }, [products, props]);

  return (
    <div className="w-94 m-auto">
      {!isLoading ? (
        <React.Fragment>
          <div className="flex-sb m-auto">
            <StyleImgContainer>
              <img className="img-fluid" src={product.image} alt="watch" />
              <div className="flex-sb">
                <img
                  className="img-thumb"
                  src="/images/watch-2.png"
                  alt="watch"
                />
                <img
                  className="img-thumb"
                  src="/images/watch-2.png"
                  alt="watch"
                />
                <img
                  className="img-thumb"
                  src="/images/watch-2.png"
                  alt="watch"
                />
                <img
                  className="img-thumb"
                  src="/images/watch-2.png"
                  alt="watch"
                />
              </div>
            </StyleImgContainer>

            <StyleDetailsContainer>
              <BreadCrumb>
                <Link to="/">Home</Link>
                <Link to={"/categories/" + product.category}>
                  {product.category}
                </Link>
                <Link to="./Categories">Phones</Link>
              </BreadCrumb>
              <StyleProductTitle> {product.title} </StyleProductTitle>

              <p className="black-light">{product.brand}</p>
              <StarRating
                id={product.id}
                star={product.star}
                // handleRating={context.handleRating}
              />

              <p>OVERVIEW</p>

              <p className="black-light small-text">
                24k steel metal rose is perfect gold plated, it is very
                beautiful and decorative piece . This will be perfect gift for
                your loved ones and special people in valentine.
              </p>

              <div className="flex bottom-border">
                {Number(product.discount) === null ||
                Number(product.discount) === 0 ? (
                  <StyleNewPrice> {FormatNumber(product.price)} </StyleNewPrice>
                ) : (
                  <StyleNewPrice>
                    {FormatNumber(
                      product.price - (product.price * product.discount) / 100
                    )}
                  </StyleNewPrice>
                )}

                {Number(product.discount) === null ||
                Number(product.discount) === 0 ? null : (
                  <StyleOldPrice>{FormatNumber(product.price)}</StyleOldPrice>
                )}
              </div>

              {/* <SizeOption
                product={product}
                handleSizeOptions={handleSizeOptions}
                validateSizeSelection={validateSizeSelection}
                handleIsSize={handleIsSize}
              /> */}

              {/* <ColorOption
                product={product}
                handleColorOptions={handleColorOptions}
                validateColorSelection={validateColorSelection}
                handleIsColor={handleIsColor}
              /> */}

              {validateColor === "notselected" ||
              validateSize === "notselected" ? (
                <Toast message=" Please, select the Options!!! " />
              ) : null}

              <div className="flex m-5-0">
                <p className="m-r-5 black-light weight-300"> QUANTITY:</p>

                <Counter id={product.id} noOfOrder={product.noOfOrder} />
              </div>

              <div className="flex-sb w-60 m-6-0">
                {isSize && isColor ? (
                  <StyleBtn
                    primary
                    className="hoverable weight-300"
                    onClick={() => {
                      validateSize === "valid" && validateColor === "valid"
                        ? handleAddToCart(product, size, color)
                        : validateSizeSelection("notselected");
                    }}
                  >
                    Add to Cart
                  </StyleBtn>
                ) : null}

                {isSize && !isColor ? (
                  <StyleBtn
                    primary
                    className="hoverable weight-300"
                    onClick={() => {
                      validateSize === "valid"
                        ? handleAddToCart(product, size, color)
                        : validateSizeSelection("notselected");
                    }}
                  >
                    Add to Cart
                  </StyleBtn>
                ) : null}

                {!isSize && isColor ? (
                  <StyleBtn
                    primary
                    className="hoverable weight-300"
                    onClick={() => {
                      validateColor === "valid"
                        ? handleAddToCart(product, size, color)
                        : validateColorSelection("notselected");
                    }}
                  >
                    Add to Cart
                  </StyleBtn>
                ) : null}

                {!isSize && !isColor ? (
                  <StyleBtn
                    primary
                    className="hoverable weight-300"
                    onClick={() => handleAddToCart(product, size, color)}
                  >
                    Add to Cart
                  </StyleBtn>
                ) : null}

                <StyleBtn className="hoverable weight-300">Buy It Now</StyleBtn>
                <span className="icon-favorite_outline icon-font"></span>
              </div>
            </StyleDetailsContainer>
          </div>

          <StyleDescriptionContainer>
            <h4 className="weight-300">Description</h4>
            <p className="small-text black-light weight-300 ">
              Shilajit is a sticky tar-like resinous exudate pressed out from
              the layers of rock on cliffs of Himalayan mountains at an altitude
              above 3000m. It is a decomposition of plant materials that is high
              in humic substances and minerals. Shilajit in sanskrit means
              “Conqueror of Mountains and Destroyer of Weakness”. It has been
              used in Ayurvedic medicine for more than 5000 years and is the
              special component of many ayurvedic formula. Shilajit resin is
              extracted from the cliff rocks following traditional ayurvedic
              principles. Fulvic and humic mineral complexes found in purified
              Shilajit contains more than 85 vital minerals in bioactive, ionic
              form that our body can utilize effectively. In ayurveda, it is
              believed that there are no diseases that shilajit cannot cure in
              the universe when it is combined with the right foods at right
              time. Direction of use : 300 to 500mg of resin can be dissolved in
              hot, non-chlorinated water, tea or warm milk. Also can be taken
              with keto coffee. Precaution : Shilajit should never be mixed with
              chlorinated water. Also be aware of fake shilajit or adulterated
              shilajit that is available in the market for cheap price.
              Authentic shilajit is rare, very labor intensive to collect and
              prepare.
            </p>
          </StyleDescriptionContainer>

          <StyleReviewContainer>
            <h4>Ratings & Reviews of {product.title}</h4>

            <div className="flex-sb">
              <p> Product Reviews </p>
              <p> Sort: </p>
            </div>

            <StyleProductRating className="weight-100 m-6-0">
              4.4
            </StyleProductRating>
            <CreateStar star={3} />

            <div className="flex-sb">
              <p>author</p>
              <p>Comment</p>
            </div>
          </StyleReviewContainer>
        </React.Fragment>
      ) : (
        <h6>Loading...</h6>
      )}
    </div>
  );
};

export default SingleProduct;
