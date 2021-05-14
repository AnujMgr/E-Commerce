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
            <FeatureCard>
              <FluidImage src={category.image} />
              <h1>{category.name}</h1>
              <p>Summer is Comming</p>
            </FeatureCard>
          );
        })}
      </GridContainer>
    </Wrapper>
  );
}

export default CategoryProductsList;
