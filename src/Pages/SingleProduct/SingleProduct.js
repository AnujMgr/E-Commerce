import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Api from "../../helper/api";
import CartCounter from "./CartCounter";
import { StyleAddToCartBtn } from "./StyleSingleProduct";
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

const SingleProduct = () => {
  const api = new Api();
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

  return !loading ? (
    <StyleWrapper>
      <StyleGridContainer>
        <StyleImageContainer>
          <img src="https://picsum.photos/1200/800" alt="Product Name" />
        </StyleImageContainer>
        <StyleDescriptionContainer>
          <StyleProductBrand>{product.brand}</StyleProductBrand>

          <StyleProductTitle>{product.name}</StyleProductTitle>
          <p>{product.description}</p>
          <StyleProductPrice>$ {product.price}</StyleProductPrice>
          <StyleFlex>
            {/* <CartCounter currentItem={1} /> */}
            <CartCounter currentItem={0} />
            <StyleAddToCartBtn>Add to Cart</StyleAddToCartBtn>
          </StyleFlex>
        </StyleDescriptionContainer>
      </StyleGridContainer>
    </StyleWrapper>
  ) : (
    <Loading />
  );
};

export default SingleProduct;

// <div className="wrap mx-auto">
//   {!isLoading ? (
//     <React.Fragment>
//       <div className="row">
//         <StyleImgContainer className="col-12 col-md-5">
//           <img className="img-fluid" src={product.image} alt="watch" />
//           <div className="d-flex justify-content-center">
//             <img
//               className="img-thumb"
//               src="/images/watch-2.png"
//               alt="watch"
//             />
//             <img
//               className="img-thumb"
//               src="/images/watch-2.png"
//               alt="watch"
//             />
//             <img
//               className="img-thumb"
//               src="/images/watch-2.png"
//               alt="watch"
//             />
//             <img
//               className="img-thumb"
//               src="/images/watch-2.png"
//               alt="watch"
//             />
//           </div>
//         </StyleImgContainer>

//         <StyleDetailsContainer className="col-12 col-md-7">
//           <BreadCrumb category={product.category} />
//           {/* <BreadCrumb>
//             <Link to="/">Home</Link>
//             <Link to={"/categories/" + product.category}>
//               {product.category}
//             </Link>
//             <Link to="./Categories">Phones</Link>
//           </BreadCrumb> */}
//           <StyleProductTitle> {product.title} </StyleProductTitle>

//           <p className="black-light">{product.brand}</p>
//           <StarRating
//             id={product.id}
//             star={product.star}
//             // handleRating={context.handleRating}
//           />

//           <p>OVERVIEW</p>

//           <p className="black-light small-text">
//             24k steel metal rose is perfect gold plated, it is very
//             beautiful and decorative piece . This will be perfect gift for
//             your loved ones and special people in valentine.
//           </p>

//           <div className="d-flex align-items-center border-bottom">
//             {Number(product.discount) === null ||
//             Number(product.discount) === 0 ? (
//               <StyleNewPrice> {FormatNumber(product.price)} </StyleNewPrice>
//             ) : (
//               <StyleNewPrice>
//                 {FormatNumber(
//                   product.price - (product.price * product.discount) / 100
//                 )}
//               </StyleNewPrice>
//             )}

//             {Number(product.discount) === null ||
//             Number(product.discount) === 0 ? null : (
//               <span>{FormatNumber(product.price)}</span>
//             )}
//           </div>

//           {/* <SizeOption
//             product={product}
//             handleSizeOptions={handleSizeOptions}
//             validateSizeSelection={validateSizeSelection}
//             handleIsSize={handleIsSize}
//           /> */}

//           {/* <ColorOption
//             product={product}
//             handleColorOptions={handleColorOptions}
//             validateColorSelection={validateColorSelection}
//             handleIsColor={handleIsColor}
//           /> */}

//           {validateColor === "notselected" ||
//           validateSize === "notselected" ? (
//             <Toast message=" Please, select the Options!!! " />
//           ) : null}

