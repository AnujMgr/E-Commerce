import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../../Components/Modules";
import ProductCard from "../../Components/Modules/ProductCard";
import { requestStarted } from "../../redux/RequestHandler/request-actions";
import RequestsEnum from "../../redux/RequestHandler/request-list";
import { namedRequestsInProgress } from "../../redux/RequestHandler/request-selectors";
import { ProductsContainer } from "./CategoryStyle";
import FilterList from "./FilterList";

function Main() {
  // const dispatch = useDispatch();
  const { catProducts } = useSelector((state) => state.catProducts);
  const requestState = useSelector((state) => state.requests);
  const isLoading = namedRequestsInProgress(
    requestState,
    RequestsEnum.getCatProducts
  );

  return (
    <div>
      <FilterList />
      <ProductsContainer>
        {/* <ProductCard /> */}
        {!isLoading ? (
          catProducts.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })
        ) : (
          <p>Loading</p>
        )}
      </ProductsContainer>
    </div>
  );
}

export default Main;
