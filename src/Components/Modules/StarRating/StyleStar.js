import styled from "styled-components";

export const StyleStar = styled.svg`
  text-align: center;
  color: #000;
  polygon {
    fill: ${(props) => (props.primary ? "#000" : "#d8d8d8")};
  }
`;

export const StyleStarRating = styled.div`
  display: flex;
  flex-flow: row-reverse;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1em;
  svg {
    margin: 2px;
  }
  i {
    font-size: 14px;
  }
  span {
    font-size: 1.2rem;
  }
`;
