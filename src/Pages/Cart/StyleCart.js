import styled from "styled-components";
import { device } from "../../Components/styles/mediaQuery";
import { StylePrimaryButton } from "../../utils/CommonStyle";

export const StyleWrapper = styled.div`
  width: 1300px;
  margin: auto;
`;

export const StyleFlexSB = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyleCartItem = styled(StyleFlexSB)`
  position: relative;
  margin-bottom: 0.5em;
  padding: 25px;
  transition: box-shadow 0.25s;
  border-bottom: 1px solid #afaeae;
`;

export const StyleCartWrapper = styled.div`
  background-color: #fff;
  padding: 0.5em;
`;

export const StyleCounter = styled(StyleFlexSB)`
  width: 90px;
  align-items: center;
  border: 1px solid #000;
`;

export const StyleCounterContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyleGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 24em;
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  width: auto;
  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const StyleHeader = styled(StyleFlexSB)`
  padding: 0 20px;
  margin: 10px 0;
  border-bottom: 1px solid #000;
  border-top: 1px solid #000;
  font-weight: 300;
  p {
    text-align: center;
  }
`;

export const StyleItemDetails = styled.div`
  display: flex;
  height: auto;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const StyleOrderSummary = styled.div`
  position: sticky;
  top: 0.5em;
  width: 100%;
  border: 1px solid #000;
  padding: 1rem;
  margin-top: 3rem;
  h2 {
    text-align: center;
  }
`;

export const StyleOrderSummaryItem = styled(StyleFlexSB)`
  margin: 0.8em 0;
  p {
    margin: 0;
  }
`;

export const StylePriceContainer = styled(StyleFlexSB)`
  flex-direction: column;
  text-align: right;
`;

// ===========================================
// Buttons
export const StyleCheckOutBtn = styled(StylePrimaryButton)`
  height: 50px;
  width: 100%;
  font-size: 18px;
  font-weight: 300;
`;

export const StyleRemoveBtn = styled(StylePrimaryButton)`
  padding: 0.6rem;
  background-color: #fff;
  width: 15em;
`;

export const StyleBrandTitle = styled.p`
  color: black;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 300;
`;

export const StyleCartHeader = styled.p`
  font-size: 1.5em;
  text-align: center;
  font-weight: 600;
  margin: 2rem 0;
`;

export const StyleCartPrice = styled.p`
  background: white;
  font-weight: 300;
  font-size: 1.2rem;
`;

export const StyleDescription = styled.p`
  color: #6b6f82;
  font-size: 0.9rem;
  font-weight: 300;
`;

export const StyleItemName = styled.p`
  padding-bottom: 10px;
  color: #6b6f82;
  margin: 0;
  font-size: 1.4rem;
`;

export const StyleCartImg = styled.img`
  max-width: 12em;
  height: auto;
  width: 100%;
  border-radius: 0.5rem;
  margin-right: 1rem;
`;

export const StyleEmptyCartContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6em;
  text-align: center;
  min-height: calc(100vh - 200px);
  img {
    width: 100%;
    max-width: 500px;
  }
`;
