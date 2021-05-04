import Card from "../../../Modules/Card";
import { StyleCategoryTitle } from "../../Categories/CategoryStyle";
import { GridContainer, Wrapper } from "../HomeStyle/HomeStyle";

function CategoryProductsList({ category, products }) {
  // console.log(fetchProducts);
  return (
    <Wrapper>
      <br />

      <GridContainer>
        {/* {products.map((product) => {
        return (
          <Card
            key={1}
            // onAddToCart={products.handleAddToCart}
            // handleRating={products.handleRating}
            // handleSingleProduct={products.handleSingleProduct}
            product={product}
          />
        );
      })} */}
      </GridContainer>
    </Wrapper>
  );
}

export default CategoryProductsList;
