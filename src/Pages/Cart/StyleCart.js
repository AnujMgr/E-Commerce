import styled from "styled-components";
import { device } from "../../Components/styles/mediaQuery";

export const StyleWrapper = styled.div`
  width: 1300px;
  margin: auto;
`;

export const StyleCartItem = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-bottom: 0.5em;
  padding: 25px;
  transition: box-shadow 0.25s;
  border-bottom: 1px solid #afaeae;
  /* box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  } */
`;

export const StyleCartWrapper = styled.div`
  background-color: #fff;
  padding: 0.5em;
`;

export const StyleCounter = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000;
`;

export const StyleCounterContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyleGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 22em;
  grid-template-rows: auto;

  grid-column-gap: 1rem;
  width: 100%;

  @media ${device.tablet} {
  }
`;

export const StyleHeader = styled.div`
  display: flex;
  justify-content: space-between;
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
  top: 7.2em;
  width: 100%;
  right: 1em;
  grid-area: summary;
`;

export const StylePriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
`;

export const StyleCheckOutBtn = styled.button`
  background: #3321c2;
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  font-size: 18px;
  color: white;
  font-weight: 300;
`;

export const StyleCartImg = styled.img`
  max-width: 12em;
  height: auto;
  width: 100%;
  border-radius: 1rem;
  margin-right: 1rem;
`;

export const StyleBrandTitle = styled.p`
  padding-bottom: 10px;
  color: #6b6f82;
  margin: 0;
  font-size: 1.4rem;
`;

export const StyleCartHeader = styled.p`
  font-size: 1.5em;
  text-align: center;
  font-weight: 300;
  margin: 2rem auto;
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
  color: black;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 300;
`;

export const StyleRemoveBtn = styled.button`
  border: 0;
  padding: 0.6rem;
  border: 1px solid #000;
  cursor: pointer;
  background-color: #fff;
  transition: all ease-in-out 0.4s;
  :hover {
    background-color: #000;
    color: #fff;
  }
`;
