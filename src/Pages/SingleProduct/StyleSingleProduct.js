import styled from "styled-components";

export const StyleDeliveryOptions = styled.div`
  width: 25%;
`;

export const StyleDescriptionContainer = styled.div`
  width: 100%;
`;
export const StyleDetailsContainer = styled.div`
  flex-grow: 2;
`;

export const StyleImgContainer = styled.div`
  flex-grow: 1;
`;

export const StyleOptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #f3f9f9;
  padding: 10px;
  align-items: center;
`;

export const StyleReviewContainer = styled.div`
  width: 70%;
`;

export const StyleBtn = styled.button`
  font-family: Roboto;
  width: 160px;
  height: 40px;
  font-size: 16px;
  background: ${(props) => (props.primary ? "white" : "#ff7676")};
  border: none;
  border-radius: 5px;
  color: ${(props) => (props.primary ? "#ff7676" : "white")};
  cursor: pointer;
`;

export const StyleCounterBtn = styled.button`
  background: white;
  box-shadow: none;
  border: none;
  height: 40px;
  width: 40px;
  font-size: 20px;
  color: #9f8787;
`;

export const StyleOption = styled.button`
  width: auto;
  height: 30px;
  font-size: 16px;
  margin-left: 10px;
  background: white;
  border: none;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  font-family: Roboto;
`;

export const StyleNewPrice = styled.h1`
  font-weight: 300;
  font-size: 26px;
  font-family: Roboto;
  padding-right: 20px;
`;

export const StyleProductRating = styled.h1`
  font-weight: 200;
  font-size: 64px;
  font-family: Roboto;
`;

export const StyleProductTitle = styled.h1`
  font-family: "Roboto";
  font-size: 2rem;
  font-weight: 100;
  margin: 0;
`;