//           <div className="d-flex my-3">
//             <p className="mr-3 black-light font-weight-normal">
//               {" "}
//               QUANTITY:
//             </p>

//             <Counter id={product.id} noOfOrder={product.noOfOrder} />
//           </div>

//           <div className="d-flex mt-3">
//             {isSize && isColor ? (
//               <StyleBtn
//                 primary
//                 className="hoverable font-weight-normal mr-3"
//                 onClick={() => {
//                   validateSize === "valid" && validateColor === "valid"
//                     ? handleAddToCart(product, size, color)
//                     : validateSizeSelection("notselected");
//                 }}
//               >
//                 Add to Cart
//               </StyleBtn>
//             ) : null}

//             {isSize && !isColor ? (
//               <StyleBtn
//                 primary
//                 className="hoverable font-weight-normal"
//                 onClick={() => {
//                   validateSize === "valid"
//                     ? handleAddToCart(product, size, color)
//                     : validateSizeSelection("notselected");
//                 }}
//               >
//                 Add to Cart
//               </StyleBtn>
//             ) : null}

//             {!isSize && isColor ? (
//               <StyleBtn
//                 primary
//                 className="hoverable font-weight-normal mr-3"
//                 onClick={() => {
//                   validateColor === "valid"
//                     ? handleAddToCart(product, size, color)
//                     : validateColorSelection("notselected");
//                 }}
//               >
//                 Add to Cart
//               </StyleBtn>
//             ) : null}

//             {!isSize && !isColor ? (
//               <StyleBtn
//                 primary
//                 className="hoverable font-weight-normal mr-3"
//                 onClick={() => handleAddToCart(product, size, color)}
//               >
//                 Add to Cart
//               </StyleBtn>
//             ) : null}

//             <StyleBtn className="hoverable font-weight-normal">
//               Buy It Now
//             </StyleBtn>
//             <span className="icon-favorite_outline icon-font"></span>
//           </div>
//         </StyleDetailsContainer>
//       </div>

//       <StyleDescriptionContainer>
//         <h2 className="font-weight-normal">Description</h2>
//         <p className="small-text black-light font-weight-normal">
//           Shilajit is a sticky tar-like resinous exudate pressed out from
//           the layers of rock on cliffs of Himalayan mountains at an altitude
//           above 3000m. It is a decomposition of plant materials that is high
//           in humic substances and minerals. Shilajit in sanskrit means
//           “Conqueror of Mountains and Destroyer of Weakness”. It has been
//           used in Ayurvedic medicine for more than 5000 years and is the
//           special component of many ayurvedic formula. Shilajit resin is
//           extracted from the cliff rocks following traditional ayurvedic
//           principles. Fulvic and humic mineral complexes found in purified
//           Shilajit contains more than 85 vital minerals in bioactive, ionic
//           form that our body can utilize effectively. In ayurveda, it is
//           believed that there are no diseases that shilajit cannot cure in
//           the universe when it is combined with the right foods at right
//           time. Direction of use : 300 to 500mg of resin can be dissolved in
//           hot, non-chlorinated water, tea or warm milk. Also can be taken
//           with keto coffee. Precaution : Shilajit should never be mixed with
//           chlorinated water. Also be aware of fake shilajit or adulterated
//           shilajit that is available in the market for cheap price.
//           Authentic shilajit is rare, very labor intensive to collect and
//           prepare.
//         </p>
//       </StyleDescriptionContainer>

//       <StyleReviewContainer>
//         <h4>Ratings & Reviews of {product.title}</h4>

//         <div className="d-flex justify-content-between">
//           <p> Product Reviews </p>
//           <p> Sort: </p>
//         </div>

//         <StyleProductRating className="font-weight-normal">
//           4.4
//         </StyleProductRating>
//         <CreateStar star={3} />

//         <div className="d-flex justify-content-between">
//           <p>author</p>
//           <p>Comment</p>
//         </div>
//       </StyleReviewContainer>
//     </React.Fragment>
//   ) : (
//     <h6>Loading...</h6>
//   )}
// </div>