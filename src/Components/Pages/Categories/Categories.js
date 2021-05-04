import React, { useContext, useState, useEffect } from "react";

import { Card, BreadCrumb, Checkbox, SortOption } from "../../Modules";
import {
  StyleFilterContainer,
  StyleItemsContainer,
  StyleFilterTitle,
  StyleCategoryTitle,
  StyleInputFilter,
} from "./CategoryStyle";

// import { AppConsumer } from "../../context";
import { ProductsContext } from "../../ContextApi/ProductsContext";

const Categories = (props) => {
  const { products } = useContext(ProductsContext);
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const brands = [];
  const map = new Map();

  const { categorySlug } = props;
  useEffect(() => {
    setProduct([
      ...products.filter((product) => product.category === categorySlug),
    ]);
    setLoading(false);
  }, [products, categorySlug]);

  for (const item of products) {
    if (!map.has(item.brand)) {
      map.set(item.brand, true); // set any value to Map
      brands.push({
        id: item.id,
        name: item.brand,
        star: item.star,
        price: item.price,
      });
    }
  }
  console.log(product);
  return (
    <React.Fragment>
      {!isLoading ? (
        <React.Fragment>
          <BreadCrumb category={product.category} />

          <div className="row">
            <StyleFilterContainer className="col-12 col-md-2">
              <div className="bottom-border">
                <h5 className="medium-text m-6-0 weight-300">FILTERS</h5>
              </div>

              <StyleFilterTitle> BRAND </StyleFilterTitle>

              <div className="border-bottom p-b-10">
                {brands.map((brand) => (
                  <div key={brand.id}>
                    <Checkbox name={brand.name} brandId={brand.id} />
                    <span className="small-text black-light">{brand.name}</span>
                    <br />
                  </div>
                ))}
              </div>
              <div className="border-bottom p-b-10">
                <StyleFilterTitle>PRICE</StyleFilterTitle>
                <div className="flex">
                  <StyleInputFilter placeholder="min" /> -
                  <StyleInputFilter placeholder="max" />
                  <button className="btn-danger m-l-auto"> GO </button>
                </div>
              </div>
            </StyleFilterContainer>

            <div className="col-12 col-md-10">
              <div className="d-flex justify-content-between bottom-border">
                <div>
                  <StyleCategoryTitle>SmartPhones / Mobiles</StyleCategoryTitle>
                  <p className="black-light small-text">
                    {product.length} items found in Mobiles
                  </p>
                </div>
                <SortOption />
              </div>

              <div className="grid-container">
                {product.map((prod) => (
                  <Card key={prod.id} product={prod} width="100" />
                ))}
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <h6>Loading....</h6>
      )}
    </React.Fragment>
  );
};

export default Categories;
