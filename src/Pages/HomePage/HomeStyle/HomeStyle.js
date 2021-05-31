import styled from "styled-components";
const wrapWidth = "1200px";

export const StyleFlexSB = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyleFlex = styled.div`
  display: flex;
`;

export const StyleCategoryTitle = styled.p`
  margin: 0;
  font-size: 1.5em;
  font-weight: 400;
  text-transform: uppercase;
`;

export const StyleItemsContainer = styled(StyleFlexSB)`
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2rem;
`;

export const StyleCategoryHeader = styled(StyleFlexSB)`
  padding: 1em 0;
  align-items: center;
  width: 100%;
`;

export const StyleFeaturedEntries = styled(StyleFlexSB)`
  width: 100%;
  max-width: ${wrapWidth};
  height: 100px;
  margin: 1em auto;
  gap: 0.4em;
  div {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 100%;
    border: 1px solid #959595;
    svg {
      margin-right: 1em;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${wrapWidth};
  margin: auto;
`;

export const GridContainer = styled.div`
  display: grid;
  align-items: center;
  grid-column-gap: ${(props) => (props.gap ? props.gap : "1em")};
  grid-template-areas:
    "leftCard leftCard centerCard1 centerCard1 centerCard1 rightCard rightCard"
    "leftCard leftCard centerCard2 centerCard2 centerCard2 rightCard rightCard";
  grid-template-rows: 250px 250px;
  grid-row-gap: 0.5em;
  grid-column-gap: 0.5em;
  max-width: ${wrapWidth};
  margin: auto;
  width: 100%;
  > div:first-child {
    grid-area: leftCard;
    height: 100%;
  }
  > div:nth-child(2) {
    grid-area: centerCard1;
    height: 100%;
  }
  > div:nth-child(3) {
    grid-area: centerCard2;
    height: 100%;
  }
  > div:nth-child(4) {
    grid-area: rightCard;
    height: 100%;
  }
`;

export const FluidImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FeatureCard = styled.div`
  text-align: center;
  position: relative;
  a {
    color: #fff;
  }
  h1 {
    font-size: 1.4rem;
    text-transform: uppercase;
  }
`;

export const StyleOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000000a1;
  top: 0;
  bottom: 0;
`;
