import styled from "styled-components";
import { device } from "../../../../Components/styles/mediaQuery";

const StyleGridContainer = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(1fr, 200px)); */
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: "items items items summary";
  grid-column-gap: 1rem;
  width: 100%;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-areas:
      "items"
      "summary";
  }
`;

export default StyleGridContainer;
