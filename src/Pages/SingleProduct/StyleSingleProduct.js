import styled from "styled-components";

export const StyleWrapper = styled.div`
  width: 1200px;
  margin: auto;
`;

export const StyleGridContainer = styled.div`
  display: grid;
  grid-template-columns: 30em 1fr;
  grid-column-gap: 1.5em;
  margin-top: 2em;
`;

export const StyleImageContainer = styled.div`
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

export const StyleCartCounter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  button,
  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 3em;
    width: 3em;
    border: 1px solid #000;
    padding: 0.4rem;
    font-size: 1em;
    background-color: #fff;
  }

  button {
    cursor: pointer;
    border: 1px solid #000;
    background-color: #fff;
    transition: all ease-in-out 0.2s;
    :hover {
      background-color: #000;
      color: #fff;
    }
  }

  span {
    border: 0;
    font-size: 1rem;
  }
`;

export const StyleCounterBtn = styled.button`
  border-radius: ${(props) => props.border};
  cursor: pointer;
  transition: all ease 0.3s;
  :hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
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

export const StyleAddToCartBtn = styled.button`
  background-color: #000;
  min-width: 20em;
  color: #fff;
  border: 0;
  cursor: pointer;
  transition: all ease 0.3s;
  :hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

// export const StyleOptionContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   background: #f3f9f9;
//   padding: 10px;
//   align-items: center;
// `;

// export const StyleReviewContainer = styled.div`
//   width: 70%;
// `;

// export const StyleBtn = styled.button`
//   font-family: Roboto;
//   width: 160px;
//   height: 40px;
//   font-size: 16px;
//   background: ${(props) => (props.primary ? "white" : "#ff7676")};
//   border: none;
//   border-radius: 5px;
//   color: ${(props) => (props.primary ? "#ff7676" : "white")};
//   cursor: pointer;
// `;

// export const StyleCounterBtn = styled.button`
//   background: white;
//   box-shadow: none;
//   border: none;
//   height: 40px;
//   width: 40px;
//   font-size: 20px;
//   color: #9f8787;
// `;

// export const StyleOption = styled.button`
//   width: auto;
//   height: 30px;
//   font-size: 16px;
//   margin-left: 10px;
//   background: white;
//   border: none;
//   border-radius: 5px;
//   color: black;
//   cursor: pointer;
//   font-family: Roboto;
// `;

// export const StyleNewPrice = styled.h1`
//   font-weight: 300;
//   font-size: 26px;
//   font-family: Roboto;
//   padding-right: 20px;
// `;

// export const StyleProductRating = styled.h1`
//   font-weight: 200;
//   font-size: 64px;
//   font-family: Roboto;
// `;

// export const StyleProductTitle = styled.h1`
//   font-family: "Roboto";
//   font-size: 2rem;
//   font-weight: 100;
//   margin: 0;
// `;
