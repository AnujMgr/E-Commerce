import styled from "styled-components";
import { device } from "../../Components/styles/mediaQuery";

export const StyleWrapper = styled.div`
  max-width: 1300px;
  margin: auto;
`;

export const StyleGridContainer = styled.div`
  display: grid;
  grid-template-columns: 30em 1fr;
  grid-column-gap: 1.5em;
  margin-top: 5em;
  padding: 1em;
  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const StyleImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    border-radius: 0.5rem;
    height: 27em;
    object-fit: cover;
  }
`;

export const StyleProductBrand = styled.p`
  font-size: 0.8rem;
  color: blue;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
`;

export const StyleDescriptionContainer = styled.div`
  p {
    line-height: 1.6;
  }
`;

export const StyleProductTitle = styled.h2`
  margin: 0;
  font-weight: regular;
  font-size: 2rem;
  color: gray;
`;

export const StyleProductPrice = styled.p`
  font-size: 1.5rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid #a7a7a7;
  border-top: 1px solid #a7a7a7;
`;

export const StyleFlex = styled.div`
  display: flex;
`;
