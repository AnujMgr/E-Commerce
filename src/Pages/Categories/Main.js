import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../Components/Modules/Loading";
import ProductCard from "../../Components/Modules/ProductCard";
import Select from "../../Components/Modules/SelectOption/Select";
import RequestsEnum from "../../redux/RequestHandler/request-list";
import { namedRequestsInProgress } from "../../redux/RequestHandler/request-selectors";
import { StyleFlexSB } from "../../utils/CommonStyle";
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
      <StyleFlexSB>
        <FilterList />
        <Select />
      </StyleFlexSB>
      <br />
      <ProductsContainer>
        {/* <ProductCard /> */}
        {!isLoading ? (
          (console.log(catProducts),
          catProducts.catProducts.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          }))
        ) : (
          <Loading />
        )}
      </ProductsContainer>
    </div>
  );
}

export default Main;
