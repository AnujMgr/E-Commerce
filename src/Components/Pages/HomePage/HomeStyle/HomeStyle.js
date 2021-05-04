import styled from "styled-components";

export const StyleCategoryTitle = styled.p`
  margin: 0;
  font-size: 1.5em;
  font-weight: 400;
  text-transform: uppercase;
`;

export const StyleItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2%;
  justify-content: space-between;
`;

export const StyleCategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3% 0;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
`;

export const GridContainer = styled.div`
  display: grid;
  align-items: center;
  grid-column-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
`;

export const FluidImage = styled.img`
  width: 100%;
  height: 25em;
  object-fit: cover;
`;

export const FeatureCard = styled.div`
  text-align: center;
  h1 {
    font-size: 1.2rem;
    text-transform: uppercase;
  }
`;
