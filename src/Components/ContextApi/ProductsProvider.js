import React, { useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";
import data from "../../data";

const ProductsProvider = props => {
  const [products, setProducts] = useState(data.products);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setProducts(data.products);
    setLoading(false);
  }, []);
  return (
    <React.Fragment>
      {!isLoading ? (
        <ProductsContext.Provider
          value={{
            products
          }}
        >
          {props.children}
        </ProductsContext.Provider>
      ) : (
        <h6>Loading.....</h6>
      )}
    </React.Fragment>
  );
};
//
// if((isStateLoaded && isCategoryLoaded && isPostLoaded) == true)

export default ProductsProvider;
