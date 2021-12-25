import { Link } from "react-router-dom";
import {
  FeatureCard,
  FluidImage,
  GridContainer,
  Wrapper,
  StyleOverlay,
} from "../HomeStyle/HomeStyle";

function CategoryProductsList({ categories }) {
  // console.log(fetchProducts);
  return (
    <Wrapper margin={"2em auto"}>
      <GridContainer gap="0.5em">
        {categories.map((category) => {
          return (
            <FeatureCard key={category.id}>
              <Link to={`/category/${category.slug}`}>
                <FluidImage src={category.image} />
                <StyleOverlay>
                  <div>
                    <h1>{category.name}</h1>
                    <p>Summer is Comming</p>
                  </div>
                </StyleOverlay>
              </Link>
            </FeatureCard>
          );
        })}
      </GridContainer>
    </Wrapper>
  );
}

export default CategoryProductsList;
