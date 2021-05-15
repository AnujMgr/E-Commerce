import { Link } from "react-router-dom";
import {
  FeatureCard,
  FluidImage,
  GridContainer,
  Wrapper,
} from "../HomeStyle/HomeStyle";

function CategoryProductsList({ categories }) {
  // console.log(fetchProducts);
  return (
    <Wrapper>
      <GridContainer gap="0.5em">
        {categories.map((category) => {
          return (
            <FeatureCard key={category.id}>
              <Link to={`/categories/${category.slug}`}>
                <FluidImage src={category.image} />
                <h1>{category.name}</h1>
                <p>Summer is Comming</p>
              </Link>
            </FeatureCard>
          );
        })}
      </GridContainer>
    </Wrapper>
  );
}

export default CategoryProductsList;
