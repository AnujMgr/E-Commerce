import React, { useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";
import data from "../../data";

const ProductsProvider = props => {
  const [products, setProducts] = useState(data.products);

  useEffect(() => {
    setProducts(data.products);
  }, []);
  return (
    <ProductsContext.Provider
      value={{
        products
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
//
// if((isStateLoaded && isCategoryLoaded && isPostLoaded) == true)

export default ProductsProvider;
